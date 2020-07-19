import React, {useState} from 'react';
import firebase from '../../firebase';
import {useHistory, useLocation} from 'react-router-dom';
import URLS from '../../URLS';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Project Components
import Banner from '../../components/navigation/Banner';
import Navigation from '../../components/navigation/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: 'auto',
    padding: 20,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 20,
    textAlign: 'center',
    color: 'white',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 15,
    padding: 25,
    background: theme.colors.background.primaryLight,
    borderRadius: 15,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    height: 50,
    marginBottom: 16,
  },
  error: {
    fontSize: '1.2rem',
  },
}));

function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push(location.state && location.state.referrer ? location.state.referrer : URLS.landing))
      .catch((error) => setError(error.code + ' - ' + error.message));
  };

  return (
    <Navigation footer>
      <Banner title='Logg inn' />
      <div className={classes.root}>
        <form className={classes.flex} autoComplete='off' onSubmit={formSubmit}>
          <TextField type='email' onChange={(e) => setEmail(e.target.value)} value={email} className={classes.input} label='Epost' variant='outlined' required />
          <TextField type='password' onChange={(e) => setPassword(e.target.value)} value={password} className={classes.input} label='Passord' variant='outlined' required />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            type='submit'
          >
          Logg inn
          </Button>
          {error !== '' && <Typography variant='h3' className={classes.error}>{error}</Typography>}
        </form>
      </div>
    </Navigation>
  );
}

export default Login;
