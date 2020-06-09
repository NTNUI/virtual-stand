import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
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
  },
  button: {
    background: theme.colors.ntnui.black,
    width: '100%',
    height: 100,
    borderRadius: 15,
  },
}));

function Groups(props) {
  const classes = useStyles();

  const GroupButton = (props) => {
    const {href, children} = props;
    return (
      <a href={href} target='_noopener'>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button} >
          <Typography variant='h6'>{children}</Typography>
        </Button>
      </a>);
  };

  GroupButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

  return (
    <Navigation footer>
      <Banner title='Gruppene' />
      <div className={classes.root}>
        <Typography variant='h6' className={classes.title}>Her er en oversikt over alle de forskjellige gruppene våre</Typography>
        <div className={classes.boxes}>
          <GroupButton href="https://ntnui.no/grupper/#aikido">Aikido</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#aikido">Aikido</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#amerikanskfotball">Amerikansk Fotball</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#badminton">Badminton</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#bandy">Bandy</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#baseball">Baseball</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#basket">Basket</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#boksing">Boksing</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#bordtennis">Bordtennis</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#calisthenics">Calisthenics</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#capoeira">Capoeira</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#cheerleading">Cheerleading</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#cricket">Cricket</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#dans">Dans</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#dykkergruppa">Dykkergruppa</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#esport">Esport</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#fekting">Fekting</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#fotball">Fotball</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#freeskisnowboard">Freeski og Snowboard</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#friidrett">Friidrett</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#futsal">Futsal</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#golf">Golf</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#hund">Hund</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#handball">Håndball</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#innebandy">Innebandy</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#ishockey">Ishockey</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#ju-jitsu">Ju-Jitsu</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#judo">Judo</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#karate">Karate</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#kite">Kite</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#koiene">Koiene</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#lacrosse">Lacrosse</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#langrenn">Langrenn</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#orientering">Orientering</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#padling">Padling</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#paintball">Paintball</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#paraidrett">Paraidrett</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#riding">Ridning</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#roing">Roing</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#rugby">Rugby</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#rumpeldunk">Rumpeldunk</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#seiling">Seiling</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#sjakk">Sjakk</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#ski-og-fjellsport">Ski og Fjellsport</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#skyting">Skyting</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#squash">Squash</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#studenterhytta">Studenterhytta</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#surf">Surf</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#svomming">Svømming</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#swing-og-folkedans">Swing og Folkedans</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#sykkel">Sykkel</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#tae-kwon-do">Tae Kwon Do</GroupButton>
          <GroupButton href="http://ntnuita.no/">Telemark-Alpint</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#tennis">Tennis</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#tindegruppa">Tindegruppa (Klatring)</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#triatlon">Triatlon</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#turn">Turn</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#undervannsrugby">Undervannsrugby</GroupButton>
          <GroupButton href="https://ntnui.no/grupper/#volleyball">Volleyball</GroupButton>
        </div>
      </div>
    </Navigation>
  );
}

export default Groups;
