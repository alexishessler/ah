import React from 'react';
// import './Jumbotron.css';

import GridList from './GridList/GridList';
import { Line, Circle } from 'rc-progress';

import Grid from '@material-ui/core/Grid';


import './Stack.css';



class Stack extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }



  render() {

    return (
      <div className="greybackpath">
        <h1 className="bigtitle">Front-End</h1>

        <Grid container spacing={24}>

          <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>JavaScript</h2><Circle className="stackitem" percent="70" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
          <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>React</h2><Circle className="stackitem" percent="60" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
          <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>Redux</h2><Circle className="stackitem" percent="50" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
          <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>React Native</h2><Circle className="stackitem" percent="50" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
          <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>HTML</h2><Circle className="stackitem" percent="80" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
          <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>CSS</h2><Circle className="stackitem" percent="80" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>

      </Grid>

          <h1 className="bigtitle2">Back-End & Collaborative tools</h1>

            <Grid container spacing={24}>

              <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>NodeJS</h2><Circle className="stackitem" percent="70" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
              <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>MongoDB/Mongoose</h2><Circle className="stackitem" percent="70" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
              <Grid item xs={12} sm={6} md={4}><div className="stacklist"><h2 style={{color: "#4356A9#"}}>Git/GitHub</h2><Circle className="stackitem" percent="60" strokeWidth="5" strokeColor="#4356A9" trailWidth="1.5" trailColor="#EFD575"/></div></Grid>
          </Grid>


      <div className="stackdivpics">
        <GridList/>
      </div>

      </div>
    );
  }
}

  // <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />



export default Stack;
