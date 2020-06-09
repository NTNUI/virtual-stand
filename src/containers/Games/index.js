import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Images
import studentlekene from '../../assets/img/studentlekene.jpg';

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
  box: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    background: theme.colors.background.primaryLight,
    boxShadow: '0px 1px 4px #222',
    borderRadius: 10,
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: '50% 50%',
    gridTemplateAreas: '"boxImg boxText"',
    '@media only screen and (max-width: 700px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: '"boxImg" "boxText"',
    },
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  img: {
    width: '100%',
    maxHeight: 350,
    objectFit: 'cover',
    borderRadius: 15,
    border: '2px solid ' + theme.colors.background.primaryLight,
    marginTop: 10,
  },
  boxText: {
    color: 'white',
    padding: 40,
    gridArea: 'boxText',
  },
  boxImg: {
    gridArea: 'boxImg',
    width: '100%',
    height: '100%',
    minHeight: 350,
    objectFit: 'cover',
    '@media only screen and (max-width: 700px)': {
      minHeight: 200,
    },
  },
  button: {
    width: '100%',
    margin: '20px 0',
  },
}));

function Games(props) {
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

  const ApplyButton = () => {
    return (
      <a href='https://sltrondheim.no/' target='_noopener'>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button} >
          Bli en av oss!
        </Button>
      </a>);
  };

  return (
    <Navigation footer>
      <Banner title='Studentlekene' />
      <div className={classes.root}>
        {/* <img src={studentlekene} alt='Studenterhytta' className={classes.img} /> */}
        <div className={classes.box}>
          <img className={classes.boxImg} alt='SL 2021' src={studentlekene} />
          <div className={classes.boxText}>
            <Typography variant='h4' className={classes.header}>SL 2021</Typography>
            <Typography variant='h6'>Vil du være med å skape Norges største idrettsarrangement for studenter? Nå har du muligheten! Dersom du er gira på et spennende, lærerikt og gøyalt verv – SØK NÅ! </Typography>
            <ApplyButton />
          </div>
        </div>
        <Typography variant='h4' className={classes.title}>Om oss</Typography>
        <Typography variant='h6' className={classes.text}>Studentlekene 2019 er en av Norges største studentidrettsfestivaler og vil bli arrangert i Trondheim 24.-28. februar 2021. Lekene er en samling av studentmesterskap og studentcup i en rekke idretter på alle nivåer.</Typography>
        <Typography variant='h6' className={classes.text}>Studentlekene hadde sitt inntog i studentidretten i 1999 hvor NTNUI tok imot 800 deltakere i ti ulike idretter. Dette var starten på noe som skulle vise seg å være en stor suksess og siden 2010 har lekene blitt arrangert hvert eneste år med stadig voksende deltakerantall og interesse i resten av studentidretts-Norge. Det ble sist arrangert i Tromsø våren 2018.</Typography>
        <Typography variant='h6' className={classes.text}>Studentidrett er kjent for aktive miljøer, både i bredde- og toppidrett, og Studentlekene 2017 bygger opp under denne ideen ved sitt slagord «Bli med på leken». Lekene vil samle tusentall av idrettsinteresserte studenter fra hele landet til konkurranser, foredrag, kurs og festligheter i fire dager. Det arrangeres konkurranser i både lagidretter og individuelle idretter. For vinneren av et studentmesterskap venter heder og ære, retten til å kalle seg norsk studentmester og kvalifisering til student-EM i 2018, dersom dette arrangeres.</Typography>
        <Typography variant='h6' className={classes.text}>Konkurransene vil foregå i private og kommunale haller, samt på utendørs-arenaer i Trondheim kommune. Mange av mesterskapene vil bli holdt i nærhet av hverandre, slik at det vil være mulig for tilskuere å se mangfoldet i studentidretten. Trondheim vil også være preget av ikke-sportslige aktiviteter denne helgen. Se frem til foredrag, kurs og andre festligheter både for deltakere, frivillige og andre studenter!</Typography>
      </div>
    </Navigation>
  );
}

export default Games;
