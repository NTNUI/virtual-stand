import React from 'react';
import {useParams} from 'react-router-dom';
import parser from 'html-react-parser';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import Studenterhytta from '../../assets/img/studenterhytta.jpg';

// Project Components
import Banner from '../../components/navigation/Banner';
import Navigation from '../../components/navigation/Navigation';
import Box from '../../components/layout/Box';
import GroupsInfo from '../../data/groups-info.json';

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
  images: {
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
  },
}));

function GroupDetails(props) {
  const classes = useStyles();
  const {slug} = useParams();
  const group = GroupsInfo.find((group) => group.slug === slug);

  return (
    <Navigation footer>
      {group ?
        <>
          <Banner title={group.name} />
          <div className={classes.root}>
            <Box
              href={group.link || null}
              buttonText={group.link_text || 'Bli en av oss!'}
              title={group.name}
              text={parser(group.short_description)}
              img={group.cover_image || Studenterhytta} />
            <Typography variant='h2' className={classes.title}>Om oss</Typography>
            <p className={classes.text}>{parser(group.long_description)}</p>
            <Typography variant='h3' className={classes.contact}>Kontakt:</Typography>
            <p className={classes.text}>{group.contact}</p>
            {group.video &&
              <video className={classes.video} controls src={group.video} width='100%' />
            }
            <div className={classes.images}>
              {group.images.map((image, i) => (
                <img key={i} className={classes.image} src={image} alt={group.name} width='100%' />
              ))}
            </div>
          </div>
        </> :
        <>
          <Banner title='Noe gikk galt' />
          <div className={classes.root}>
            <p className={classes.text}>Vi finner ikke denne gruppen :(</p>
          </div>
        </>
      }
    </Navigation>
  );
}

export default GroupDetails;
