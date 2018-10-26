import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';

import './AppBar.css';

import Home from '../Components/Home/Home';
import Stack from '../Components/Stack/Stack';
import Apps from '../Components/Apps/Apps';
import Experiences from '../Components/Path/Path';
import Social from '../Components/Social/Social';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navNormal: {
    cursor: "pointer",
    color: "#FFFFFF",
    border: "none",
  },
  navFocus: {
    cursor: "pointer",
    color: "black",
    borderBottom: "3px solid black",
  },
  navSelected: {
    cursor: "pointer",
    color: "#f9d548",
    borderBottom: "3px solid #f9d548",
  },
  navLink: {
    marginTop: "24px",
    marginLeft: "8px",
    marginRight: "8px",
    height: "5vh",
  },
};

class MenuAppBar extends React.Component {

  constructor(){
    super();
    this.linkMouseClick0 = this.linkMouseClick0.bind(this);
    this.linkMouseClick1 = this.linkMouseClick1.bind(this);
    this.linkMouseClick2 = this.linkMouseClick2.bind(this);
    this.linkMouseClick3 = this.linkMouseClick3.bind(this);
    this.linkMouseClick4 = this.linkMouseClick4.bind(this);
    this.state = {
      navOptions: {
        navLink0: styles.navSelected, click0: true,
        navLink1: styles.navNormal, click1: false,
        navLink2: styles.navNormal, click2: false,
        navLink3: styles.navNormal, click3: false,
        navLink4: styles.navNormal, click4: false,
      },
      pageSelected: "Home",
      openModalReact: true,
    }
  }

  // state à changer à true pour l'appli

  // FONCTION CLICK LINK 0
  linkMouseClick0 = () => {
    this.setState({
      navOptions: {
        navLink0: styles.navSelected, click0: true,
        navLink1: styles.navNormal, click1: false,
        navLink2: styles.navNormal, click2: false,
        navLink3: styles.navNormal, click3: false,
        navLink4: styles.navNormal, click4: false,
        navLink5: styles.navNormal, click5: false,
      },
      pageSelected: "Home",
      openModalReact: false,
    })
  }

  // FONCTION CLICK LINK 1
  linkMouseClick1 = () => {
    this.setState({
      navOptions: {
        navLink0: styles.navNormal, click0: false,
        navLink1: styles.navSelected, click1: true,
        navLink2: styles.navNormal, click2: false,
        navLink3: styles.navNormal, click3: false,
        navLink4: styles.navNormal, click4: false,
        navLink5: styles.navNormal, click5: false,
      },
      pageSelected: "Stack"
    })
  }

  // FONCTION CLICK LINK 2
  linkMouseClick2 = () => {
    this.setState({
      navOptions: {
        navLink0: styles.navNormal, click0: false,
        navLink1: styles.navNormal, click1: false,
        navLink2: styles.navSelected, click2: true,
        navLink3: styles.navNormal, click3: false,
        navLink4: styles.navNormal, click4: false,
        navLink5: styles.navNormal, click5: false,
      },
      pageSelected: "Apps"
    })
  }

  // FONCTION CLICK LINK 3
  linkMouseClick3 = () => {
    this.setState({
      navOptions: {
        navLink0: styles.navNormal, click0: false,
        navLink1: styles.navNormal, click1: false,
        navLink2: styles.navNormal, click2: false,
        navLink3: styles.navSelected, click3: true,
        navLink4: styles.navNormal, click4: false,
        navLink5: styles.navNormal, click5: false,
      },
      pageSelected: "Experiences"
    })
  }

  // FONCTION CLICK LINK 4
  linkMouseClick4 = () => {
    this.setState({
      navOptions: {
        navLink0: styles.navNormal, click0: false,
        navLink1: styles.navNormal, click1: false,
        navLink2: styles.navNormal, click2: false,
        navLink3: styles.navNormal, click3: false,
        navLink4: styles.navSelected, click4: true,
        navLink5: styles.navNormal, click5: false,
      },
      pageSelected: "Social"
    })
  }

  // FONCTION CLICK LINK 5
  linkMouseClick5 = () => {
    this.setState({
      navOptions: {
        navLink0: styles.navNormal, click0: false,
        navLink1: styles.navNormal, click1: false,
        navLink2: styles.navNormal, click2: false,
        navLink3: styles.navNormal, click3: false,
        navLink4: styles.navNormal, click4: false,
        navLink5: styles.navSelected, click5: true,
      },
      pageSelected: "Reach"
    })
  }



  render() {
    const { classes } = this.props;


    // HANDLING NAVIGATION
    var navigation;
    if(this.state.pageSelected === "Home"){
      navigation = <Home modal={this.state.openModalReact}/>
    } else if (this.state.pageSelected === "Stack"){
      navigation = <Stack/>
    } else if (this.state.pageSelected === "Apps"){
      navigation = <Apps/>
    } else if (this.state.pageSelected === "Experiences"){
      navigation = <Experiences/>
    } else if (this.state.pageSelected === "Social"){
      navigation = <Social/>
      }
    // } else if (this.state.pageSelected == "Reach"){
    //   navigation = <Reach/>
    // }

    // console.log("MODAL DEPUIS APP BAR", this.state.openModalReact )


    return (
      <div className={classes.root}>

        <AppBar position="static" style={{backgroundColor: "#4154AF"}} className="appbar">
          <Toolbar>
              <div style={this.state.navOptions.navLink0} onClick={this.linkMouseClick0}><h3 style={styles.navLink}><Icon>home</Icon></h3></div>
              <div style={this.state.navOptions.navLink1} onClick={this.linkMouseClick1}><h3 style={styles.navLink}>Stack</h3></div>
              <div style={this.state.navOptions.navLink2} onClick={this.linkMouseClick2}><h3 style={styles.navLink}>Apps</h3></div>
              <div style={this.state.navOptions.navLink3} onClick={this.linkMouseClick3}><h3 style={styles.navLink}>Experiences</h3></div>
              <div style={this.state.navOptions.navLink4} onClick={this.linkMouseClick4}><h3 style={styles.navLink}>Social</h3></div>
          </Toolbar>
        </AppBar>

        {navigation}

      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


// <FormGroup>
//   <FormControlLabel
//     control={
//       <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
//     }
//     label={auth ? 'Logout' : 'Login'}
//   />
// </FormGroup>
//
// <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//   <MenuIcon />
// </IconButton>
//
// {auth && (
//   <div>
//     <IconButton
//       aria-owns={open ? 'menu-appbar' : null}
//       aria-haspopup="true"
//       onClick={this.handleMenu}
//       color="inherit"
//     >
//       <AccountCircle />
//     </IconButton>
//     <Menu
//       id="menu-appbar"
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={open}
//       onClose={this.handleClose}
//     >
//       <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//       <MenuItem onClick={this.handleClose}>My account</MenuItem>
//     </Menu>
//   </div>
// )}


// <div style={this.state.navOptions.navLink5} onClick={this.linkMouseClick5}><h3 style={styles.navLink}>Reach</h3></div>


export default withStyles(styles)(MenuAppBar);
