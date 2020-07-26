import React, {useState, useEffect, createRef} from 'react';
import firebase from '../../firebase';
import PropTypes from 'prop-types';
import URLS from '../../URLS';
import {useParams, Link} from 'react-router-dom';
import parser from 'html-react-parser';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Icons
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';

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
  longDescriptionContainer: {
    display: 'flex',
    marginBottom: 10,
    '@media only screen and (max-width: 700px)': {
      flexDirection: 'column',
    },
  },
  text: {
    width: '100%',
    margin: '0 5px',
  },
  contact: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: '2rem',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    marginBottom: 16,
    width: '100%',
  },
  button: {
    height: 50,
    marginBottom: 16,
  },
  error: {
    fontSize: '1rem',
  },
  box: {
    border: '2px solid ' + theme.colors.background.primaryLight,
    background: theme.colors.background.primaryLight,
    boxShadow: '0px 1px 4px #222',
    borderRadius: 10,
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: '50% 50%',
    gridTemplateAreas: '"text img"',
    '@media only screen and (max-width: 700px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: '"img" "text"',
    },
  },
  boxText: {
    color: 'white',
    padding: 40,
    gridArea: 'text',
    '@media only screen and (max-width: 700px)': {
      padding: 20,
    },
  },
  boxImg: {
    gridArea: 'img',
    width: '100%',
    height: '100%',
    minHeight: 350,
    objectFit: 'cover',
    '@media only screen and (max-width: 700px)': {
      minHeight: 200,
    },
  },
  boxHeader: {
    padding: '10px 0',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  arrayList: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    background: theme.colors.background.primaryLight,
    borderRadius: 15,
    marginBottom: 20,
  },
  arrayItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px auto',
    width: '100%',
    '@media only screen and (max-width: 700px)': {
      flexDirection: 'column',
    },
  },
  arrayItemText: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px auto',
    width: '100%',
  },
  arrayImg: {
    objectFit: 'cover',
    height: 125,
    width: 175,
    marginRight: 10,
    '@media only screen and (max-width: 700px)': {
      width: '100%',
      marginRight: 0,
      marginBottom: 10,
    },
  },
  addButton: {
    marginTop: 10,
    marginBottom: 15,
    width: '100%',
  },
  deleteIcon: {
    color: '#b20101',
    width: 56,
    height: 56,
  },
}));

const ArrayItems = (props) => {
  const classes = useStyles();
  const {array, setArray, images} = props;
  const fileInput = createRef();
  const [fileUploadError, setFileUploadError] = useState('');

  const handleOptionFieldChange = (id) => (e) => {
    const updatedOptions = [...array];
    updatedOptions[id] = e.target.value;
    setArray(updatedOptions);
  };
  const handleAddOptionField = (e, text) => {
    const updatedOptions = [...array];
    updatedOptions.push(text || '');
    setArray(updatedOptions);
  };
  const handleRemoveOptionField = (id) => () => {
    const updatedOptions = [...array];
    updatedOptions.splice(id, 1);
    setArray(updatedOptions);
  };

  const uploadImage = (ref) => {
    const file = ref.current.files[0];
    setFileUploadError('');
    if (!file) {
      setFileUploadError('Du må velge et bilde');
      return;
    } else if (file.size > 800000) {
      setFileUploadError('Bildet er stort og kan gjøre innlastningen av siden treg');
    }
    const storageRef = firebase.storage().ref('images/' + file.name);
    const uploadTask = storageRef.put(file);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed', (snapshot) => {
    }, (error) => {
    }, () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        handleAddOptionField(null, downloadURL);
      });
    });
  };

  return (
    <div className={classes.arrayList}>
      {array && array.map((item, id) => (
        <div key={id} className={classes.arrayItem}>
          <img className={classes.arrayImg} src={images ? item : 'https://img.youtube.com/vi/' + item + '/default.jpg'} width='175' alt={item} />
          <div className={classes.arrayItemText}>
            <TextField key={id} onChange={handleOptionFieldChange(id)} value={item} className={classes.input} label={images ? 'Bilde-url' : 'Youtube-id'} variant='outlined' required multiline helperText={images ? 'Bildet bør ikke være større enn 1000px*1000px / 500Kb for å sikre at innlastningen går kjapt når man besøker siden. Du kan for eks. bruke "https://compressjpeg.com/" for å gjøre bildet mindre.' : 'Legg kun inn id\'en til YouTube-videoen. SÅNN: PkonAgVjptI. IKKE: https://www.youtube.com/watch?v=PkonAgVjptI'} />
            <IconButton className={classes.deleteIcon} onClick={handleRemoveOptionField(id)} aria-label='Slett' component="span">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      ))}
      {images ?
        <>
          <Button className={classes.addButton} variant='contained' color='primary' onClick={handleAddOptionField}>Legg til bilde</Button>
          <input
            accept="image/*"
            className={classes.input}
            type="file"
            ref={fileInput}
          />
          <Button className={classes.addButton} variant='outlined' color='primary' onClick={() => uploadImage(fileInput)}>Last opp bilde</Button>
          {fileUploadError !== '' && <Typography variant='h3' className={classes.error}>{fileUploadError}</Typography>}
        </> :
        <Button className={classes.addButton} variant='contained' color='primary' onClick={handleAddOptionField}>Legg til YouTube-video</Button>
      }
    </div>
  );
};
ArrayItems.propTypes = {
  images: PropTypes.bool,
  array: PropTypes.array,
  setArray: PropTypes.func,
};

