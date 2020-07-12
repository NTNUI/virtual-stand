import React from 'react';
import PropTypes from 'prop-types';
import GA from '../../analytics';
import parser from 'html-react-parser';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
  header: {
    padding: '10px 0',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: '1.3rem',
  },
  text: {
    color: 'white',
    padding: 40,
    gridArea: 'text',
    '@media only screen and (max-width: 700px)': {
      padding: 20,
    },
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

function Box(props) {
  const {href, buttonText, title, text, img} = props;
  const classes = useStyles();

  const BoxButton = () => {
    return (
      <Button
        href={href}
        target='_noopener'
        variant='contained'
        color='secondary'
        onClick={GA.event('Button click', href)}
        className={classes.button} >
        {buttonText}
      </Button>);
  };

  return (
    <div className={classes.box}>
      <img className={classes.img} alt={title} src={img} />
      <div className={classes.text}>
        <Typography variant='h2' className={classes.header}>{title}</Typography>
        <p className={classes.subheader}>{parser(text !== '' ? text : ' ')}</p>
        {href && <BoxButton href={href}>{buttonText}</BoxButton>}
      </div>
    </div>
  );
}

Box.propTypes = {
  img: PropTypes.string.isRequired,
  href: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Box;
