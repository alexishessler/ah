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
        <AppBarNews/>
        <AppBar/>
      </div>
    );
  }
}




export default AppNavigator;
