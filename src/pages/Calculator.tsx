import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

interface EmissionFactors {
  [key: string]: {
    [key: string]: number;
  };
}
const emissionFactors: EmissionFactors = {
    transportation: {
      gasoline: 2.31,
      diesel: 2.68,
      electric: 0,
      bus: 0.05,
      train: 0.03,
      bicycle: 0,
      car: 2.31, // Fator para carro
      airplane: 0.25, // Fator para avião
    },
    energy: {
      coal: 0.937,
      naturalGas: 0.450,
      renewable: 0,
    },
    industrial: {
      cement: 0.8,
      steel: 1.8,
    },
    waste: 0.10,
  };
  const Calculator: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
      transportation: '',
      energy: '',
      industrial: '',
      waste: '',
      renewableEnergy: '',
      vehicleType: '',
      fuelConsumption: '',
      distance: '',
      trips: '',
      passengers: '',
      electricityUsage: '',
      industryType: '',
      fuelType: '',
    });
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<{ emissions: number; credits: number } | null>(null);
    const [selectedSector, setSelectedSector] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSectorChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedSector(e.target.value as string);
      };
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        let totalEmissions = 0;
    
        try {
          switch (selectedSector) {
            case 'transportation': {
              const { distance, trips, passengers, vehicleType, fuelConsumption } = formData;
              const distanceValue = parseFloat(distance);
              const tripsValue = parseInt(trips);
              const passengersValue = parseInt(passengers);
              
              if (vehicleType === 'bus' || vehicleType === 'train') {
                totalEmissions = emissionFactors.transportation[vehicleType] * distanceValue * tripsValue * passengersValue;
              } else if (vehicleType === 'car') {
                const fuelEmissions = emissionFactors.transportation[formData.fuelType] * parseFloat(fuelConsumption);
                totalEmissions = fuelEmissions * tripsValue;
              } else if (vehicleType === 'airplane') {
                totalEmissions = emissionFactors.transportation[vehicleType] * distanceValue * tripsValue * passengersValue;
              } else {
                const fuelEmissions = emissionFactors.transportation[vehicleType] * parseFloat(fuelConsumption);
                totalEmissions = fuelEmissions * tripsValue;
              }
              break;
            }
    
            case 'energy': {
              const energyEmissions = emissionFactors.energy[formData.electricityUsage] * parseFloat(formData.energy);
              totalEmissions = energyEmissions;
              break;
            }
    
            case 'industrial': {
              const industrialEmissions = emissionFactors.industrial[formData.industryType] * parseFloat(formData.industrial);
              totalEmissions = industrialEmissions;
              break;
            }
    
            case 'waste': {
              totalEmissions = parseFloat(formData.waste) * emissionFactors.waste;
              break;
            }
    
            default:
              throw new Error(t('Sector not selected'));
          }
    
          const credits = totalEmissions * 0.8;
          setResults({ emissions: totalEmissions, credits });
        } catch (error) {
          console.error("Error calculating emissions:", error);
        } finally {
          setLoading(false);
        }
      };
      const generatePDF = () => {
        if (!results) return;
    
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(t('Carbon Credit Calculator Report'), 20, 20);
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
        doc.text(`${t('Monthly Emissions')}: ${results.emissions.toFixed(2)} kg CO2`, 20, 40);
        doc.text(`${t('Suggested Carbon Credits')}: ${results.credits.toFixed(2)}`, 20, 50);
        doc.text(t('Input Data') + ':', 20, 60);
        Object.entries(formData).forEach(([key, value], index) => {
          doc.text(`${t(key)}: ${value}`, 30, 70 + index * 10);
        });
        doc.save('carbon-credit-report.pdf');
      };
      return (
        <Container maxWidth="lg" className="mt-8">
          <Typography variant="h3" component="h1" gutterBottom>
            {t('AI-Powered Carbon Credit Calculator')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="p-6">
                <form onSubmit={handleSubmit}>
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel>{t('Select Sector')}</InputLabel>
                    <Select value={selectedSector} onChange={handleSectorChange}>
                      <MenuItem value="transportation">{t('Transportation')}</MenuItem>
                      <MenuItem value="energy">{t('Energy')}</MenuItem>
                      <MenuItem value="industrial">{t('Industrial')}</MenuItem>
                      <MenuItem value="waste">{t('Waste')}</MenuItem>
                    </Select>
                  </FormControl>
    
                  {/* Formulário de Transporte */}
                  {selectedSector === 'transportation' && (
                    <>
                      <TextField
                        fullWidth
                        label={t('Vehicle Type')}
                        name="vehicleType"
                        select
                        value={formData.vehicleType}
                        onChange={handleChange}
                        margin="normal"
                        required
                      >
                        <MenuItem value="car">{t('Car')}</MenuItem>
                        <MenuItem value="airplane">{t('Airplane')}</MenuItem>
                        <MenuItem value="bus">{t('Bus')}</MenuItem>
                        <MenuItem value="train">{t('Train')}</MenuItem>
                        <MenuItem value="bicycle">{t('Bicycle')}</MenuItem>
                      </TextField>
    
                      <TextField
                        fullWidth
                        label={t('Fuel Type')}
                        name="fuelType"
                        select
                        value={formData.fuelType}
                        onChange={handleChange}
                        margin="normal"
                        required={formData.vehicleType === 'gasoline' || formData.vehicleType === 'diesel'}
                      >
                        <MenuItem value="gasoline">{t('Gasoline')}</MenuItem>
                        <MenuItem value="diesel">{t('Diesel')}</MenuItem>
                        <MenuItem value="electric">{t('Electric')}</MenuItem>
                      </TextField>
    
                      {formData.fuelType !== 'bus' && formData.fuelType !== 'train' && (
                        <TextField
                          fullWidth
                          label={t('Fuel Consumption (L)')}
                          name="fuelConsumption"
                          type="number"
                          value={formData.fuelConsumption}
                          onChange={handleChange}
                          margin="normal"
                          required
                        />
                      )}
    
                      <TextField
                        fullWidth
                        label={t('Distance (km)')}
                        name="distance"
                        type="number"
                        value={formData.distance}
                        onChange={handleChange}
                        margin="normal"
                        required
                      />
                      <TextField
                        fullWidth
                        label={t('Number of Trips')}
                        name="trips"
                        type="number"
                        value={formData.trips}
                        onChange={handleChange}
                        margin="normal"
                        required
                      />
                      <TextField
                        fullWidth
                        label={t('Number of Passengers')}
                        name="passengers"
                        type="number"
                        value={formData.passengers}
                        onChange={handleChange}
                        margin="normal"
                        required
                      />
                    </>
                  )}
    
                                {/* Formulário de Energia */}
              {selectedSector === 'energy' && (
                <>
                  <TextField
                    fullWidth
                    label={t('Energy Source')}
                    name="electricityUsage"
                    select
                    value={formData.electricityUsage}
                    onChange={handleChange}
                    margin="normal"
                    required
                  >
                    <MenuItem value="coal">{t('Coal')}</MenuItem>
                    <MenuItem value="naturalGas">{t('Natural Gas')}</MenuItem>
                    <MenuItem value="renewable">{t('Renewable')}</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    label={t('Energy Consumption (kWh)')}
                    name="energy"
                    type="number"
                    value={formData.energy}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                </>
              )}

              {/* Formulário Industrial */}
              {selectedSector === 'industrial' && (
                <>
                  <TextField
                    fullWidth
                    label={t('Industry Type')}
                    name="industryType"
                    select
                    value={formData.industryType}
                    onChange={handleChange}
                    margin="normal"
                    required
                  >
                    <MenuItem value="cement">{t('Cement')}</MenuItem>
                    <MenuItem value="steel">{t('Steel')}</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    label={t('Production Amount (tonnes)')}
                    name="industrial"
                    type="number"
                    value={formData.industrial}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                </>
              )}

              {/* Formulário de Resíduos */}
              {selectedSector === 'waste' && (
                <TextField
                  fullWidth
                  label={t('Waste Amount (kg)')}
                  name="waste"
                  type="number"
                  value={formData.waste}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
              )}

              <Button type="submit" variant="contained" color="primary" className="mt-4">
                {loading ? <CircularProgress size={24} /> : t('Calculate Emissions')}
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Seção de Resultados e Gráfico */}
        <Grid item xs={12} md={6}>
          {results && (
            <Paper elevation={3} className="p-4">
              <Typography variant="h6">{t('Results')}</Typography>
              <Typography>{t('Monthly Emissions')}: {results.emissions.toFixed(2)} kg CO2</Typography>
              <Typography>{t('Suggested Carbon Credits')}: {results.credits.toFixed(2)}</Typography>
              <Button variant="outlined" color="secondary" onClick={generatePDF}>
                {t('Download PDF')}
              </Button>
              <div className="mt-4">
                <Bar
                  data={{
                    labels: [t('Monthly Emissions'), t('Suggested Carbon Credits')],
                    datasets: [{
                      label: t('Values'),
                      data: [results.emissions, results.credits],
                      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                    }],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: t('Emissions and Credits Overview'),
                      },
                    },
                  }}
                />
              </div>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
export default Calculator;