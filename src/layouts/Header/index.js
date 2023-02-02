import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import constants from '../../utilities/constants';
import { MenuDropdown } from '../../components';
import imAvatar from '../../assets/img/icons/avatar.png';

const drawerWidth = constants.DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: '#ffffff',
    color: '#000000',
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2) !important',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border: '1px solid #d6d6da',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#70A2B8',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '38ch',
    },
  },
  toolbar: theme.mixins.toolbar,
}));

const Header = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const [name] = useState('');
  const [division] = useState('');
  const [avatar] = useState(imAvatar);
  const [options] = useState([]);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.search + ' search-main'}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <Autocomplete
            className="searchbar"
            getOptionLabel={(option) => option}
            options={options}
            autoComplete
            // groupBy={(option) => option}
            includeInputInList
            filterSelectedOptions
            onInputChange={(event, newInputValue) => {}}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Chercher cours, examens ou sujets..."
                variant="outlined"
                fullWidth
              />
            )}
            renderOption={(option) => {
              return <span>{option}</span>;
            }}
          />
        </div>
        <div className={classes.grow} />
        <MenuDropdown name={name} division={division} avatar={avatar} />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  drawerWidth: PropTypes.number,
  informations: PropTypes.object,
  dispatch: PropTypes.func,
  classes: PropTypes.any,
  name: PropTypes.string,
  setName: PropTypes.func,
  division: PropTypes.string,
  setDivision: PropTypes.func,
  points: PropTypes.string,
  setPoints: PropTypes.func,
  avatar: PropTypes.string,
  setAvatar: PropTypes.func,
};

export default Header;
