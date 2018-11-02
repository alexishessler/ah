import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import './Jumbotron.css';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Iframe from 'react-iframe';



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

    maxWidth: "700px",
    borderRadius: "8px",
    boxShadow: "2px 2px 2px #ACADAE"
  },
  video: {
    maxWidth: 660,
    minHeight: 400,
    padding: 20,
    borderRadius: "8px",
    backgroundColor: "#4356A9",
    boxShadow: "2px 2px 2px #ACADAE",
    position: "relative"
  },
  textContent: {
    marginTop:30,
    textAlign: "left",
    minWidth: 600,
  },
  h2title: {
    marginBottom: 0,
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Apps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
    console.log("click ok")
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const classes = this.props;


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


          <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          >

          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex} style={styles.titlemodal}>
                {this.props.name}
              </Typography>
            </Toolbar>
          </AppBar>

          <div style={styles.cardmodal}>
            <h2 style={styles.h2title}>{this.props.name}</h2>
            <h4>{this.props.desc}</h4>
            <img style={styles.imagemodal} src={this.props.image} alt="imgtest"/>

              <h2>Présentation vidéo</h2>

                <Iframe url={this.props.video}
                        id={this.props.name}
                        styles={styles.video}
                        allowFullScreen/>
                      <div style={styles.textContent}>
                        <h2>{this.props.name}</h2>
                        <h4>{this.props.desc}</h4>
                          <h2>{this.props.name}</h2>
                          <h4>{this.props.desc}</h4>
                            <h2>{this.props.name}</h2>
                            <h4>{this.props.desc}</h4>
                              <h2>{this.props.name}</h2>
                              <h4>{this.props.desc}</h4>
                      </div>


          </div>


        </Dialog>


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
