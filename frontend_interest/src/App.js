import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer.js'
import UserAuthContainer from './components/UserAuthContainer.js'
import Auth from './Utils/utilAuth.js'
import {AuthRoute} from './Utils/utilAuthRouting.js'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <AuthRoute exact path={"/"} component={UserAuthContainer} />
        <Route exact path={"/home"} component={HomeContainer} />

      </div>
    );
  }
}
// <Route exact path={"/login"} component={Login} />

  // <Route  exact path={"/"} component={CreateAccount}/>
// <Route exact path={"/home"} component={Home} />


export default App;
