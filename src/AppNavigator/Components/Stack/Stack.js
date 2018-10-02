import React, { Component } from 'react';
// import './Jumbotron.css';

import GridList from './GridList/GridList';



class Stack extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }



  render() {

    return (
      <div className="greybackpath">
        <h1 className="bigtitle">Stack Tech</h1>
        <GridList/>
      </div>
    );
  }
}




export default Stack;
