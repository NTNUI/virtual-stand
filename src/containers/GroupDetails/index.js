import React from 'react';
import firebase from '../../firebase';
import URLS from '../../URLS';
import {useParams, Link} from 'react-router-dom';
import parser from 'html-react-parser';
import {useGroups} from '../../GroupsContext';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import Studenterhytta from '../../assets/img/studenterhytta.jpg';

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
  contact: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: '2rem',
  },
  text: {
    fontSize: '1.2rem',
    margin: '5px 0',
  },
  grid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: '1fr 1fr',
    '@media only screen and (max-width: 700px)': {
      gridTemplateColumns: '1fr',
    },
  },
  image: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    borderRadius: 10,
    margin: 'auto',
    background: theme.colors.background.primaryLight,
  },
  video: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    borderRadius: 10,
    width: '100%',
  },
}));

function GroupDetails(props) {
  const classes = useStyles();
  const {slug} = useParams();
  const groups = useGroups();
  const group = groups[slug];

  return (
    <Navigation footer>
      {group ?
        <>
          <Banner title={group.name} />
          <div className={classes.root}>
            {firebase.auth().currentUser &&
              <>
                <p className={classes.text}><Link to={URLS.groups.concat(slug).concat(URLS.edit)}>Rediger denne gruppen</Link></p>
                <div></div>
              </>
            }
            <Box
              href={group.link || null}
              buttonText={group.link_text || 'Bli en av oss!'}
              title={group.name}
              text={group.short_description}
              img={group.cover_image || Studenterhytta} />
            <Typography variant='h2' className={classes.title}>Om oss</Typography>
            <div className={classes.text}>{parser(group.long_description)}</div>
            <Typography variant='h3' className={classes.contact}>Kontakt:</Typography>
            <p className={classes.text}>{group.contact}</p>
            {group.videos &&
              <>
                <Typography variant='h3' className={classes.contact}>Videoer</Typography>
                <div className={classes.grid}>
                  {group.videos.map((video, i) => (
                    <iframe title='Youtube video' key={i} className={classes.video} width="560" height="315" src={'https://www.youtube-nocookie.com/embed/' + video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  ))}
                </div>
              </>
            }
            {group.images.length > 0 &&
              <>
                <Typography variant='h3' className={classes.contact}>Bilder</Typography>
                <div className={classes.grid}>
                  {group.images.map((image, i) => (
                    <img key={i} className={classes.image} src={image} alt={group.name} width='100%' />
                  ))}
                </div>
              </>
            }
          </div>
        </> : groups.length > 0 ?
          <>
            <Banner title='Noe gikk galt' />
            <div className={classes.root}>
              <p className={classes.text}>Vi finner ikke denne gruppen :(</p>
            </div>
          </> :
          <Banner title='Laster inn gruppen' />
      }
    </Navigation>
  );
}

export default GroupDetails;
