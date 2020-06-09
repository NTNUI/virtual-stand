import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// Project Components
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: '101vh',
  },
}));

function Navigation(props) {
  const {children, isLoading, footer} = props;
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className={classes.main}>
        {isLoading ? <LinearProgress /> :
          <div className={classes.wrapper}>
            {children}
          </div>
        }
      </main>
      {footer && !isLoading &&
        <Footer />
      }
    </>
  );
}

Navigation.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  footer: PropTypes.bool,
};

export default Navigation;
