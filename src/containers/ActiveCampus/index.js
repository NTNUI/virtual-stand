import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Images
// import aktivCampus from '../../assets/img/aktivCampus.jpg';

// Project Components
import Banner from '../../components/navigation/Banner';
import Navigation from '../../components/navigation/Navigation';
// import Box from '../../components/layout/Box';

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
  subtitle: {
    paddingBottom: 10,
    paddingTop: 5,
    fontSize: '1.2rem',
  },
  text: {
    fontSize: '1.2rem',
    margin: '5px 0',
  },
  button: {
    height: 60,
    backgroundImage: 'url(https://bokogbibliotek.no/images/stories/aktuelt/facebook.jpg)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0752a3',
    '&:hover': {
      backgroundColor: '#0752a3',
    },
  },
  iframe: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    borderRadius: 10,
    margin: 'auto',
    background: theme.colors.background.primaryLight,
  },
  img: {
    borderRadius: 10,
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid ' + theme.colors.background.primaryLight,
    background: theme.colors.background.primaryLight,
    boxShadow: '0px 1px 4px #222',
    borderRadius: 10,
    padding: 10,
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  gridHeader: {
    borderBottom: '2px solid white',
  },
  gridItemRow: {
    borderBottom: '1px solid white',
  },
  gridTitle: {
    fontWeight: 'bold',
    fontSize: '1.4rem',
    '@media only screen and (max-width: 700px)': {
      fontSize: '0.9rem',
    },
  },
  gridItem: {
    fontSize: '1.3rem',
    textAlign: 'left',
    padding: '7px',
    '@media only screen and (max-width: 700px)': {
      fontSize: '0.9rem',
    },
  },
}));

const program = [
  {
    header: '22. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/L%C3%B8rdag-1024x91.png',
    events: [
      {activity: 'Fadderbarncupen', place: 'Dødens dal', time: '11:00-16:00'},
    ],
  },
  {
    header: '23. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/S%C3%B8ndag-1024x91.png',
    events: [
      {activity: 'Tur til Geitfjellet', place: 'Bymarka', time: '12:00-15:00'},
      {activity: 'Kom og prøv', place: 'Dødens dal', time: '15:00-18:00'},
    ],
  },
  {
    header: '24. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/Mandag-1024x91.png',
    events: [
      {activity: 'Åpning av Campusrunden', place: 'Dødens dal', time: '06:30-07:30'},
      {activity: 'Trappeløp og grilling', place: 'Moholt stud.by', time: '17:30-18:00'},
      {activity: 'Swingkurs', place: 'Loftet (Moholt)', time: '18:00-20:00'},
      {activity: 'Bordtennisturnering', place: 'Loftet (Moholt)', time: '20:30-22:00'},
      {activity: 'FIFA/Smash-turnering', place: 'Loftet (Moholt)', time: '20:30-22:00'},
      {activity: 'Selvforsvarskurs', place: 'Hangaren (Gløs)', time: '18:00-20:00'},
      {activity: 'Monday Run m/NTNUI Friidrett', place: 'Idrettsbygget Gløs', time: '18:30-21:30'},
    ],
  },
  {
    header: '25. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/Tirsdag-1024x91.png',
    events: [
      {activity: 'aktivStart', place: 'Dødens dal', time: '06:30-07:30'},
      {activity: 'Idrettskavalkaden', place: 'Gløshaugen', time: '09:30-14:30'},
      {activity: 'Tautrekking', place: 'Dødens dal', time: '16:15-17:00'},
      {activity: 'Prøv Padling', place: 'Leirfoss', time: '16:00-19:00'},
      {activity: 'Swingkurs', place: 'Gløshaugen', time: '18:00-20:00'},
      {activity: 'Squash', place: 'Dragvoll', time: 'TBA'},
      {activity: 'Sjakkturnering', place: 'Gløshaugen', time: '18:00-21:00'},
      {activity: 'Kanonball', place: 'TBA', time: '20:00-23:00'},
    ],
  },
  {
    header: '26. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/Onsdag-1024x91.png',
    events: [
      {activity: 'aktivStart', place: 'Dødens dal', time: '06:30-07:30'},
      {activity: 'Swecosprinten', place: 'Gløshaugen', time: '10:00-14:00'},
      {activity: 'Aktivitetsdag', place: 'Gløshaugen', time: '11:00-13:00'},
      {activity: 'Romaskinkonkurranse', place: 'Kalvskinnet', time: '18:00-20:00'},
      {activity: 'Swingkurs', place: 'Gløshaugen', time: '18:00-20:00'},
      {activity: 'Baneintervaller m/NTNUI Friidrett', place: 'Øya Stadion', time: '18:30-20:30'},
    ],
  },
  {
    header: '27. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/Torsdag-1024x91.png',
    events: [
      {activity: 'aktivStart', place: 'Dødens dal', time: '06:30-07:30'},
      {activity: 'Prøv badminton', place: 'TBA', time: '10:00-14:00'},
      {activity: 'Trippelturnering', place: 'Spektrum', time: '17:00-20:00'},
      {activity: 'Swingkurs', place: 'Gløshaugen', time: '18:00-20:00'},
      {activity: 'Sirkeltrening m/NTNUI Roing', place: 'Gløshaugen', time: '18:30-20:00'},
      {activity: 'Løpetur m/NTNUI Langrenn', place: 'Hovedbygget (Gløs)', time: '19:00-20:00'},
    ],
  },
  {
    header: '28. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/Fredag-1024x91.png',
    events: [
      {activity: 'aktivStart', place: 'Dødens dal', time: '06:30-07:30'},
      {activity: 'Linjeforeningsstafett', place: 'Øya Stadion', time: '16:30-18:30'},
      {activity: 'Dansekveld (swing)', place: 'Loftet (Moholt)', time: '19:00-21:00'},
    ],
  },
  {
    header: '29. august',
    img: 'https://ntnui.no/wp-content/uploads/2020/06/L%C3%B8rdag-2-1024x91.png',
    events: [
      {activity: 'NTNUI Dans – Kickoff-timer', place: 'Nyhavna', time: '10:00-16:00'},
      {activity: 'Premiering – Sommerlekene', place: 'Høyskoleparken', time: '14:00-16:00'},
      {activity: 'NTNUI Events Gym', place: 'Høyskoleparken', time: '14:00-16:00'},
    ],
  },
];

