import React from 'react';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import aktivCampus from '../../assets/img/aktivCampus.jpg';

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
  iframe: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    borderRadius: 10,
    margin: 'auto',
    background: theme.colors.background.primaryLight,
  },
}));

function ActiveCampus(props) {
  const classes = useStyles();

  return (
    <Navigation footer>
      <Banner title='aktivCampus' />
      <div className={classes.root}>
        <Box
          href='https://ntnui.no/arrangementer/aktivcampus/'
          buttonText='Følg med på hva som skjer under uka'
          title='aktivCampus'
          text='Bli med og gjør NTNU til Norges sprekeste universitet under aktivCampus-uken!<br/><br/>I år blir det viktigere enn noen gang å sette fokus på studenters fysiske og psykiske helse. Så, etter gjeldende retningslinjer for smittevern, legger vi opp til en uke fylt med aktiviteter – alt i fra sjakk til bakkeløp og rumpeldunk til padling. Dette er NTNUs tredje fadderuke og du er invitert.'
          img={aktivCampus} />
        <Typography variant='h2' className={classes.title}>Om oss</Typography>
        <p className={classes.text}>Ved NTNU vet vi at for å prestere best akademisk, trenger studentene et godt studiemiljø. aktivCampus er et samarbeid mellom NTNU, NTNUI, Sit og Velferdstinget med mål å senke terskelen for å være sunn og aktiv ved NTNU. Det blir økende grunnlag for å si at jevnlig fysisk aktivitet fører til bedre fysisk og psykisk helse, i tillegg til å bedre akademiske prestasjoner.</p>
        <p className={classes.text}>Hos <a href='https://helsenorge.no/trening-og-fysisk-aktivitet/hva-fysisk-aktivitet-gjor-med-kroppen'>helsenorge.no</a> kan du lese om enda flere grunner til å holde seg aktiv. Disse er fordeler alle studenter burde nyte av, og fysisk aktivitet bør være en naturlig del avhverdagen ved NTNU. Kampanjen skal synliggjøre mulighetene for å være aktiv ved NTNU i dag og gjøre det lettere å spise sunt. Samarbeidspartnerne skal også jobbe sammen for å skape et bedre rammeverk for aktivitet ved universitetet og sikre at fremtidens campus blir en sporty og aktivCampus.</p>
        <p className={classes.text}>Uke 35, altså rett etter fadderukene, er aktivCampus-uken! Denne uken skjer det mye sprekt på de ulike campusene. Lik <a href='https://www.facebook.com/aktivcampus/'>Facebook-siden</a> vår for å bli oppdatert om hva som skjer. Påmelding åpner i august – Følg med!</p>
        <iframe className={classes.iframe} src='https://ntnui.no/arrangementer/aktivcampus/' width='100%' height='800px' frameBorder='none' title="Aktiviteter under aktivCampus" />
      </div>
    </Navigation>
  );
}

export default ActiveCampus;
