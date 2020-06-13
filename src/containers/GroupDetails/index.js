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
  text: {
    fontSize: '1.2rem',
    margin: '5px 0',
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
              buttonText='Bli en av oss!'
              title={group.name}
              text={group.short_description}
              img={group.coverimage || Studenterhytta} />
            <Typography variant='h2' className={classes.title}>Om oss</Typography>
            <p className={classes.text}>{parser(group.long_description)}</p>
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
