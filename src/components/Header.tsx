import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';
import logo from '../assets/logo.png'; // Verifique se este caminho está correto

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, changeLanguage }) => {
  const { t, i18n } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Exibir a logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '160px', // Ajuste a altura conforme necessário
            marginRight: '15px', // Espaçamento à direita
          }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* O nome do projeto ainda pode ser exibido ao lado do logo, se desejar */}
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
        <IconButton color="inherit">
          <Globe />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
