import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" className="mt-8">
      <Paper elevation={3} className="p-8">
        <Typography variant="h4" component="h1" gutterBottom>
          {t('About Our AI-Enhanced Carbon Credit Calculations')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('Our Carbon Credit Calculator utilizes advanced artificial intelligence algorithms to enhance the accuracy of carbon credit calculations. By leveraging machine learning techniques, we can provide more precise estimations of carbon emissions and the corresponding credits needed to offset them.')}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {t('How Our AI Works')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('1. Data Collection: Our system collects vast amounts of data on energy consumption patterns, transportation emissions, industrial processes, and more.')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('2. Pattern Recognition: Using neural networks, our AI identifies complex patterns in carbon emission data that might be missed by traditional calculation methods.')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('3. Predictive Modeling: We employ predictive models that can forecast future emissions based on current trends and user-input data.')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('4. Continuous Learning: Our AI system continuously learns from new data, improving its accuracy over time.')}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom className="mt-4">
          {t('Environmental Benefits')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('By providing more accurate carbon credit calculations, we help:')}
        </Typography>
        <ul className="list-disc pl-8">
          <li>{t('Reduce overall carbon emissions through better-informed decision making')}</li>
          <li>{t('Optimize resource allocation for carbon offset projects')}</li>
          <li>{t('Encourage more businesses and individuals to participate in carbon credit programs')}</li>
        </ul>
      </Paper>
    </Container>
  );
};

export default About;