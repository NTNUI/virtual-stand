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
        <Typography variant='h2' className={classes.title}>Om oss</Typography>
        <p className={classes.text}>NTNUI er Norges teknisk og naturvitenskapelige universitets idrettsforening og har i over 100 år stått for universitetets sportslige tilbud. I motsetning til studentidrettslag i andre land, driftes NTNUI utelukkende av studenter. I dag er NTNUI blitt landets største og mest allsidige idrettsforening med over 12 000 medlemmer og et tilbud på mange flere idretter enn NIF har forbund . «Å få så mange studenter som mulig i fysisk aktivitet og fremme kameratslig samvær» – det var NTNUIs målsetting da organisasjonen ble stiftet i 1910. I dag jobber NTNUI fortsatt for et sunt studentmiljø og for at terskelen for å trene ved NTNU holdes så lav som mulig.</p>
        <p className={classes.text}>Den idrettslige aktiviteten foreningen driver er organisert av de forskjellige gruppene og mange står for mer enn bare én aktivitet, som Dans og Kampsport. Det eksisterer et unikt mangfold bant NTNUIs grupper. Tradisjonelle idretter som fotball, sykling og seiling møter i NTNUI undervannsrugby, rumpeldunk og lacrosse. Har vi ikke din idrett, er det bare å starte den opp.</p>
        <p className={classes.text}>NTNUI er ikke bare et idrettslag med mange gode utøvere, foreningen hadde ikke klart seg uten alle ildsjelene og de frivillige som står på for å spre idrettsglede til sine lagkamerater. Mange hundre engasjerer seg administrativt for at foreningen skal holde seg gående. Gruppene styres av egne styrer. Sentralt arbeider Hovedstyret og administrative utvalg for å bistå disse i sin daglige drift. Medlemmene er foreningens øverste myndighet gjennom generalforsamlingene som finner sted hvert semester.</p>
        <p className={classes.text}>NTNUI (NTHI) ble stiftet den 25. oktober 1910, det samme året som høyskolen på Gløshaugen. Da kunne foreningen tilby 10 idretter og besto av 89 medlemmer. Gjennom årene har ikke bare tilbudet utvidet seg betraktelig, foreningen har også opplevd mye på veien – alt fra å plage tyske soldater på Studenterhytta under krigen til å høre paven holde preken ved Idrettsbygget i 1989. Studenter har på svømmeføtter løpt Hu og Hei løpet, et orienteringsløp på over 30 km, og idrettslaget har flere ganger arrangert stafetten UKA Rundt, som forrige gang i 2017 varte dag og natt i 37 døgn. Foreningens fargerike historie kan ikke oppsummeres kort, så for å lese om dens første 100 år, kan boken Ekte idrettsglede av Gaute Heyerdahl kjøpes på NTNUI-kontoret ved Gløshaugen Idrettsbygg.</p>
        <img src={stup} alt='Visjon' className={classes.img} />
        <Typography variant='h2' className={classes.title}>Ett NTNUI</Typography>
        <Typography variant='h2' className={classes.title}>Mangfold – Samhold – Idrettsglede</Typography>
        <Typography variant='h3' className={classes.subtitle}>Strategi 2020-2022</Typography>
        <Typography variant='h3' className={classes.subtitle}>Formål</Typography>
        <p className={classes.text}>NTNUI er Norges største idrettslag. Vi er bygget av, og for studenter. Det at vi er bygget av frivillige studenter fører til jevnlig utskifting i diverse stillinger, som er en stor utfordring. Dette har gjennom alle år ført til en lav grad av kontinuitet i arbeidet utført med å utvikle klubben. Mye av arbeidskraften i NTNUI har blitt brukt til administrativt arbeid, og det har vært lite overskudd til å videreutvikle idrettslaget. For å kunne tilby fysisk aktivitet til så mange studenter som mulig er det et ønske om å fokusere mer på å utvikle klubben ved å styrke rammeverket for gruppene. Ved å styrke gruppenes rammeverk sentralt, blir lettere å drive aktivitet i gruppene og NTNUI når ut til flere studenter.</p>
        <p className={classes.text}>Ved å lage en strategiplan setter vi ned innsatsområder som NTNUI skal arbeide med i 2020- 2022. På denne måten vil man jobbe for å bedre dagens situasjon innenfor bestemte områder gjennom flere år, i stedet for at man arbeider med nye ting hele tiden. Likevel ønsker vi at klubben skal ha eierskap til sine prosjekter. I forkant av generalforsamlingen vil det påtroppende hovedstyret utarbeide årlige handlingsplaner, og diskutere med medlemmene hvordan de skal jobbe for å nå målene innenfor hvert innsatsområde. På denne måten vil det tydeliggjøres hva NTNUI arbeider med.</p>
        <Typography variant='h3' className={classes.subtitle}>Prosessen</Typography>
        <p className={classes.text}>Strategiplanen er utviklet av en prosjektgruppe bestående av Øystein Fruseth Christiansen, Eirik Søreide Hansen og Vilde Teksum. Arbeidet er bygget på grunnlaget Eirik S.H. og Thine Hestnes gjorde i 2018 i samarbeid med Henrik Carstens, som er klubbveileder i Norges Idrettsforbund.</p>
        <p className={classes.text}>Gjennom to gruppeledersamlinger har det blitt samlet inn innspill og formulert NTNUIs formål og verdier. Videre har det blitt utarbeidet forslag til innsatsområder basert på innspillene fra gruppeledersamlingen i mars 2019 til alle tillitsvalgte i NTNUI. Disse innsatsområdene har blitt diskutert og gitt innhold gjennom en forumsamling holdt i april 2019 og en høringsrunde som ble avsluttet i mai 2019.</p>
        <p className={classes.text}>I løpet av sommeren 2019 har prosjektgruppen gått gjennom svarene fra høringen og annet tilgjengelig materiale. Vi har diskutert og blitt enige om de tre innsatsområdene Anlegg, Ett NTNUI og Rekruttering. Deretter har vi skrevet mer utfyllende beskrivelser av formålet, innsatsområdene og verdiene.</p>
        <Typography variant='h3' className={classes.subtitle}>Om planen</Typography>
        <p className={classes.text}>Innsatsområdene inneholder en beskrivelse av hva det er ønskelig at NTNUI skal arbeide med fremover og hvorfor det er viktig å arbeide med nettopp dette. For verdiene står det først hva vi legger i det at noe er en verdi og hvordan dette skal påvirke organisasjonen. Deretter spesifikt hva vi legger i de ulike verdiene, hvorfor dette treffer NTNUI, samt hvordan vi ønsker at NTNUI skal føles for medlemmer og oppfattes av eksterne personer.</p>
        <Typography variant='h3' className={classes.subtitle}>Vår visjon: “De beste øyeblikkene i studietiden”</Typography>
        <p className={classes.text}>Studietiden er en spennende og utfordrende tid for mange, kjennetegnet av mye frihet, og med dette mye usikkerhet. NTNUI tar sikte på å treffe studentene der de er og deres behov. Vi skal ikke bare stå for de beste øyeblikkene i studietiden, vi skal også fremme NTNUI sin tolkning av studentidrett.</p>
        <p className={classes.text}>Studentidrett er mer enn bare idrett. NTNUI skal vise studentene ved NTNU at idrett ikke bare er trening, men en sosial arena hvor vi møter andre studenter med gleden for idrett til felles. NTNUI skal strebe for å få flest mulig studenter i fysisk aktivitet og fremme kameratskap. Dagene som student er preget av mye sitting og psykiske anstrengelser. NTNUI er en viktig arena for å koble av og lade opp igjen til neste dag. Idrett og aktivitet skal være en naturlig del av hverdagen som student, og vi streber for å skape en sporty campus ved å sette en lav terskel for å bli med. Miljøet i NTNUI er et resultat av de frivilliges fantastiske engasjement for sine nærmeste i foreningen vår. NTNUI er ikke det samme uten, og skal som en del av sin visjon jobbe for at denne innsatsen er med å skape, ikke bare gode, men de beste øyeblikkene for sine tillitsvalgte. Erfaring fra verv i NTNUI skal komme godt med både i tudietiden og senere, i arbeidslivet.</p>
        <p className={classes.text}>NTNUI er Norges største idrettslag og skal være et forbilde for resten av idretts-Norge. Foreningen arbeider for et best mulig forhold til både utdanningsinstitusjon og studentsamskipnad, og dette plasserer NTNUI i en spesielt fordelaktig posisjon. NTNUI vil jobbe aktivt for å styrke studentidretten også i resten av landet.</p>
        <Typography variant='h3' className={classes.subtitle}>Virksomhetsidé</Typography>
        <p className={classes.text}>En virksomhetsidé skal kort oppsummere hva en forening er og hva den tilbyr. Vi ønsker at vår virksomhetsidé skal komplementere visjonen og utdype hvem NTNUI er og hvordan den flotte klubben vår har blitt det den er i dag. Virksomhetsidéen gir sammen med verdiene veiledning til hvordan NTNUI skal driftes, utvikles fremover og fremstå for nye studenter.</p>
        <p className={classes.text}>Virksomhetsidéen vår er: <br/><i>NTNUI er et mangfoldig fellesskap bygget på frivillighet og respekt for ulikhet. Her opplever du studentidrett, mestring og utvikling i et godt sosialt miljø.</i></p>
        <Typography variant='h3' className={classes.subtitle}>Våre verdier:</Typography>
        <Typography variant='h3' className={classes.subtitle}>Mangfold, Samhold og Idrettsglede</Typography>
        <p className={classes.text}>Verdiene våre er grunnsteinene til NTNUI. De skal fungere som veivisere for handlingene og beslutningene alle organisasjonsleddene foretar. Verdiene går igjen i hele organisasjonen, og skal assosieres med NTNUI. På denne måten vil verdiene fungere som retningslinjer og veiledninger for alle frivillige i NTNUI. På samlingen hvor disse ble bestemt, var det stor enighet i hva som “er” NTNUI. Vi er Mangfold, Samhold og Idrettsglede.</p>
        <Typography variant='h3' className={classes.subtitle}>Mangfold</Typography>
        <p className={classes.text}>Vi skal nå ut til alle studenter ved NTNU, og legge til rette for et fellesskap på tvers av ulike bakgrunner. I NTNUI kan personer som ellers er helt forskjellige samles rundt gleden for sin aktivitet. Vi skal jobbe for at mangfold karakteriserer vårt tilbud, og skape et bredt aktivitetstilbud i klubben. Det skal være en lav terskel for å bli med i NTNUI.</p>
        <Typography variant='h3' className={classes.subtitle}>Samhold</Typography>
        <p className={classes.text}>Kameratskap i mangfoldet er vår styrke. Vi skal legge til rette for NTNUI-ånden og bringe studenter sammen om våre fantastiske farger. NTNUI skal være en plass hvor folk kan samles om sin idrett og bygge vennskap for livet. NTNUI er mer enn en idrettsklubb, og vi skal lage en svært sterk sosial tilhørighet til gruppene for våre medlemmer. NTNUI er et felleskap på tvers av grupper. De beste minnene skaper vi sammen.</p>
        <Typography variant='h3' className={classes.subtitle}>Idrettsglede</Typography>
        <p className={classes.text}>En felles glede for idrett og aktivitet er livsgrunnlaget i NTNUI. Vi skal legge til rette for mestring i hverdagen og treffe studentene på deres behov. Det skal være gøy å drive idrett i NTNUI, og vi skal dyrke de unike øyeblikkene av aktivitet sammen med venner.</p>
        <Typography variant='h3' className={classes.subtitle}>Anlegg</Typography>
        <p className={classes.text}>Å opprettholde et aktivitetstilbud til så mange studenter som mulig er kjernevirksomheten til NTNUI som studentidrettslag. Anlegg for aktivitet er derfor den viktigste grunnsteinen for gruppene våre, og ved å bygge et bedre rammeverk rundt utvikling og drift av gruppens anlegg, vil vi øke og bedre aktiviteten for medlemmene.</p>
        <p className={classes.text}>Det er viktig å koordinere arbeidet innen anleggsutvikling mot eksterne partnere og å utnytte nettverkene vi har for å oppnå et best mulig resultat. Gode samarbeid har gitt oss anleggene vi har i dag og kommer til å være sentrale for å videreutvikle kapasiteten og kvaliteten ved klubbens anlegg. Vi må likevel alltid se etter nye muligheter og være innovative i utviklingen av anlegg.</p>
        <p className={classes.text}>Hver enkelt gruppe kjenner sitt anleggsbehov best. Det er også der vi har ekspertene på hvordan anleggene kan utvikles til å bli så bra som mulig for alle studenter som ønsker å drive aktivitet. Det skal være en lav terskel for nye initiativ fra ildsjelene som brenner for sin aktivitet. På denne måten skal vi bygge opp engasjement i hele klubben for å tenke nytt om sine anlegg og bidra til å gjøre disse bedre.</p>
        <p className={classes.text}>En av de viktigste oppgavene til NTNUI som studentidrettslag er å opprettholde et aktivitetstilbud til så mange studenter som mulig. For å kunne gjøre dette, må det fokuseres på å ha gode anlegg for å drive aktivitet. Dette gjelder vedlikehold og drift av de eksisterende anleggene NTNUI besitter i dag, samt å arbeide med utvikling av dagens anlegg og utbygging av nye anlegg.</p>
        <Typography variant='h3' className={classes.subtitle}>Ett NTNUI</Typography>
        <p className={classes.text}>Ett NTNUI er en samlingsprosess i NTNUI. Målet er at du som medlem skal føle en tilhørighet til NTNUI. Dette innebærer å skape et fellesskap i klubben, grunnet i det sterke mangfoldet som eksisterer blant gruppene i dag. Spesialiserte, administrative utvalg vil bidra med kompetanseheving i idrettslaget og gi gruppene et sterkere støtteapparat. Dette vil gjøre det lettere for gruppene å fokusere på NTNUIs kjerneaktivitet, nemlig å organisere aktiviteten for medlemsmassen. På sikt vil prosessen sikre en større arbeidskapasitet i klubben og åpne for at mer energi går til klubbutvikling, som vil komme medlemmene til gode.</p>
        <p className={classes.text}>NTNUI skal arbeide for å øke samhandling i idrettslaget, og det skal være en lav terskel for å kommunisere på tvers av gruppe og posisjon. Prosjekter mellom gruppene vil øke informasjonsflyt og erfaringsutveksling, samtidig som administrative utvalg skaper et godt rammeverk og gjør det fordelaktig å kommunisere ut fra egen gruppe. Det skal oppfordres til engasjement ved å øke innsyn i NTNUI og mulighet til å påvirke større avgjørelser som fattes mellom generalforsamlingene. Målet er at medlemmene og våre frivillige skal føle eierskap til helheten av prosjektet som er
