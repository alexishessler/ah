import React, { Component } from 'react';
// import './Jumbotron.css';

import Jumobtron from './Jumbotron/Jumbotron'
import Dialog from './Dialog/Dialog'




class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      open: "",
    }
  }

  // handleClose = () => {
  //   this.setState({ open: false });
  // };
  componentDidMount(){
    this.setState({
      open: this.props.modal
    })
  }


  render() {

    console.log("DEPUIS HOMEE this.props.modal", this.props.modal)



    return (
      <div className="">
        <Jumobtron/>
        <Dialog modal={this.props.modal}/>
      </div>
    );
  }
}




export default Home;
