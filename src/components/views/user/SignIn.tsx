import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as APIs from '../../../configs/APIs';
import { authPost } from '../../../configs/axios';
import { validate, loginMessagesForm } from './validate';
import { LoginInputType } from '../../../configs/inputType';
const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorFieldHidden: {
    textAlign: 'center',
  },
  errorField: {
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f9e7e7',
  },
  error: {
    color: '#e93c84',
    fontSize: '13px',
  },
}));

const loginForm: any = {};

const SignIn = () => {
  const classes = useStyles();

  const [errorMessage, setErrorMessage] = React.useState('');
  const [errorMessageUsername, setErrorMessageUsername] = React.useState('');
  const [errorMessagePassword, setErrorMessagePassword] = React.useState('');

  React.useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
  }, []);

  const submitLoginForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate(loginForm)) {
      authPost(APIs.loginUrl, loginForm).then((LoginAPIResponse) => {
        if (LoginAPIResponse.encode) {
          const token = LoginAPIResponse.encode as string;
          //const userInfo = LoginAPIResponse.userInfo as UserInfo;

          localStorage.setItem('token', JSON.stringify(token));
          //localStorage.setItem('userInfo', JSON.stringify(userInfo));

          window.location.href = '/home';
        } else {
          // props.sendDisableFlag(false);
        }
      });
    } else {
      setErrorMessageUsername(loginMessagesForm.username);
      setErrorMessagePassword(loginMessagesForm.password);
      // props.sendDisableFlag(false);
    }
  };
  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name.toString();
    const value = event.target.value.toString();
    loginForm[name] = value;
    validateEach(name);
  };

  const validateEach = (name: string) => {
    setErrorMessage('');
    switch (name) {
      case LoginInputType.username:
        setErrorMessageUsername('');
        break;
      case LoginInputType.password:
        setErrorMessagePassword('');
        break;
      default:
        break;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitLoginForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            // autoComplete="username"
            // autoFocus
            onChange={onInputChangeHandler}
            error={errorMessageUsername ? true : false}
            helperText={errorMessageUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={onInputChangeHandler}
            error={errorMessagePassword ? true : false}
            helperText={errorMessagePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          {/** error message */}
          <Box className={errorMessage ? classes.errorField : classes.errorFieldHidden}>
            <span id="loginResult" className={classes.error}>
              {errorMessage}
            </span>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/auth/sign-in" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
