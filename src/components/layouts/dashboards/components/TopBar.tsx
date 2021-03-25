import { AppBar, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//icon
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

import React from 'react';
import { Category } from '../../../../configs/interfaces';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    borderBottom: '2px solid #777',
  },
  searchInput: {
    opacity: '0.6',
    padding: '0px 8px',
    border: '0.5px solid #777',
    borderRadius: '15px',
    fontSize: '0.8rem',
    maxHeight: '35px',
    marginTop: theme.spacing(0.9),
    // '$:hover': {
    //   pointer: 'cusor',
    // },
  },
  display: {
    display: 'flex',
  },
  logo: {
    width: '200px',
    height: '40px',
    marginLeft: theme.spacing(2),
  },
}));

interface Props {
  CategoryItem: Category[];
}

const TopBar: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.root} elevation={1}>
        <Toolbar>
          <Grid container>
            <Grid item>
              <img className={classes.logo} src="../../../image/logo.png" alt="logo" />
            </Grid>
            <Grid item sm></Grid>
            <Grid item className={classes.display}>
              <InputBase
                placeholder="Search topics"
                startAdornment={<SearchIcon />}
                className={classes.searchInput}
              />
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
