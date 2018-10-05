import React from 'react';
// import './Jumbotron.css';

import Jumobtron from './Jumbotron/Jumbotron';
// import Dialog from './Dialog/Dialog';
import MessageOn from './MessageOn';




class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      openMessageOn: true,
    }
  }

  // handleClose = () => {
  //   this.setState({ open: false });
  // };
  // componentDidMount(){
  //   this.setState({
  //     open: this.props.modal
  //   })
  // }

  // componentDidMount(){
  //   this.setState({
  //     openMessageOn: this.props.modal
  //   })
  // }


  render() {

    // console.log("DEPUIS HOMEE this.props.modal", this.props.modal)

    // console.log("depuis Home", this.state.openMessageOn)

    return (
      <div className="">
        <Jumobtron/>
        <MessageOn openMessageOn={this.state.openMessageOn}/>
      </div>
    );
  }
}


// <Dialog modal={this.props.modal}/>

export default Home;
