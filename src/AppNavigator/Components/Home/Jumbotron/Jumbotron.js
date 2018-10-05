import React from 'react';
import './Jumbotron.css';



class Jumbotron extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }



  render() {

    return (
      <div className="jumbotron filter">
        <h1 className="jumbotitle">Alexis Hessler</h1>
        <h3 className="jumbosubtitle">JUNIOR FULLSTACK DEVELOPER <br/> REACT BASED WEB & MOBILE APPLICATIONS </h3>
      </div>
    );
  }
}




export default Jumbotron;
