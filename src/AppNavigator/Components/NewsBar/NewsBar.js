import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import './NewsBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#F4D563"}} className="newsbar">
          <h3 className="newsbartitle">
            Developpeur Junior FullStack JavaScript. À l'écoute du marché pour un poste en CDI et/ou un projet de start up
          </h3>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
