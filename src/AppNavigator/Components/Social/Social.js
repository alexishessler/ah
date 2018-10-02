import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import './Jumbotron.css';

import Tab from './Tab/Tab';



class Social extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }



  render() {

    return (
      <div className="greybackpath">
          <Grid container>
            <Tab/>
          </Grid>
      </div>
    );
  }
}




export default Social;
