import React from 'react';
import AppBar from './AppBar/AppBar';
import AppBarNews from './Components/NewsBar/NewsBar';



class AppNavigator extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }



  render() {

    return (
      <div className="">
        <AppBar/>
      </div>
    );
  }
}

// AJOUTER LE COMPOSANT POUR LA BARRE JAUNE EN HAUT
// <AppBarNews/>


export default AppNavigator;
