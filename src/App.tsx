import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f5f5f5',
    },
  }),
);

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'News';
  }, []);

  return <Router>{renderRoutes(AppRoutes)}</Router>;
};

export default App;
