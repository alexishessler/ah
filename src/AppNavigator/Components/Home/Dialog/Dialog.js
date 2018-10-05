import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import './Dialog.css';

import ReactImage from './Images/react.png'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: "",
  };

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount(){
    // console.log("DEPUIS DIALOG", this.props.modal)
    this.setState({
      open: this.props.modal
    })
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"This Web App is using ReactJS"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <img className="ImageReact" src={ReactImage} alt="React Image"/>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{justifyContent: "center"}}>
            <Button onClick={this.handleClose} color="primary">
              That's awesome, I want to continue!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;

// <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
