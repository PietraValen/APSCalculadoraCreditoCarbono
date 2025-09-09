import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe, Menu as MenuIcon } from 'lucide-react';
import logo from '../assets/LogoAps-PietraValentina (1).svg';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica se é uma tela de tablet ou celular

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: darkMode ? '#303030' : '#22c55e' }}> {/* Verde no modo claro, cinza muito escuro no modo escuro */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Exibir a logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '40px',
              marginRight: '15px',
            }}
          />
        </Link>

        {/* Menu centralizado */}
        {isMobile ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
              {/* Ícones de modo escuro e idioma */}
              <IconButton color="inherit" onClick={toggleDarkMode}>
                {darkMode ? <Sun /> : <Moon />}
              </IconButton>
              <IconButton color="inherit" onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}>
                <Globe />
              </IconButton>
            </div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">{t('Home')}</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about">{t('About')}</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact">{t('Contact')}</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/articles">{t('Articles')}</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/calculator">{t('Calculator')}</MenuItem>
            </Menu>
          </>
        ) : (
          <nav style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">{t('Home')}</Button>
            <Button color="inherit" component={Link} to="/about">{t('About')}</Button>
            <Button color="inherit" component={Link} to="/contact">{t('Contact')}</Button>
            <Button color="inherit" component={Link} to="/articles">{t('Articles')}</Button>
            <Button color="inherit" component={Link} to="/calculator">{t('Calculator')}</Button>
          </nav>
        )}

        {/* Ícones de modo escuro e idioma em telas maiores */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '10px' }}>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </IconButton>
            <IconButton color="inherit" onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}>
              <Globe />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
