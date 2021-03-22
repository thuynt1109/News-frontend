import React from 'react';

import { useHistory } from 'react-router-dom';

const SignOut: React.FC = () => {
  sessionStorage.clear();
  localStorage.clear();

  const history = useHistory();
  history.push('/login');

  return <div />;
};

export default SignOut;
