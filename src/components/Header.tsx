import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, changeLanguage }) => {
  const { t, i18n } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('Carbon Credit Calculator')}
        </Typography>
        <nav>
          <Button color="inherit" component={Link} to="/">{t('Home')}</Button>
          <Button color="inherit" component={Link} to="/about">{t('About')}</Button>
          <Button color="inherit" component={Link} to="/contact">{t('Contact')}</Button>
          <Button color="inherit" component={Link} to="/articles">{t('Articles')}</Button>
          <Button color="inherit" component={Link} to="/calculator">{t('Calculator')}</Button>
        </nav>
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <Sun /> : <Moon />}
        </IconButton>
        <Switch
          checked={i18n.language === 'pt'}
          onChange={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
          color="default"
        />
        <Globe />
      </Toolbar>
    </AppBar>
  );
};

export default Header;