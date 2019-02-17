import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Home from './components/Home.js'
import CreateAccount from './components/CreateAccount.js'
import './App.css';

class App extends Component {
  constructor(){
    super()


  }

componentDidMount(){
  // this.axiosGetUserAccount()
  // this.displayUserName()

}






  render() {

    return (
      <div className="App">


          <Route  exact path={"/"} component={CreateAccount}/>

          <Route exact path={"/home"} component={Home} />

      </div>
    );
  }
}

export default App;
