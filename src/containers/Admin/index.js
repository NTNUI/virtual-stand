import React from 'react';

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
  box: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    background: theme.colors.background.primaryLight,
    boxShadow: '0px 1px 4px #222',
    borderRadius: 10,
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: '50% 50%',
    '&:nth-child(even)': {
      gridTemplateAreas: '"img text"',
      '@media only screen and (max-width: 700px)': {
        gridTemplateColumns: '1fr',
        gridTemplateAreas: '"img" "text"',
      },
    },
    '&:nth-child(odd)': {
      gridTemplateAreas: '"text img"',
      '@media only screen and (max-width: 700px)': {
        gridTemplateColumns: '1fr',
        gridTemplateAreas: '"img" "text"',
      },
    },
  },
  title: {
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
  header: {
    padding: '10px 0',
  },
  text: {
    color: 'white',
    padding: 40,
    gridArea: 'text',
  },
  img: {
    gridArea: 'img',
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

function Admin(props) {
  const classes = useStyles();

  const ApplyButton = () => {
    return (
      <a href='https://ntnui.no/sok' target='_noopener'>
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
      <Banner title='Admin' />
      <div className={classes.root}>
        <Typography variant='h6' className={classes.title}>Her arbeider vi for alle gruppene i NTNUI og bistår innenfor spesialiserte fagområder. Her kan du få relevant erfaring innen foto og video, økonomi, design og IT. Du kan bidra i organiseringen og gjennomføringen av store arrangementer, eller arbeide med paraidrettstilbudet i Trondheim. Med andre ord – noe for enhver smak! Vi er en sosial gjeng med lavterskel ukentlig adminGym, ulike teambuildinger og andre festligheter som hører studietiden til.</Typography>
        <div className={classes.box}>
          <img className={classes.img} alt='Hovedstyret' src='https://ntnui.no/wp-content/uploads/2019/07/Nilsa6000-44-1024x683.jpg' />
          <div className={classes.text}>
            <Typography variant='h4' className={classes.header}>Hovedstyret</Typography>
            <Typography variant='h6'>Selve hjertet av NTNUI. Bli med på å styre og holde organisasjonen i utvikling og bevegelse. Vi søker folk som kan bidra til alle roller.</Typography>
            <ApplyButton />
          </div>
        </div>
        <div className={classes.box}>
          <img className={classes.img} alt='Event' src='https://ntnui.no/wp-content/uploads/2019/01/faq3-1024x683.jpg' />
          <div className={classes.text}>
            <Typography variant='h4' className={classes.header}>Event</Typography>
            <Typography variant='h6'>Liker du å organisere, planlegge og gjennomføre arrangementer? Vi i arrangementutvalget bistår Hovedstyret i deres arbeid for å skape de beste øyeblikkene i studietiden. Bli med!</Typography>
            <ApplyButton />
          </div>
        </div>
        <div className={classes.box}>
          <img className={classes.img} alt='Blits' src='https://ntnui.no/wp-content/uploads/2019/06/basket-2-1024x683.jpg' />
          <div className={classes.text}>
            <Typography variant='h4' className={classes.header}>Blits</Typography>
            <Typography variant='h6'>Blits er kommunikasjonsutvalget til NTNUI. Vi jobber med fotografi, videografi, design og innholdsproduksjon.
              <br/>Vi jobber i G Suite, WordPress og Adobe CC, og du vil få tilgang på programvaren og verktøy som hjelper deg til å gjøre en god jobb i Blits</Typography>
            <ApplyButton />
          </div>
        </div>
        <div className={classes.box}>
          <img className={classes.img} alt='Paraidrett' src='https://ntnui.no/wp-content/uploads/2018/12/Paraidrett-2-1-1110x530.jpg' />
          <div className={classes.text}>
            <Typography variant='h4' className={classes.header}>Paraidrett</Typography>
            <Typography variant='h6'>Brenner du for breddeidrett, lavterskeltilbud og bevegelsesglede? Sjekk ut NTNUI Paraidrett! Vi er et informasjonsmedium for studenter og andre som ønsker å drive med paraidrett samtidig som vi bidrar til å opprettholde paraidretten i Trondheim. Bli med på laget!</Typography>
            <ApplyButton />
          </div>
        </div>
        <div className={classes.box}>
          <img className={classes.img} alt='Sprint' src='https://ntnui.no/wp-content/uploads/2019/09/Sprint-p%C3%A5-generalforsamling-2019.jpg' />
          <div className={classes.text}>
            <Typography variant='h4' className={classes.header}>Sprint</Typography>
            <Typography variant='h6'>Bli med i Sprint og front digitaliseringen av NTNUI. Her jobber utviklere og designere med Vue.js og Django for å lage programvare for over 10 000 medlemmer!</Typography>
            <ApplyButton />
          </div>
        </div>
        <div className={classes.box}>
          <img className={classes.img} alt='Økonomi' src='https://ntnui.no/wp-content/uploads/2019/08/%C3%B8konomi-analyse-excel.jpeg' />
          <div className={classes.text}>
            <Typography variant='h4' className={classes.header}>Økonomi</Typography>
            <Typography variant='h6'>Bli med å utforme et nytt økonomiutvalg! Du får jobbe med PwC og du bistår med de økonomiske prosessene i NTNUI. Du vil også ta del i internrevisjonen vår!</Typography>
            <ApplyButton />
          </div>
        </div>
      </div>
    </Navigation>
  );
}

export default Admin;