function GroupEdit(props) {
  const classes = useStyles();
  const {slug} = useParams();
  const [group, setGroup] = useState(null);
  const [error, setError] = useState('');
  const [fileUploadError, setFileUploadError] = useState('');
  const fileInput = createRef();

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('info')
      .doc('group')
      .get()
      .then((data) => {
        const groups = data.data();
        setGroup(groups[slug]);
      });
  }, [slug]);

  const formSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('info').doc('group')
      .update({
        [slug]: group,
      })
      .then(() => {
        setError('Gruppen ble oppdatert');
        setTimeout(() => setError(''), 2000);
      })
      .catch((error) => setError(error.code + ' - ' + error.message));
  };

  const uploadCoverImage = (ref) => {
    const file = ref.current.files[0];
    setFileUploadError('');
    if (!file) {
      setFileUploadError('Du må velge et bilde');
      return;
    } else if (file.size > 800000) {
      setFileUploadError('Bildet er stort og kan gjøre innlastningen av siden treg');
    }
    const storageRef = firebase.storage().ref('cover_images/' + file.name);
    const uploadTask = storageRef.put(file);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed', (snapshot) => {
    }, (error) => {
    }, () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        setGroup({...group, cover_image: downloadURL});
      });
    });
  };

  return (
    <Navigation footer>
      {group && firebase.auth().currentUser ?
        <>
          <Banner title={group.name} />
          <div className={classes.root}>
            <form className={classes.flex} autoComplete='off' onSubmit={formSubmit}>
              <div className={classes.box}>
                <div className={classes.boxText}>
                  <Typography variant='h2' className={classes.boxHeader}>{group.name}</Typography>
                  <TextField onChange={(e) => setGroup({...group, short_description: e.target.value})} value={group.short_description} className={classes.input} label='Kort beskrivelse' variant='outlined' required multiline />
                  <TextField onChange={(e) => setGroup({...group, cover_image: e.target.value})} value={group.cover_image} className={classes.input} label='Cover bilde url' variant='outlined' required multiline helperText='Bildet bør ikke være større enn 1000px*1000px / 500Kb for å sikre at innlastningen går kjapt når man besøker siden. Du kan for eks. bruke "https://compressjpeg.com/" for å gjøre bildet mindre.' />
                  <input
                    accept="image/*"
                    className={classes.input}
                    type="file"
                    ref={fileInput}
                  />
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.input}
                    onClick={() => uploadCoverImage(fileInput)}
                  >
                  Last opp cover-bilde
                  </Button>
                  {fileUploadError !== '' && <Typography variant='h3' className={classes.error}>{fileUploadError}</Typography>}
                </div>
                <img className={classes.boxImg} alt='Bildetittel' src={group.cover_image} />
              </div>
              <Typography variant='h2' className={classes.title}>Om oss</Typography>
              <div className={classes.longDescriptionContainer}>
                <div className={classes.text}>
                  <Typography variant='h2' className={classes.boxHeader}>Rediger</Typography>
                  <TextField onChange={(e) => setGroup({...group, long_description: e.target.value})} value={group.long_description} className={classes.input} label='Om oss tekst' variant='outlined' required multiline />
                  <Typography className={classes.error}><b>{'Teksten støtter HTML:'}</b></Typography>
                  <Typography className={classes.error}>{'Ny linje: <br>'}</Typography>
                  <Typography className={classes.error}>{'Overskrift stor: <h2>[overskrift-her]</h2>'}</Typography>
                  <Typography className={classes.error}>{'Overskrift liten: <h3>[overskrift-her]</h3>'}</Typography>
                  <Typography className={classes.error}>{'Link: <a href="[link-lenke-her]">[link-tekst-her]</a>'}</Typography>
                </div>
                <div className={classes.text}>
                  <Typography variant='h2' className={classes.boxHeader}>Se</Typography>
                  <div>{parser(group.long_description)}</div>
                </div>
              </div>
              <Typography variant='h3' className={classes.contact}>Kontakt:</Typography>
              <TextField onChange={(e) => setGroup({...group, contact: e.target.value})} value={group.contact} className={classes.input} label='Kontaktinfo' variant='outlined' required multiline />
              <Typography variant='h3' className={classes.contact}>Videoer</Typography>
              <ArrayItems array={group.videos || []} setArray={(e) => setGroup({...group, videos: e})} />
              <Typography variant='h3' className={classes.contact}>Bilder</Typography>
              <ArrayItems array={group.images || []} setArray={(e) => setGroup({...group, images: e})} images />
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                type='submit'
              >
              Lagre oppdateringene
              </Button>
              {error !== '' && <Typography variant='h3' className={classes.error}>{error}</Typography>}
            </form>
          </div>
        </> : group ?
          <>
            <Banner title='Du har ikke tilgang' />
            <div className={classes.root}>
              <p className={classes.text}>Du har ikke tilgang til å redigere grupper. <Link to={URLS.login}>Logg inn.</Link></p>
            </div>
          </> :
          <Banner title='Laster inn gruppen' />
      }
    </Navigation>
  );
}

export default GroupEdit;
