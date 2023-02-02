import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import './App.scss';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Notifier } from './layouts';
import { ModalsProvider } from './components';
import { AuthProvider } from './contexts/JWTAuthContext';
import routes, { renderRoutes } from './routes';
import { useDarkMode } from './utilities/useDarkMode';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const { i18n } = useTranslation();
  const classes = useStyles();
  const [theme, componentMounted] = useDarkMode();
  if (!componentMounted) {
    return <div />;
  }
  const wrapperClass = ` wrapper${theme === 'dark' ? ' dark' : ''}${
    i18n.language === 'ar' ? ' rtl' : ''
  }`;

  return (
    <div className={classes.root + wrapperClass}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={12}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Notifier />
        <BrowserRouter>
          <AuthProvider>
            {renderRoutes(routes)}
            <ModalsProvider />
          </AuthProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
