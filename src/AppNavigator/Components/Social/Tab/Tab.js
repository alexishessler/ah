import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

import Image1 from './Images/linkedin.png'
import Image2 from './Images/github.png'
import Image3 from './Images/mail.png'

import './Tab.css'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "F1F3F4",
  },
});

class ScrollableTabsButtonPrevent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off" fullWidth centered style={{backgroundColor: "#D4D5D6", color: "black"}}>
            <Tab label='LINKEDIN' />
            <Tab label='GITHUB' />
            <Tab label='EMAIL' />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><div className="greybackpath socialwidth"><a target="_blank" href="https://www.linkedin.com/in/alexishessler/"><img className="socialimg" src={Image1} alt="linkedin" /></a></div></TabContainer>}
        {value === 1 && <TabContainer><div className="greybackpath socialwidth"><a target="_blank" href="https://github.com/alexishessler"><img className="socialimg" src={Image2} alt="github" /></a></div></TabContainer>}
        {value === 2 && <TabContainer><div className="greybackpath socialwidth"><a target="_blank" href="mailto:alexis.hessler@protonmail.com?subject=Let's discuss"><img className="socialimg" src={Image3} alt="email" /></a></div></TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonPrevent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonPrevent);
