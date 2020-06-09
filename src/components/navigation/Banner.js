import React, {useState} from 'react';
import PropTypes from 'prop-types';
import URLS from '../../URLS';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

// Icons
import NTNUILogo from '../../assets/img/NTNUILogo.svg';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    width: '100%',
  },
  top: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.colors.ntnui.black,
  },
  topContentLarge: {
    maxWidth: 1000,
    margin: 'auto',
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    textAlign: 'center',
    gridGap: 20,
  },
  topContentSmall: {
    width: '100%',
    margin: 'auto',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottom: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.colors.ntnui.yellow,
  },
  bottomContent: {
    width: '100%',
    padding: 20,
    textAlign: 'center',
  },
  logo: {
    height: 60,
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -12px)',
    '&:hover': {
      filter: 'opacity(50%)',
    },
    '@media only screen and (max-width: 900px)': {
      position: 'relative',
      transform: 'none',
      left: 'unset',
    },
  },
  link: {
    color: 'white',
    '&:hover': {
      color: '#ffffffbb',
    },
  },
  selected: {
    borderBottom: '2px solid white',
  },
  menu: {
    paddingBottom: 20,
  },
  menuIcon: {
    fontSize: 40,
    color: '#FAF089',
  },
  menuLink: {
    width: '100%',
  },
}));

const URIbutton = ((props) => {
  const classes = useStyles();
  const {data, selected} = props;
  return (
    <div>
      <Button color="primary" className={classNames(classes.link, selected ? classes.selected : '')} component={Link} to={data.link} onClick={data.link === window.location.pathname ? () => window.location.reload() : null}>
        <Typography className={classes.link} variant='h6'>{data.text}</Typography>
      </Button>
    </div>
  );
});

URIbutton.propTypes = {
  data: PropTypes.object,
  selected: PropTypes.bool,
};

const Banner = (props) => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);
  const {className, title} = props;

  const toggleMenu = () => setShowMenu((showMenu) => !showMenu);

  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.top}>
        <Hidden smDown implementation='css'>
          <div className={classes.topContentLarge}>
            <URIbutton data={{link: URLS.admin, text: 'Admin'}} selected={window.location.pathname === URLS.admin} />
            <URIbutton data={{link: URLS.ntnui, text: 'Om NTNUI'}} selected={window.location.pathname === URLS.ntnui} />
            <Link to={URLS.landing} onClick={URLS.landing === window.location.pathname ? () => window.location.reload() : null}><img src={NTNUILogo} alt='Cover bilde' className={classes.logo} /></Link>
            <URIbutton data={{link: URLS.games, text: 'Studentlekene'}} selected={window.location.pathname === URLS.games} />
            <URIbutton data={{link: URLS.groups, text: 'Gruppene'}} selected={window.location.pathname === URLS.groups} />
          </div>
        </Hidden>
        <Hidden mdUp implementation='css'>
          <div className={classes.topContentSmall}>
            <Link to={URLS.landing} onClick={URLS.landing === window.location.pathname ? () => window.location.reload() : null}><img src={NTNUILogo} alt='Cover bilde' className={classes.logo} /></Link>
            <IconButton aria-label="Menu" className={classes.menuButton} onClick={() => toggleMenu()}>
              <MenuRoundedIcon className={classes.menuIcon} />
            </IconButton>
          </div>
        </Hidden>
        {showMenu &&
          <div className={classes.menu}>
            <Button color="primary" className={classNames(classes.link, classes.menuLink)} component={Link} to={URLS.admin} onClick={URLS.admin === window.location.pathname ? () => window.location.reload() : null}>
              <Typography className={classes.link} variant='h6'>Admin</Typography>
            </Button>
            <Button color="primary" className={classNames(classes.link, classes.menuLink)} component={Link} to={URLS.ntnui} onClick={URLS.ntnui === window.location.pathname ? () => window.location.reload() : null}>
              <Typography className={classes.link} variant='h6'>Om NTNUI</Typography>
            </Button>
            <Button color="primary" className={classNames(classes.link, classes.menuLink)} component={Link} to={URLS.games} onClick={URLS.games === window.location.pathname ? () => window.location.reload() : null}>
              <Typography className={classes.link} variant='h6'>Studentlekene</Typography>
            </Button>
            <Button color="primary" className={classNames(classes.link, classes.menuLink)} component={Link} to={URLS.groups} onClick={URLS.groups === window.location.pathname ? () => window.location.reload() : null}>
              <Typography className={classes.link} variant='h6'>Gruppene</Typography>
            </Button>
          </div>
        }
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottomContent}>
          <Typography variant='h4'>{title}</Typography>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Banner;
