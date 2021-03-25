import { Box, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  topBar: {
    zIndex: 2,
    position: 'relative',
  },
  navBar: {
    zIndex: 3,
    width: '100%',
    maxWidth: 250,
    // minWidth: 200,
    flex: '0 0 auto',
  },
  navBarSmall: {
    zIndex: 3,
    width: '100%',
    maxWidth: 80,
    // minWidth: 50,
    flex: '0 0 auto',
  },
  content: {
    height: '100%',
    overflowY: 'auto',
    flex: '1 1 auto',
  },
}));

interface Props {
  /** params */
  route?: any;
}

const Dashboard: React.FC<Props> = (props) => {
  const { route } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Fragment>
        <Box className={classes.container}>
          <Box component="main" className={classes.content}>
            <Suspense fallback={<LinearProgress />}>{renderRoutes(route.routes)}</Suspense>
          </Box>
        </Box>
      </Fragment>
    </Box>
  );
};

export default Dashboard;
