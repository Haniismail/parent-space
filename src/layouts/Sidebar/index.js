import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import constants from '../../utilities/constants';

const drawerWidth = constants.DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: 'transparent linear-gradient(180deg, #40bcf9, #1e87f0) 0 0 no-repeat padding-box',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = ({ handleDrawerToggle, mobileOpen, window }) => {
  // const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div className="sidebar">
      <Header handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Divider />
      <div className="content">
        <Container handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        <Footer />
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

Sidebar.propTypes = {
  drawerWidth: PropTypes.number,
  classes: PropTypes.any,
  theme: PropTypes.any,
  drawer: PropTypes.any,
  container: PropTypes.any,
};

export default Sidebar;
