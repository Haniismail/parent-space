import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDarkMode } from '../../utilities/useDarkMode';
import Header from '../Header';
import Sidebar from '../Sidebar';

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

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} theme={theme} toggleTheme={toggleTheme} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <div className={`${classes.toolbar} ta-toolbar`} />
      <main className={classes.content}>
        <div className={`${classes.toolbar} ta-toolbar`} />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
