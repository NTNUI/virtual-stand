import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import URLS from '../../URLS';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Project Components
import Banner from '../../components/navigation/Banner';
import Navigation from '../../components/navigation/Navigation';
import GroupsInfo from '../../data/groups-info.json';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
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

function Groups(props) {
  const classes = useStyles();

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
      <Banner title='Grupper' />
      <div className={classes.root}>
        <Typography variant='h2' className={classes.title}>Her er en oversikt over alle de forskjellige gruppene våre</Typography>
        <div className={classes.boxes}>
          {GroupsInfo.map((group) => (
            <GroupButton key={group.slug} to={URLS.groups.concat(group.slug).concat('/')}>{group.name}</GroupButton>
          ))}
        </div>
      </div>
    </Navigation>
  );
}

export default Groups;
