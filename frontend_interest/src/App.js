import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer.js'
import CreateAccountContainer from './components/CreateAccountContainer.js'
import CreateAccount from './components/CreateAccount.js'
import Login from './components/Login.js'
import LoginCreateAccountSwitch from './components/LoginCreateAccountSwitch.js'
import './App.css';

class App extends Component {

componentDidMount(){
}

  render() {
    return (
      <div className="App">
        <Route exact path={"/"} component={LoginCreateAccountSwitch} />
        <Route exact path={"/home"} component={HomeContainer} />

      </div>
    );
  }
}
// <Route exact path={"/login"} component={Login} />

  // <Route  exact path={"/"} component={CreateAccount}/>
// <Route exact path={"/home"} component={Home} />


export default App;
