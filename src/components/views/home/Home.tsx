import { Grid } from '@material-ui/core';
import React from 'react';
import Topbar from '../../layouts/dashboards/components/TopBar';
import Post from './Post';
import PostItem from './PostItem';
import 'fontsource-roboto';
import { Category } from '../../../configs/interfaces';
//import { apiGet } from '../../../configs/axios';
import * as APIs from '../../../configs/APIs';

interface Props {
  CategoryItem: Category[];
}

const Home: React.FC = () => {
  // const [category, setCategory] = React.useState({});

  // React.useEffect(() => {
  //   apiGet(APIs.getAllCategory).then((HTTPdata) => {
  //     setCategory(HTTPdata.values);
  //   });
  // }, []);
  // console.log(category);

  return (
    <>
      {/*  <Topbar CategoryItem={props.categories} /> */}
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
