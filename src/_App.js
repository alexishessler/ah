import React from 'react';
import { connect } from 'react-redux';

// Components
import Error from './Components/Screens/Error/Error';
import Home from './Components/Screens/Home/Home';
import Skills from './Components/Screens/Skills/Skills';
import Experiences from './Components/Screens/Experiences/Experiences';
import Portfolio from './Components/Screens/Portfolio/Portfolio';
import Social from './Components/Screens/Social/Social';
import Navbar from './Components/Navbar/Navbar';

// Routers
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    const { language } = this.props;
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/experiences' component={Experiences}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/social' component={Social}/>
            <Route component={Error}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
