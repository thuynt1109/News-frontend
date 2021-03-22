import { Grid } from '@material-ui/core';
import React from 'react';
import Topbar from '../../layouts/dashborads/TopBar';
import Post from './Post';
import PostItem from './PostItem';
import 'fontsource-roboto';

const Home: React.FC = () => {
  return (
    <>
      <Topbar />
      <Grid container spacing={1}>
        <Grid item sm></Grid>
        <Grid item xs={5}>
          <Post />
        </Grid>
        <Grid item xs={3}>
          <PostItem />
        </Grid>
        <Grid item sm></Grid>
      </Grid>
    </>
  );
};

export default Home;