NTNUI.</p>
        <p className={classes.text}>NTNUI skal være en arena for å bygge vennskap og nettverk. Som medlem skal terskelen være lav for å bli kjent med mangfoldet av grupper i klubben. NTNUI skal fokusere på å etablere flere møteplasser for diskusjon og erfaringsutveksling. Gruppene er NTNUIs viktigste organisasjonsledd og må inkluderes for å videreutvikle organisasjonen i riktig retning. Ett NTNUI kjennetegnes av et sterkt fellesskap av frivillige, med sterke røtter ut i gruppene. Ett NTNUI vil stå stødig og gi nødvendig stabilitet til klubben, og sikre et godt rammeverk for alle de nye initiativene som dyrkes blant medlemmene.</p>
        <Typography variant='h3' className={classes.subtitle}>Rekruttering</Typography>
        <p className={classes.text}>NTNUI skal være en inkluderende klubb med kapasitet til alle som ønsker å være aktive. For å få dette til, er det viktig at gruppene har et godt grunnlag for å rekruttere studenter fra NTNU. NTNUI skal samarbeide for å vise frem det allsidige tilbudet og promotere andre grupper dersom de selv ikke har plass.</p>
        <p className={classes.text}>Det er også viktig å rekruttere til de ulike vervene i klubben, både til gruppene og til den administrative delen av NTNUI. Vi er avhengige av ildsjeler for å kunne drifte NTNUI og opprettholde det tilbudet vi har. Det skal være attraktivt å ha verv i klubben. Konkurranse om stillingene vil sikre god kvalitet i organisasjonen og utvikle NTNUI i en positiv retning.</p>
        <p className={classes.text}>Rekruttering er et viktig tiltak for at alle gruppene skal kunne leve videre. Klubben burde derfor få frem hvilke tilbud som finnes, og informasjon skal være lett tilgjengelig. Et samarbeid internt i klubben vil gjøre det enklere for gruppene å rekruttere medlemmer. Synlighet er et sentralt hjelpemiddel for dette, spesielt ved semesterstart for nye studenter. NTNUIs farger skal være synlige på campus og rundt om i byen. Jo mer man ser av det, jo mer vil man ønske å ta del i det. NTNUI skal gjøre det enkelt for gruppene å vise seg og sitt tilbud frem.</p>
        <Typography variant='h3' className={classes.subtitle}>Fremtidsbilde</Typography>
        <p className={classes.text}><b>I 2022 er vi Ett NTNUI.</b> Det er lettere å samarbeide på tvers og spille hverandre gode i hele foreningen. Det standardiserte rammeverket som er utviklet sentralt i klubben blir sett på som godt nok for at gruppene velger dette fremfor egne løsninger. Gode ordninger for informasjonsflyt gir medlemmene et oversiktlig bilde av klubbens omfang og eierskap til prosjektene som gjennomføres. Nye møteplasser åpner for bedre erfaringsutveksling og samarbeid mellom gruppene.</p>
        <p className={classes.text}><b>NTNUI har utvidet administrasjonen.</b> Det er velfungerende administrative ekspertgrupper i foreningen, og det er rom for å arbeide med utvikling av klubben. NTNUI vil få større arbeidskraft og administrasjonen vil bedre kunne bistå gruppene med deres oppgaver. Våre frivillige er stolte over sitt arbeid og klubben oppfattes som en attraktiv arbeidsplass – uavhengig av interesse for idrett. I NTNUI får studenter relevant arbeidserfaring og ansvar for interessante prosjekter.</p>
        <p className={classes.text}><b>NTNUI skal være et selvfølgelig valg som ny student i Trondheim, uavhengig av bakgrunn.</b> I 2022 har flere samarbeid på tvers av gruppene gjort NTNUI synligere i Trondheim, spesielt for nye studenter. NTNUI viser frem hele spekteret av sin aktivitet, og studenter som ikke kommer med på førstevalget sitt, blir opplyst om og ledet mot andre grupper i foreningen.</p>
        <p className={classes.text}><b>I 2022 er prosjektet om campusutvikling ved Gløshaugen kommet til byggefasen.</b> På dette tidspunktet er en erstatning for Dragvoll idrettssenter sikret og arbeidet er i gang for å oppnå en friksjonsfri overgang til det nye idrettssenteret. Gjennom diverse prosjekter, samt effektivisering av dagens arealbruk, har vi økt vår totale kapasitet. NTNUI har nå større arbeidskraft inn mot utviklingen av dagens anlegg, med også økt fokus på å utvide med nye arenaer for aktivitet.</p>
      </div>
    </Navigation>
  );
}

export default About;
