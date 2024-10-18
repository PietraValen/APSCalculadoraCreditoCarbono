import React from 'react';
import { Typography, Container, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200 py-4 mt-8">
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {t('© 2024 Carbon Credit Calculator. All rights reserved.')}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit" href="#">
            {t('Privacy Policy')}
          </Link>
          {' | '}
          <Link color="inherit" href="#">
            {t('Terms of Service')}
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;