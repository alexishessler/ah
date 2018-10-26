import React from 'react';
// import './Jumbotron.css';
import Grid from '@material-ui/core/Grid';


import Stepper from './Stepper/Stepper';
import './Path.css';

// import Image1 from '../Apps/Images/API.jpeg';



class Path extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }



  render() {

    return (
      <div className="greybackpath">
        <h1 className="bigtitle">Experiences</h1>
            <div className="leftgrid">
              <Grid container>
                <Stepper/>
              </Grid>
            </div>
      </div>
    );
  }
}




export default Path;