function ActiveCampus(props) {
  const classes = useStyles();

  const Day = (props) => {
    const {events, img, header} = props;
    return (
      <div>
        <img className={classes.img} src={img} alt={header} width='100%' />
        <Typography variant='h4' className={classes.subtitle}>{header}</Typography>
        <div className={classes.grid}>
          <div className={classnames(classes.gridRow, classes.gridHeader)}>
            <Typography variant='h3' className={classnames(classes.gridItem, classes.gridTitle)}>Aktivitet</Typography>
            <Typography variant='h3' className={classnames(classes.gridItem, classes.gridTitle)}>Sted</Typography>
            <Typography variant='h3' className={classnames(classes.gridItem, classes.gridTitle)}>Tid</Typography>
          </div>
          {events.map((event, index) => {
            return (
              <div key={index} className={classnames(classes.gridRow, index !== events.length - 1 && classes.gridItemRow)}>
                <Typography variant='h3' className={classnames(classes.gridItem)}>{event.activity}</Typography>
                <Typography variant='h3' className={classnames(classes.gridItem)}>{event.place}</Typography>
                <Typography variant='h3' className={classnames(classes.gridItem)}>{event.time}</Typography>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  Day.propTypes = {
    events: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
  };

  return (
    <Navigation footer>
      <Banner title='aktivCampus' />
      <div className={classes.root}>
        {/* <Box
          href='https://ntnui.no/arrangementer/aktivcampus/'
          buttonText='Følg med på hva som skjer under uka'
          title='aktivCampus'
          text='Bli med og gjør NTNU til Norges sprekeste universitet under aktivCampus-uken!<br/><br/>I år blir det viktigere enn noen gang å sette fokus på studenters fysiske og psykiske helse. Så, etter gjeldende retningslinjer for smittevern, legger vi opp til en uke fylt med aktiviteter – alt i fra sjakk til bakkeløp og rumpeldunk til padling. Dette er NTNUs tredje fadderuke og du er invitert.'
          img={aktivCampus} /> */}
        <img className={classes.img} src='https://ntnui.no/wp-content/uploads/2019/07/fb_arrangement_851px_315px.jpg' alt='Logo' width='100%' />
        <Typography variant='h2' className={classes.title}>Om oss</Typography>
        <p className={classes.text}>Ved NTNU vet vi at for å prestere best akademisk, trenger studentene et godt studiemiljø. aktivCampus er et samarbeid mellom NTNU, NTNUI, Sit og Velferdstinget med mål å senke terskelen for å være sunn og aktiv ved NTNU. Det blir økende grunnlag for å si at jevnlig fysisk aktivitet fører til bedre fysisk og psykisk helse, i tillegg til å bedre akademiske prestasjoner.</p>
        <p className={classes.text}>Hos <a href='https://helsenorge.no/trening-og-fysisk-aktivitet/hva-fysisk-aktivitet-gjor-med-kroppen'>helsenorge.no</a> kan du lese om enda flere grunner til å holde seg aktiv. Disse er fordeler alle studenter burde nyte av, og fysisk aktivitet bør være en naturlig del avhverdagen ved NTNU. Kampanjen skal synliggjøre mulighetene for å være aktiv ved NTNU i dag og gjøre det lettere å spise sunt. Samarbeidspartnerne skal også jobbe sammen for å skape et bedre rammeverk for aktivitet ved universitetet og sikre at fremtidens campus blir en sporty og aktivCampus.</p>
        <p className={classes.text}>Uke 35, altså rett etter fadderukene, er aktivCampus-uken! Denne uken skjer det mye sprekt på de ulike campusene. Lik <a href='https://www.facebook.com/aktivcampus/'>Facebook-siden</a> vår for å bli oppdatert om hva som skjer. Påmelding åpner i august – Følg med!</p>
        <Button
          href='https://www.facebook.com/aktivcampus/'
          target='_noopener'
          variant='contained'
          color='secondary'
          className={classes.button}>{' '}</Button>
        <Button
          href='https://ntnui.no/arrangementer/aktivcampus/'
          target='_noopener'
          variant='contained'
          color='secondary'>Følg med på hva som skjer under uka</Button>
        <Typography variant='h2' className={classes.title}>Program</Typography>
        {program.map((day, index) => {
          return <Day key={index} events={day.events} header={day.header} img={day.img} />;
        })}
        <p className={classes.text}>Endringer kan forekomme. Se <a href='https://ntnui.no/arrangementer/aktivcampus/'>her</a> for påmelding og eventuelle endringer i programmet.</p>
      </div>
    </Navigation>
  );
}

export default ActiveCampus;
