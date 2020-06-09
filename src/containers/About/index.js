import React from 'react';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import studenterhytta from '../../assets/img/studenterhytta.jpg';
import triatlon from '../../assets/img/triatlon.jpg';
import stup from '../../assets/img/stup.jpg';

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
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: '2.5rem',
  },
  subtitle: {
    fontSize: '1.7rem',
  },
  text: {
    fontSize: '1.2rem',
    margin: '5px 0',
  },
  img: {
    width: '100%',
    maxHeight: 300,
    objectFit: 'cover',
    borderRadius: 15,
    border: '2px solid ' + theme.colors.background.primaryLight,
    marginTop: 10,
  },
}));

function About(props) {
  const classes = useStyles();

  return (
    <Navigation footer>
      <Banner title='Om NTNUI' />
      <div className={classes.root}>
        <img src={studenterhytta} alt='Studenterhytta' className={classes.img} />
        <Typography variant='h2' className={classes.title}>Om oss</Typography>
        <p className={classes.text}>NTNUI er Norges teknisk og naturvitenskapelige universitets idrettsforening og har i over 100 år stått for universitetets sportslige tilbud. I motsetning til studentidrettslag i andre land, driftes NTNUI utelukkende av studenter. I dag er NTNUI blitt landets største og mest allsidige idrettsforening med over 12 000 medlemmer og et tilbud på mange flere idretter enn NIF har forbund . «Å få så mange studenter som mulig i fysisk aktivitet og fremme kameratslig samvær» – det var NTNUIs målsetting da organisasjonen ble stiftet i 1910. I dag jobber NTNUI fortsatt for et sunt studentmiljø og for at terskelen for å trene ved NTNU holdes så lav som mulig.</p>
        <p className={classes.text}>Den idrettslige aktiviteten foreningen driver er organisert av de forskjellige gruppene og mange står for mer enn bare én aktivitet, som Dans og Kampsport. Det eksisterer et unikt mangfold bant NTNUIs grupper. Tradisjonelle idretter som fotball, sykling og seiling møter i NTNUI undervannsrugby, rumpeldunk og lacrosse. Har vi ikke din idrett, er det bare å starte den opp.</p>
        <p className={classes.text}>NTNUI er ikke bare et idrettslag med mange gode utøvere, foreningen hadde ikke klart seg uten alle ildsjelene og de frivillige som står på for å spre idrettsglede til sine lagkamerater. Mange hundre engasjerer seg administrativt for at foreningen skal holde seg gående. Gruppene styres av egne styrer. Sentralt arbeider Hovedstyret og administrative utvalg for å bistå disse i sin daglige drift. Medlemmene er foreningens øverste myndighet gjennom generalforsamlingene som finner sted hvert semester.</p>
        <p className={classes.text}>NTNUI (NTHI) ble stiftet den 25. oktober 1910, det samme året som høyskolen på Gløshaugen. Da kunne foreningen tilby 10 idretter og besto av 89 medlemmer. Gjennom årene har ikke bare tilbudet utvidet seg betraktelig, foreningen har også opplevd mye på veien – alt fra å plage tyske soldater på Studenterhytta under krigen til å høre paven holde preken ved Idrettsbygget i 1989. Studenter har på svømmeføtter løpt Hu og Hei løpet, et orienteringsløp på over 30 km, og idrettslaget har flere ganger arrangert stafetten UKA Rundt, som forrige gang i 2017 varte dag og natt i 37 døgn. Foreningens fargerike historie kan ikke oppsummeres kort, så for å lese om dens første 100 år, kan boken Ekte idrettsglede av Gaute Heyerdahl kjøpes på NTNUI-kontoret ved Gløshaugen Idrettsbygg.</p>
        <img src={stup} alt='Visjon' className={classes.img} />
        <Typography variant='h2' className={classes.title}>Visjon</Typography>
        <Typography variant='h3' className={classes.subtitle}>Vi gjør norsk idrett bedre!</Typography>
        <p className={classes.text}>Idrett er sosial trening. Idrett holder kropp og sinn vedlike, og er en viktig del av enhver persons hverdag. I årene på videregående skole gir mange elever opp idretten som en fritidsaktivitet, ofte på grunn av liten motivasjon til å satse. NTNUI vil vise studentene ved NTNU at idrett ikke bare er trening, men en sosial arena hvor en møter studenter med gleden for idrett til felles. NTNUI skal strebe for å få flest mulig studenter i fysisk aktivitet og fremme kameratskap.</p>
        <p className={classes.text}>NTNUI er Norges største idrettsforening og forventes å stå frem som et forbilde for resten av idretts-Norge. Foreningens sterke bånd til både utdanningsinstitusjon og studentsamskipnad plasserer NTNUI i en spesielt fordelaktig posisjon. NTNUI vil jobbe aktivt for å styrke studentidretten også i resten av landet.</p>
        <img src={triatlon} alt='Ett NTNUI' className={classes.img} />
        <Typography variant='h3' className={classes.subtitle}>Ett NTNUI</Typography>
        <p className={classes.text}>Gruppene organiserer aktiviteten i NTNUIs mange idrettsgrener, og dette er foreningens viktigste funksjon. Administrasjonen sentralt i NTNUI skal bistå gruppene etter beste evne. Sentralt har arbeidskraften i senere år vært for liten til å takle jobben å administrere en så stor klubb som NTNUI – foreningen må sentraliseres.</p>
        <p className={classes.text}>Visjonens formål er å skape større tilhørighet blant gruppene til ett, felles NTNUI. Foreningens mange ledere skal føle at de har et nettverk i foreningen. Administrasjonen sentralt utvides for å lette arbeidsmengden på Hovedstyret og vil i større grad kunne assistere gruppene. Hovedstyret vil som en følge kunne fokusere mer på egne prosjekter og videreutvikle foreningen.</p>
        <p className={classes.text}>Ett NTNUI vil kunne ta en tydeligere posisjon i Trondheims studentmiljø og vil bli en mer attraktiv arbeidsgiver for frivillige studenter. Gruppene vil merke større fordel av tilknytningen til NTNUI gjennom synergieffekter og sterkere støtte i administrasjonen.</p>
      </div>
    </Navigation>
  );
}

export default About;
