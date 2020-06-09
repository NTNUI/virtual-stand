import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import MaterialPaper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    width: '100%',
    backgroundColor: theme.colors.background.secondary,
    background: (props) => props.img ? 'url("' + props.img + '")' : '',
    backgroundSize: 'cover !important',
    borderRadius: 15,
    padding: 20,
  },
}));

function Paper(props) {
  const {children, className} = props;
  const classes = useStyles(props);

  return (
    <MaterialPaper elevation={3} className={classnames(classes.paper, className && className)} >
      {children}
    </MaterialPaper>
  );
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  img: PropTypes.string,
};

export default Paper;
