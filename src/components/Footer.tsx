import React from 'react';
import { Typography, Container, Link, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme(); // Hook to access current theme

  return (
    <footer
      style={{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3, 0), // Dynamic padding based on theme spacing
        marginTop: theme.spacing(8),
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {t('© 2024 CarbonPath. All rights reserved.')}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
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
