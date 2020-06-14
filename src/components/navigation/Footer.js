import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

// Icons
import NTNUILOGO from '../../assets/img/NTNUILogo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    bottom: 0, left: 0, right: 0,

    backgroundColor: theme.colors.background.primaryLight,
  },
  content: {
    width: 'fit-content',
    paddingBottom: 40,
    paddingTop: 20,
    color: theme.colors.text.primaryContrast,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    margin: 'auto',
    '@media only screen and (max-width: 700px)': {
      paddingTop: 0,
    },
  },
  logo: {
    height: 60,
    marginBottom: 20,
  },
  svg: {
    marginBottom: -10,
  },
  svgPath: {
    fill: theme.colors.background.primaryLight,
  },
  sprint: {
    color: theme.colors.text.primaryContrast,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 155" className={classes.svg}>
        <path className={classes.svgPath} fillOpacity="1" d="M0,64L40,58.7C80,53,160,43,240,74.7C320,107,400,181,480,181.3C560,181,640,107,720,85.3C800,64,880,96,960,122.7C1040,149,1120,171,1200,160C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
      <div className={classes.root}>
        <div className={classes.content}>
          <img src={NTNUILOGO} className={classes.logo} alt='NTNUI Logo' height='60px' />
          <a href='https://ntnui.no/sprint/' target='_noopener' className={classes.sprint}>Laget med <span role='img' aria-label='kjærlighet'>&#128151;</span> av NTNUI Sprint</a>
          <a href='https://ntnui.no/' target='_noopener' className={classes.sprint}>ntnui.no</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
