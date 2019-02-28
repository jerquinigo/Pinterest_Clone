import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer.js'
import UserAuthContainer from './components/UserAuthContainer.js'
import DisplayOnePinByIdContainer from './components/DisplayOnePinByIdContainer.js'
import UserProfileContainer from './components/UserProfileContainer.js'
// import Auth from './Utils/utilAuth.js'
import {AuthRoute, ProtectedRoute} from './Utils/utilAuthRouting.js'


import './App.css'

class App extends Component {
  constructor(props){
    super(props)
  }


componentDidMount(){
this.props.checkAuthenticationStatus()
}




  render() {
    console.log(this.props, "in the app")
    return (
      <div className="App">

        <ProtectedRoute exact path={"/home"} component={HomeContainer} />
        <ProtectedRoute exact path={"/pins/:id"} component={DisplayOnePinByIdContainer}/>
        <ProtectedRoute exact path={"/users/:id"} component={UserProfileContainer}/>
        <AuthRoute  path={"/"} component={UserAuthContainer} />

      </div>
    );
  }
}
// <Route exact path={"/login"} component={Login} />

  // <Route  exact path={"/"} component={CreateAccount}/>
// <Route exact path={"/home"} component={Home} />


export default App;
