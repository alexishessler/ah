import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Image1 from './Tab/Images/linkedin.png';
import Image2 from './Tab/Images/github.png';
import Image3 from './Tab/Images/mail.png';

import './Expansion.css'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><strong>LinkedIn</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansionclick">
          <div className="socialitem"><a className="socialink" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/alexishessler/"><img src={Image1} alt="linkedin" className="socialpic"/><h2 className="socialtitle">Professional experiences</h2></a></div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><strong>GitHub</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="socialitem"><a className="socialink" target="_blank" rel="noreferrer noopener" href="https://www.github.com/alexishessler"><img src={Image2} alt="linkedin" className="socialpic"/><h2 className="socialtitle">Coding projects</h2></a></div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}><strong>Email</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansionclick">
          <div className="socialitem"><a className="socialink" rel="noreferrer noopener" href="mailto:alexis.hessler@protonmail.com?subject=I would like to recruit you... :)"><img src={Image3} alt="linkedin" className="socialpic"/><h2 className="socialtitle">Direct contact</h2></a></div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
