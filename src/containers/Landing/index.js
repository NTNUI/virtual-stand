import React, {useRef} from 'react';
import URLS from '../../URLS';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import GA from '../../analytics';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Images/icons
import Studenterhytta from '../../assets/img/studenterhytta.jpg';
import aktivCampus from '../../assets/img/aktivCampus.jpg';
import NTNUILogo from '../../assets/img/NTNUILogo.svg';
import genfors from '../../assets/img/genfors.jpg';
import studentlekene from '../../assets/img/studentlekene.jpg';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

// Project Components
import Paper from '../../components/layout/Paper';
import Navigation from '../../components/navigation/Navigation';
import GroupsInfo from '../../data/groups-info.json';

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
    '&:hover': {
      boxShadow: '0px 1px 4px #dddddd',
    },
  },
  groupHeader: {
    color: theme.colors.text.primaryContrast,
    textShadow: '0px 0px 10px black, 0px 0px 10px black, 0px 0px 10px black',
    margin: '120px auto',
    textAlign: 'center',
    fontSize: '2.2rem',
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
  groupsRoot: {
    maxWidth: 1200,
    margin: 'auto',
    padding: 20,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 20,
  },
  boxes: {
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 20,
    '@media only screen and (max-width: 1000px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media only screen and (max-width: 700px)': {
      gridTemplateColumns: '1fr',
    },
  },
  box: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '2.5rem',
  },
  button: {
    background: theme.colors.ntnui.black,
    width: '100%',
    height: 100,
    borderRadius: 15,
    fontSize: '1.4rem',
  },
}));

const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'});

function Landing(props) {
  const classes = useStyles();
  const content = useRef(null);
  const executeScroll = () => {
    scrollToRef(content);
    GA.event('Button click', 'Scroll down on landing page');
  };

  const GroupButton = (props) => {
    const {to, children} = props;
    return (
      <Button
        component={Link}
        to={to}
        variant='contained'
        color='secondary'
        className={classes.button}>
        {children}
      </Button>);
  };

  GroupButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

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
          <Paper img={'https://ntnui.no/wp-content/uploads/2020/03/visjon-2.jpg'}>
            <Typography variant='h2' className={classes.groupHeader}>Om NTNUI</Typography>
          </Paper>
        </Button>
        <Button component={Link} to={URLS.games} className={classes.groupButton}>
          <Paper img={studentlekene}>
            <Typography variant='h2' className={classes.groupHeader}>Studentlekene</Typography>
          </Paper>
        </Button>
        <Button component={Link} to={URLS.activeCampus} className={classes.groupButton}>
          <Paper img={aktivCampus}>
            <Typography variant='h2' className={classes.groupHeader}>AktivCampus</Typography>
          </Paper>
        </Button>
      </div>
      <div className={classes.groupsRoot}>
        <Typography variant='h2' className={classes.title}>Gruppene våre</Typography>
        <div className={classes.boxes}>
          {GroupsInfo.map((group) => (
            <GroupButton key={group.slug} to={URLS.groups.concat(group.slug).concat('/')}>{group.name}</GroupButton>
          ))}
        </div>
      </div>
    </Navigation>
  );
}

export default Landing;
