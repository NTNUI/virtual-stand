import React from 'react';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';

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
  },
  title: {
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '1.3rem',
  },
}));

function Admin(props) {
  const classes = useStyles();

  return (
    <Navigation footer>
      <Banner title='Admin' />
      <div className={classes.root}>
        <p className={classes.title}>I NTNUI Admin arbeider vi for alle gruppene i NTNUI og bistår innenfor spesialiserte fagområder. Her kan du få relevant erfaring innen foto og video, økonomi, design og IT. Du kan bidra i organiseringen og gjennomføringen av store arrangementer, eller arbeide med paraidrettstilbudet i Trondheim. Med andre ord – noe for enhver smak! Vi er en sosial gjeng med lavterskel aktiviteter, ulike teambuildinger og andre festligheter som hører studietiden til.</p>
        <Box
          href='https://ntnui.no/opptak/'
          buttonText='Bli en av oss!'
          title='Hovedstyret'
          text='Selve hjertet av NTNUI. Bli med på å styre og holde organisasjonen i utvikling og bevegelse. Vi søker folk som kan bidra til alle roller.'
          img='https://ntnui.no/wp-content/uploads/2019/07/Nilsa6000-44-1024x683.jpg' />
        <Box
          href='https://ntnui.no/opptak/'
          buttonText='Bli en av oss!'
          title='Event'
          text='Liker du å organisere, planlegge og gjennomføre arrangementer? Vi i arrangementutvalget bistår Hovedstyret i deres arbeid for å skape de beste øyeblikkene i studietiden. Bli med!'
          img='https://ntnui.no/wp-content/uploads/2019/01/faq3-1024x683.jpg' />
        <Box
          href='https://ntnui.no/opptak/'
          buttonText='Bli en av oss!'
          title='Blits'
          text='Blits er kommunikasjonsutvalget til NTNUI. Vi jobber med fotografi, videografi, design og innholdsproduksjon. Vi jobber i G Suite, WordPress og Adobe CC, og du vil få tilgang på programvare og verktøy for å dokumentere de beste øyeblikkene i studietiden!'
          img='https://ntnui.no/wp-content/uploads/2021/08/i-WvqvDNf-4K-90.jpg' />
        <Box
          href='https://ntnui.no/opptak/'
          buttonText='Bli en av oss!'
          title='Paraidrett'
          text='Brenner du for breddeidrett, lavterskeltilbud og bevegelsesglede? Sjekk ut NTNUI Paraidrett! Vi er et informasjonsmedium for studenter og andre som ønsker å drive med paraidrett samtidig som vi bidrar til å opprettholde paraidretten i Trondheim.'
          img='https://ntnui.no/wp-content/uploads/2018/12/Paraidrett-2-1-1110x530.jpg' />
        <Box
          href='https://ntnui.no/opptak/'
          buttonText='Bli en av oss!'
          title='Sprint'
          text='Bli med i Sprint og front digitaliseringen av NTNUI. Her jobber utviklere og designere med Vue.js og Django for å lage programvare for over 14 000 medlemmer!'
          img='https://ntnui.no/wp-content/uploads/2019/09/Sprint-p%C3%A5-generalforsamling-2019.jpg' />
        <Box
          href='https://ntnui.no/opptak/'
          buttonText='Bli en av oss!'
          title='Økonomi'
          text='Ønsker du å forbedre de økonomiske prosessene til Norges største idrettslag? Med over 20 millioner i omsetning trenger vi skarpe hoder for å forvalte midlene best mulig for fellesskapet. Du vil også ta del i internrevisjonen vår!'
          img='https://ntnui.no/wp-content/uploads/2019/08/%C3%B8konomi-analyse-excel.jpeg' />
      </div>
    </Navigation>
  );
}

export default Admin;
