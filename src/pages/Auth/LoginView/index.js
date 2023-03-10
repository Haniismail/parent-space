import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, CardContent, Container, Typography, makeStyles } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import JWTLogin from './JWTLogin';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  bannerChip: {
    marginRight: theme.spacing(2),
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%',
    },
  },
}));

const LoginView = () => {
  const classes = useStyles();
  const { method } = useAuth();

  return (
    <div className={classes.root} title="Login">
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mb={8} display="flex" justifyContent="center">
          <RouterLink to="/">{/* <Logo /> */}</RouterLink>
        </Box>
        <Card>
          <CardContent className={classes.cardContent}>
            <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
              <div>
                <Typography color="textPrimary" gutterBottom variant="h2">
                  Login
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Login on the internal platform
                </Typography>
              </div>
            </Box>
            <Box flexGrow={1} mt={3}>
              {method === 'JWT' && <JWTLogin />}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default LoginView;
