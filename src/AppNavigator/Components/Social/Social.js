import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import './Jumbotron.css';

// import Tab from './Tab/Tab';
import Expansion from './Expansion';



class Social extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }



  render() {

    return (
      <div className="greybackpath">
        <h1 className="bigtitle">Social</h1>
          <Grid container>

            <Expansion/>

          </Grid>
      </div>
    );
  }
}


// <Tab/>

export default Social;
