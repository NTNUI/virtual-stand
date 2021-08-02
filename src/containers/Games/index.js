import React from 'react';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import studentlekene from '../../assets/img/sltrondheim.jpg';

// Project Components
import Banner from '../../components/navigation/Banner';
import Navigation from '../../components/navigation/Navigation';
import Box from '../../components/layout/Box';

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
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: '2.5rem',
  },
  text: {
    fontSize: '1.2rem',
    margin: '5px 0',
  },
}));

function Games(props) {
  const classes = useStyles();

  return (
    <Navigation footer>
      <Banner title='Studentlekene' />
      <div className={classes.root}>
        <Box
          href='https://ntnui.no/opptak/'
          buttonText='Bli en av oss!'
          title='Studentlekene Trondheim'
          text='Vil du være med å skape Norges største idrettsarrangement for studenter i 2023? Nå har du muligheten! Dersom du er gira på et spennende, lærerikt og gøyalt verv – SØK NÅ!'
          img={studentlekene} />
        <Typography variant='h2' className={classes.title}>Om oss</Typography>
        <p className={classes.text}>Studentlekene er en av Norges største studentidrettsfestivaler og vil bli arrangert i Trondheim igjen i 2023. Lekene er en samling av studentmesterskap og studentcup i en rekke idretter på alle nivåer.</p>
        <p className={classes.text}>Studentlekene hadde sitt inntog i studentidretten i 1999 hvor NTNUI tok imot 800 deltakere i ti ulike idretter. Dette var starten på noe som skulle vise seg å være en stor suksess og siden 2010 har lekene blitt arrangert hvert eneste år med stadig voksende deltakerantall og interesse i resten av studentidretts-Norge.</p>
        <p className={classes.text}>Studentidrett er kjent for aktive miljøer, både i bredde- og toppidrett. Lekene vil samle tusentall av idrettsinteresserte studenter fra hele landet til konkurranser, foredrag, kurs og festligheter i fire dager. Det arrangeres konkurranser i både lagidretter og individuelle idretter. For vinneren av et studentmesterskap venter heder og ære, retten til å kalle seg norsk studentmester og kvalifisering til student-EM, dersom dette arrangeres.</p>
        <p className={classes.text}>Konkurransene vil foregå i private og kommunale haller, samt på utendørs-arenaer i Trondheim kommune. Mange av mesterskapene vil bli holdt i nærhet av hverandre, slik at det vil være mulig for tilskuere å se mangfoldet i studentidretten. Trondheim vil også være preget av ikke-sportslige aktiviteter denne helgen. Se frem til foredrag, kurs og andre festligheter både for deltakere, frivillige og andre studenter!</p>
      </div>
    </Navigation>
  );
}

export default Games;
