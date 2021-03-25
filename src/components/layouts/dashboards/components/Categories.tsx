import { makeStyles, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import React from 'react';
import { Category } from '../../../../configs/interfaces';
// import { apiGet } from '../../../../configs/axios';

const useStyle = makeStyles((theme) => ({
  root: {
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 650,
    display: 'inline-block',
    padding: theme.spacing(1.5),
    transition: 'all 2s ease',
    '&:hover': {
      borderBottom: 'solid 1px black',
      cursor: 'pointer',
    },
  },
}));

interface Props {
  categoriesList: Category[];
}

const Categories: React.FC = () => {
  const classes = useStyle();

  return (
    <div>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        tài chính - kinh doanh
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        thời trang trẻ
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        công nghệ
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        công nghệ
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        Bóng đá
      </Typography>
      <Typography variant="h1" component="div" className={classes.root} align="center">
        công nghệ
      </Typography>
    </div>
  );
};

export default Categories;
