import React from 'react';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import studenterhytta from '../../assets/img/studenterhytta.jpg';
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
        <Typography variant='h2' className={classes.title}>De beste øyeblikkene i studietiden</Typography>
        <p className={classes.text}>NTNUI er NTNUs idrettsforening. Vi har i over 100 år stått for universitetets sportslige tilbud. Vi drives eksklusivt av frivillige studenter, som er unikt i Norge. NTNUI har det største og bredeste tilbudet av landets idrettsforeninger, med våre over 14 000 medlemmer og tilbud på idretter utover de som ett forbund. Målsettingen ved oppstarten av NTNUI i 1910 var «Å få så mange studenter som mulig i fysisk aktivitet og fremme kameratslig samvær». Vi har holdt på tradisjonen og jobber i dag for et sunt studentmiljø og for at lavterskel aktivitet skal være mulig ved NTNU.</p>
        <p className={classes.text}>Idrettstilbudet er organisert av forskjellige grupper, hvor flere står for mer enn en idrett, som dans og kampsport. Med innslag som e-sport, rumpeldunk og lacrosse er mangfoldet stort samtidig som vi har tradisjonelle idretter som fotball, sykling og seiling. Har ingen tenkt på din aktivitet, så hjelper vi deg med å starte den!</p>
        <p className={classes.text}>NTNUI er mer enn topp og breddeidrett og det hadde ikke gått rundt uten ildsjelene våre. I den over 100 medlemmer sterke administrasjonen finner du mange av dem, i tillegg til gruppenes egne styrer og frivillige. Oppgaven er enkel som den er vanskelig - å styrke NTNUIs grupper slik at tilbudet blir stadig bredere og bedre. Hvordan NTNUI skal være er det medlemmene som bestemmer gjennom foreningens Generalforsamling, som vi har hvert semester.</p>
        <p className={classes.text}>Siden starten på NTHI den 25 oktober 1910 har foreningen vokst fra 10 idretter og 89 medlemmer til det vi er i dag - det er vi stolte av! Vi har opplevd det meste på veien. Vi har hørt på paven tale ved idrettsbygget i 1989, vi har skapt en tradisjon på 30 mils-løp på svømmeføtter og har arrangert en 1 måneds lang stafett under UKA ved flere utgaver. Historien er rik, og den kan leses i helhet i Gaute Heyerdahls “Ekte Idrettsglede”, som du får en utgave av på Idrettsbygget Gløshaugen.</p>
        <p className={classes.text}>Ettersom NTNUI er Norges største idrettslag og unikt i kraft av frivilligheten som bygger den opp, ønsker vi å kunne være forbilde for resten av idretts og student-Norge. Vår posisjon er et produkt av samarbeid med utdanningsinstitusjon og studentsamskipnad og vi ønsker å spre denne suksessoppskriften.</p>
        <img src={stup} alt='Visjon' className={classes.img} />
        <Typography variant='h2' className={classes.title}>Mangfold – Samhold – Idrettsglede</Typography>
        <Typography variant='h3' className={classes.subtitle}>Ett NTNUI</Typography>
        <p className={classes.text}>NTNUIs visjon handler om mangfold, samhold og ikke minst idrettsglede! For å ivareta denne ble en strategiplan laget for perioden vi nå er inne i - 2020 til 2022. Planen ble mastermindet av Øystein Fruseth Christiansen, Eirik Søreide Hansen og Vilde Teksum. Arbeidet er bygget på grunnlaget Eirik Søreide Hansen og Thine Hestnes gjorde i 2018 i samarbeid med Henrik Carstens - klubbveileder i Norges Idrettsforbund. Den tok form gjennom to gruppeledersamlinger i 2019. Beskjedene vi fikk med oss ble kokt ned til en satsning på tre områder: Anlegg, rekruttering og ønsket om å være “Ett NTNUI”.</p>
        <p className={classes.text}>Anlegg er en forutsetning for å kunne drive idrett. Følgelig er det ett naturlig satsningsområde. Nettverksarbeid er en sentral del av dette, for å koordinere mot eksterne partnere og spille hverandre gode. Suksess på dette feltet har ført oss dit vi er i dag og det er det som skal føre oss videre. Vi tror at hver gruppe kjenner sitt anleggsbehov best, vi jobber derfor for en kultur preget av lav terskel for å komme med initiativer, forslag og innspill. Takhøyden er også stor - slik som bredden.</p>
        <p className={classes.text}>Ett NTNUI er en samlingsprosess. Vi ønsker at du som medlem skal føle et fellesskap, en tilhørighet til foreningen. Det skal ikke bare være lav terskel for å danne relasjoner på tvers av grupper og posisjoner - det skal feires. Dette skal også bli lettere gjennom introduksjonen av spesialiserte utvalg. Det betyr både bedre tilbud, flere ildsjeler til å fasilitere for tilbud som skaper slike relasjoner, samt at foreningen vokser - som i seg selv er verdt å feire! Vi tror også at dette bidrar til å skape transparens - som øker eierskapet ditt som medlem. Du vet hva som skjer! NTNUI skal oppleves som en enhet. Det skal være ett “oss”!</p>
      </div>
    </Navigation>
  );
}

export default About;
