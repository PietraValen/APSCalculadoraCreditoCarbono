import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
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
          throw new Error('Setor não selecionado');
      }

      const credits = totalEmissions * 0.8;
      setResults({ emissions: totalEmissions, credits });
    } catch (error) {
      console.error("Erro ao calcular emissões:", error);
    } finally {
      setLoading(false);
    }
  };
  const generatePDF = () => {
    if (!results) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Carbon Credit Calculator Report', 20, 20);
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.text(`Monthly Emissions: ${results.emissions.toFixed(2)} kg CO2`, 20, 40);
    doc.text(`Suggested Carbon Credits: ${results.credits.toFixed(2)}`, 20, 50);
    doc.text('Input Data:', 20, 60);
    Object.entries(formData).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 30, 70 + index * 10);
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
              {selectedSector === 'transportation' && (
                <>
                  <TextField
                    fullWidth
                    label={t('Fuel Type')}
                    name="vehicleType"
                    select
                    value={formData.vehicleType}
                    onChange={handleChange}
                    margin="normal"
                    required
                  >
                    <MenuItem value="gasoline">Gasoline</MenuItem>
                    <MenuItem value="diesel">Diesel</MenuItem>
                    <MenuItem value="electric">Electric</MenuItem>
                    <MenuItem value="bus">Bus</MenuItem>
                    <MenuItem value="train">Train</MenuItem>
                    <MenuItem value="bicycle">Bicycle</MenuItem>
                  </TextField>
                  {formData.vehicleType !== 'bus' && formData.vehicleType !== 'train' && (
                    <TextField
                      fullWidth
                      label={t('Fuel Consumption (L)')}
                      name="fuelConsumption"
                      type="number"
                      value={formData.fuelConsumption}
                      onChange={handleChange}
                      margin="normal"
                      required={formData.vehicleType === 'gasoline' || formData.vehicleType === 'diesel'}
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
                    <MenuItem value="coal">Coal</MenuItem>
                    <MenuItem value="naturalGas">Natural Gas</MenuItem>
                    <MenuItem value="renewable">Renewable</MenuItem>
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
                    <MenuItem value="cement">Cement</MenuItem>
                    <MenuItem value="steel">Steel</MenuItem>
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
      
                  {results && (
                    <Paper elevation={3} className="p-4 mt-4">
                      <Typography variant="h6">{t('Results')}</Typography>
                      <Typography>{t('Monthly Emissions')}: {results.emissions.toFixed(2)} kg CO2</Typography>
                      <Typography>{t('Suggested Carbon Credits')}: {results.credits.toFixed(2)}</Typography>
                      <Button variant="outlined" color="secondary" onClick={generatePDF}>
                        {t('Download PDF')}
                      </Button>
                    </Paper>
                  )}
                  {results && (
                    <div className="mt-4">
                      <Bar
                        data={{
                          labels: ['Monthly Emissions', 'Suggested Carbon Credits'],
                          datasets: [{
                            label: 'Values',
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
                              text: 'Emissions and Credits Overview',
                            },
                          },
                        }}
                      />
                    </div>
                  )}
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
};

export default Calculator;
