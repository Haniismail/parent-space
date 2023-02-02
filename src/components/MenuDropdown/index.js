import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { avatarByGender } from '../../utilities/methods';
import useAuth from '../../hooks/useAuth';
import { fetchUser } from '../../slices/user';
import WithoutLink from '../../components/ActionLink/WithoutLink';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    marginLeft: '8px',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

const MenuDropdown = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch({ type: 'LOGOUT' });
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`${classes.dropdown} menu-dropdown`}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar alt={user?.name} src={avatarByGender(user?.avatar, 'male')} id="img-preview" />
        <div className={`texts ${classes.sectionDesktop}`}>
          <span className="title">{user?.name}</span>
          <span className="subtitle">{user?.role}</span>
        </div>
        <div className="icon-holder">
          <KeyboardArrowDownIcon />
        </div>
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              marginTop: '12px',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose} component={Link} to="/test">
                    <WithoutLink
                      label="Test"
                      icon={<AccountBoxIcon />}
                      className="text-muted full-width"
                    />
                  </MenuItem>
                  <MenuItem onClick={() => handleLogout()} component={Link} to="#">
                    <WithoutLink
                      label="Déconnecter"
                      icon={<ExitToAppIcon />}
                      className="text-muted full-width"
                    />
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default MenuDropdown;
