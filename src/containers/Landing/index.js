import React, {useRef} from 'react';
import URLS from '../../URLS';
import {Link} from 'react-router-dom';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Images/icons
import Studenterhytta from '../../assets/img/studenterhytta.jpg';
import NTNUILogo from '../../assets/img/NTNUILogo.svg';
import genfors from '../../assets/img/genfors.jpg';
import rugby from '../../assets/img/rugby.jpg';
import innebandy from '../../assets/img/innebandy.jpg';
import studentlekene from '../../assets/img/studentlekene.jpg';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

// Project Components
import Paper from '../../components/layout/Paper';
import Navigation from '../../components/navigation/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: 'auto',
    padding: 20,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 20,
    '@media only screen and (max-width: 700px)': {
      gridTemplateColumns: '1fr',
    },
  },
  coverImgContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to bottom, transparent 40%, ' + theme.colors.background.primary + ')',
  },
  coverImg: {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  coverImgContent: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    fontSize: '2rem',
    color: theme.colors.text.primaryContrast,
    textShadow: '0px 0px 10px black, 0px 0px 10px black',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  groupButton: {
    padding: 0,
    borderRadius: 15,
  },
  groupHeader: {
    color: theme.colors.text.primaryContrast,
    textShadow: '0px 0px 10px black, 0px 0px 10px black',
    margin: '120px auto',
    textAlign: 'center',
    fontSize: '1.7rem',
  },
  '@keyframes move': {
    '0%': {
      bottom: 5,
    },
    '50%': {
      bottom: 15,
    },
    '100%': {
      bottom: 5,
    },
  },
  moreButton: {
    // eslint-disable-next-line quotes
    animation: `$move 2s linear infinite`,
    position: 'absolute',
    bottom: 5,
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  moreIcon: {
    fontSize: 60,
    color: '#FAF089',
  },
}));

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Landing(props) {
  const classes = useStyles();
  const content = useRef(null);
  const executeScroll = () => scrollToRef(content);

  return (
    <Navigation footer>
      <div className={classes.coverImgContainer}>
        <img src={Studenterhytta} alt='Cover bilde' className={classes.coverImg} width='100%' />
        <div className={classes.coverImgContent}>
          <img src={NTNUILogo} alt='Cover bilde' className={classes.coverImg} width='200px' />
          <Typography variant='h1' className={classes.header}>De beste øyeblikkene i studietiden</Typography>
        </div>
        <IconButton aria-label="Scroll" className={classes.moreButton} onClick={executeScroll}>
          <ExpandMoreRoundedIcon className={classes.moreIcon} height='40px' />
        </IconButton>
      </div>
      <div className={classes.root} ref={content}>
        <Button component={Link} to={URLS.admin} className={classes.groupButton}>
          <Paper img={genfors}>
            <Typography variant='h2' className={classes.groupHeader}>Admin</Typography>
          </Paper>
        </Button>
        <Button component={Link} to={URLS.ntnui} className={classes.groupButton}>
          <Paper img={rugby}>
            <Typography variant='h2' className={classes.groupHeader}>Om NTNUI</Typography>
          </Paper>
        </Button>
        <Button component={Link} to={URLS.games} className={classes.groupButton}>
          <Paper img={studentlekene}>
            <Typography variant='h2' className={classes.groupHeader}>Studentlekene</Typography>
          </Paper>
        </Button>
        <Button component={Link} to={URLS.groups} className={classes.groupButton}>
          <Paper img={innebandy}>
            <Typography variant='h2' className={classes.groupHeader}>Gruppene</Typography>
          </Paper>
        </Button>
      </div>
    </Navigation>
  );
}

export default Landing;
