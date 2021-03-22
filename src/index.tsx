import ReactDOM from 'react-dom';
import react from 'react';
import { mount, route } from 'navi';
import SignIn from './components/views/user/SignIn';
import SignUp from './components/views/user/SignUp';
import Home from './components/views/home/Home';
import { Router } from 'react-navi';
import './index.css';
import { withAuthentication } from './components/views/user/authenticatedRoute';
import { TOKEN_KEY } from './configs/axios';

const routes = mount({
  '/': route({
    title: 'Login',
    view: <SignIn />,
  }),
  '/sign-up': route({
    title: 'SignUp',
    view: <SignUp />,
  }),
  '/home': route({
    title: 'Home',
    view: <Home />,
  }),
});

//gan token vao context de function withAuthentication co the su dung dc token.
ReactDOM.render(
  <Router routes={routes} context={{ token: localStorage.getItem(TOKEN_KEY) }} />,
  document.getElementById('root'),
);
