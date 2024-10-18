import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import jsPDF from 'jspdf';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Calculator: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    transportation: '',
    energy: '',
    industrial: '',
    waste: '',
    renewableEnergy: '',
    vehicleType: '',
    applianceEfficiency: '',
    fuelConsumption: '',
    electricityUsage: '',
    recycling: '',
    composting: '',
  });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | { emissions: number; credits: number }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 2000));
    const emissions = Math.random() * 1000;
    const credits = emissions * 0.8;
    setResults({ emissions, credits });
    setLoading(false);
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

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: t('Carbon Emissions'),
        data: [650, 590, 800, 810, 560, 550],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: t('Carbon Credits'),
        data: [520, 472, 640, 648, 448, 440],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
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
              <TextField
                fullWidth
                label={t('Transportation Emissions (kg CO2)')}
                name="transportation"
                type="number"
                value={formData.transportation}
                onChange={handleChange}
                margin="normal"
                required
              />
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
              <TextField
                fullWidth
                label={t('Industrial Processes (kg CO2)')}
                name="industrial"
                type="number"
                value={formData.industrial}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Waste (kg)')}
                name="waste"
                type="number"
                value={formData.waste}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Renewable Energy Usage (%)')}
                name="renewableEnergy"
                type="number"
                value={formData.renewableEnergy}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Vehicle Type')}
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Appliance Efficiency Rating')}
                name="applianceEfficiency"
                value={formData.applianceEfficiency}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Monthly Fuel Consumption (L)')}
                name="fuelConsumption"
                type="number"
                value={formData.fuelConsumption}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Monthly Electricity Usage (kWh)')}
                name="electricityUsage"
                type="number"
                value={formData.electricityUsage}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Recycling Rate (%)')}
                name="recycling"
                type="number"
                value={formData.recycling}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Composting Rate (%)')}
                name="composting"
                type="number"
                value={formData.composting}
                onChange={handleChange}
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" className="mt-4" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : t('Calculate')}
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {results && (
            <Paper elevation={3} className="p-6">
              <Typography variant="h5" gutterBottom>
                {t('Results')}
              </Typography>
              <Typography variant="body1">
                {t('Monthly Carbon Emissions')}: {results.emissions.toFixed(2)} kg CO2
              </Typography>
              <Typography variant="body1">
                {t('Suggested Carbon Credits')}: {results.credits.toFixed(2)}
              </Typography>
              <Button onClick={generatePDF} variant="contained" color="secondary" className="mt-4">
                {t('Download PDF Report')}
              </Button>
              <div className="mt-4">
                <Line data={chartData} />
              </div>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;