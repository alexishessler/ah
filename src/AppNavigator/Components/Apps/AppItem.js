import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import './Jumbotron.css';

// import Chip from '@material-ui/core/Chip';


import PropTypes from 'prop-types';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import GitHub from './Images/github.png';

import Iframe from 'react-iframe';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = {
  card: {
    minWidth : "100%",
  },
  appBar: {
    position: 'relative',
  },
  media: {
    height: 100,
  },
  flex: {
    flex: 1,
  },
  titlemodal: {
    fontWeight: "bold",
  },
  cardmodal: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 70,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  imagemodal: {

    width: "100%",
    borderRadius: "8px",
    boxShadow: "2px 2px 2px #ACADAE",
    marginBottom: 20,
  },
  video: {
    width: "100%",
    minHeight: 200,
    borderRadius: "8px",
    // backgroundColor: "#4356A9",
    boxShadow: "2px 2px 2px #ACADAE",
    position: "relative",
    marginTop: 10,
    marginBottom: 20,
  },
  textContent: {
    marginTop:30,
    textAlign: "left",
    minWidth: 600,
  },
  h2title: {
    marginBottom: 0,
  },
  extlink: {
    paddingTop: 20,
    marginLeft: 5,
    width: 50,
  },
  extlinkdiv: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },
  chips: {
    backgroundColor: "#4052AC",
    minWidth: 20,
    borderRadius: 40,
    padding: 4,
    paddingLeft: 6,
    paddingRight: 6,
    margin: 4,
    marginLeft: 2,
    marginBottom: 4,
    color: "#FFFFFF",
    display: "inline-block",
    textAlign: "center",
    fontSize: 12
  },
  textDesc: {
    marginTop: 2,
  },
  textMargin: {
    marginTop: 40,
  }
};

// function Transition(props) {
//   return <Slide direction="up" {...props} />;
// }

class Apps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      video: false,
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true, video: !this.state.video });
  };

  handleClose = () => {
    this.setState({ open: false, video: !this.state.video });
  };

  render() {

    // const classes = this.props;

    var video = null;
    if (this.state.video){
      video = (<Iframe url={this.props.video}
                id={this.props.name}
                styles={styles.video}
                allowFullScreen/>)
    }

    var stack = this.props.stack.map((item, index) =>
      <span key={index} style={styles.chips}>{item}</span>)


    return (
      <div className="">


          <Card style={styles.card} key={this.props.id}>
                <CardActionArea onClick={this.handleClickOpen}>
                  <CardMedia
                    component="img"
                    className=""
                    image={this.props.image}
                    title={this.props.name}
                  />
                <CardContent className={styles.size}>
                    <Typography gutterBottom variant="headline" component="h2">
                      {this.props.name}
                    </Typography>
                    <Typography component="p" style={styles.size}>
                      {this.props.desc}
                    </Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions style={{display: "inline"}}>
                      <Button onClick={this.handleClickOpen} size="small" style={{color: "#4154AF"}}>
                        Discover
                      </Button>
                </CardActions>
              </Card>




              <div>
                      <Dialog
                        open={this.state.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                        maxWidth="sm"
                      >
                        <DialogTitle id="alert-dialog-slide-title">
                          {this.props.name}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">

                            <img style={styles.imagemodal} src={this.props.image} alt="imgtest"/>

                              <span style={styles.textDesc}><strong>Description:</strong></span> {this.props.desc} <br/>
                              <span style={styles.textDesc}><strong>Dev still ongoing:</strong></span> {this.props.onGoing} <br/>
                              <span style={styles.textDesc}><strong>Number of dev associated to the project:</strong></span> {this.props.nbDev} <br/>
                              <span style={styles.textMargin}><strong>Stack:</strong></span> {stack} <br/>
                              <span style={styles.textMargin}><strong>Project in video:</strong></span>

                              {video}

                                    <span><strong>Check on GitHub:</strong><a target="_blank" rel="noreferrer noopener" href={this.props.github}><img style={styles.extlink} src={GitHub} alt="github"/></a></span> <br/>

                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleClose} color="primary">
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>








      </div>
    );
  }
}


Apps.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default Apps;











// <Dialog
// fullScreen
// open={this.state.open}
// onClose={this.handleClose}
// TransitionComponent={Transition}
// >
//
// <AppBar className={classes.appBar}>
//   <Toolbar>
//     <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
//       <CloseIcon />
//     </IconButton>
//     <Typography variant="h6" color="inherit" className={classes.flex}>
//       {this.props.name}
//     </Typography>
//   </Toolbar>
// </AppBar>
// <List>
//   <ListItem button>
//     <ListItemText primary="Phone ringtone" secondary="Titania" />
//   </ListItem>
//   <Divider />
//   <ListItem button>
//     <ListItemText primary="Default notification ringtone" secondary="Tethys" />
//   </ListItem>
// </List>
// </Dialog>




















// import React from 'react';
//
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// // import './Jumbotron.css';
//
//
//
// const styles = {
//   card: {
//     minWidth : "100%",
//   },
//   media: {
//     height: 100,
//   },
// };
//
// class Apps extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//     }
//   }
//
//
//
//   render() {
//
//     // const { classes } = this.props;
//
//
//     return (
//       <div className="">
//
//           <Card style={styles.card} key={this.props.id}>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     className=""
//                     image={this.props.image}
//                     title={this.props.name}
//                   />
//                 <CardContent className={styles.size}>
//                     <Typography gutterBottom variant="headline" component="h2">
//                       {this.props.name}
//                     </Typography>
//                     <Typography component="p" style={styles.size}>
//                       {this.props.desc}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions style={{display: "inline"}}>
//                       <Button  size="small" style={{color: "#4154AF"}}>
//                         Discover
//                       </Button>
//                 </CardActions>
//               </Card>
//
//
//       </div>
//     );
//   }
// }
//
//
//
//
// export default Apps;





//
// <Dialog
// fullScreen
// open={this.state.open}
// onClose={this.handleClose}
// TransitionComponent={Transition}
// >
//
// <AppBar className={classes.appBar}>
//   <Toolbar>
//     <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
//       <CloseIcon />
//     </IconButton>
//     <Typography variant="h6" color="inherit" className={classes.flex} style={styles.titlemodal}>
//       {this.props.name}
//     </Typography>
//   </Toolbar>
// </AppBar>
//
// <div style={styles.cardmodal}>
//   <h2 style={styles.h2title}>{this.props.name}</h2>
//   <h4>{this.props.desc}</h4>
//   <img style={styles.imagemodal} src={this.props.image} alt="imgtest"/>
//
//     <h2>Présentation vidéo</h2>
//
//
//
//
// </div>
//
//
// </Dialog>





//       <div style={styles.textContent}>
//         <h2>{this.props.name}</h2>
//         <h4>{this.props.desc}</h4>
//           <h2>{this.props.name}</h2>
//           <h4>{this.props.desc}</h4>
//             <h2>{this.props.name}</h2>
//             <h4>{this.props.desc}</h4>
//               <h2>{this.props.name}</h2>
//               <h4>{this.props.desc}</h4>
//       </div>
