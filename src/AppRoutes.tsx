import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './components/views/home/Home';
import SignIn from './components/views/user/SignIn';
import SignOut from './components/views/user/SignOut';
import Auth from './components/layouts/auth/auth';
import SignUp from './components/views/user/SignUp';
import DashBoard from '../src/components/layouts/dashboards/dashboard';
const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="auth/login" />,
  },
  {
    path: '/auth',
    component: Auth,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: SignIn,
      },
      {
        path: '/auth/logout',
        exact: true,
        component: SignOut,
      },
      {
        path: '/auth/sign-up',
        exact: true,
        component: SignUp,
      },
    ],
  },
  {
    path: '*',
    component: DashBoard,
    routes: [
      {
        path: '/home',
        exact: true,
        component: Home,
      },
    ],
  },
];

export default routes;
