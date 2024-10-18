import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" className="mt-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('AI-Powered Carbon Credit Predictions')}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {t('Empowering Environmental Sustainability')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('Welcome to our AI-powered Carbon Credit Calculator. Our advanced system uses cutting-edge artificial intelligence to provide accurate predictions for carbon emissions and credits. By leveraging AI, we help individuals and businesses make informed decisions to mitigate their carbon footprint and contribute to a sustainable future.')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('Our tool considers various factors such as energy consumption, transportation habits, and industrial processes to give you a comprehensive view of your carbon impact. With AI-assisted predictions, you can plan your sustainability efforts more effectively and track your progress over time.')}
      </Typography>
      <Button
        component={Link}
        to="/calculator"
        variant="contained"
        color="primary"
        size="large"
        className="mt-4"
      >
        {t('Try Our Calculator')}
      </Button>
    </Container>
  );
};

export default Home;