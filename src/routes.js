import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';
import AuthGuard from './components/AuthGuard';
import GuestGuard from './components/GuestGuard';
import SwitchGuard from './components/SwitchGuard';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/404',
    component: () => <Redirect to="/" />,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('./pages/Auth/LoginView')),
  },
  {
    exact: true,
    guard: SwitchGuard,
    path: '/switch',
    component: lazy(() => import('./pages/Auth/Switch')),
  },
  {
    path: '/',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: lazy(() => import('./pages/Test')),
      },

      {
        exact: true,
        path: '/endirect',
        component: lazy(() => import('./pages/en direct')),
      },
      {
        exact: true,
        path: '/endirect',
        component: lazy(() => import('./pages/en direct')),
      },
      {
        exact: true,
        path: '/examens',
        component: lazy(() => import('./pages/examens')),
      },
      {
        exact: true,
        path: '/travailAFaire',
        component: lazy(() => import('./pages/Calendar/Index')),
      },

      {
        exact: true,
        path: '/porte-monnaie',
        component: lazy(() => import('./pages/PorteMonnaie')),
      },

      {
        exact: true,
        path: '/matieres',
        component: lazy(() => import('./pages/matieres/matieres')),
      },

      {
        path: '*',
        component: lazy(() => import('./pages/Auth/NotFound')),
      },
    ],
  },
];

export default routes;
