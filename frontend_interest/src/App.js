import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer.js'
import UserAuthContainer from './components/UserAuthContainer.js'
import DisplayOnePinById from './components/DisplayOnePinById.js'
// import Auth from './Utils/utilAuth.js'
import {AuthRoute, ProtectedRoute} from './Utils/utilAuthRouting.js'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }


componentDidMount(){
this.props.checkAuthenticationStatus()
}
//   checkAuthenticateStatus = () => {
//   axios.get("/users/isLoggedIn").then(user => {
//     if (user.data.email === Auth.getToken()) {
//
//       // this.setState({
//       //   isLoggedIn: Auth.isUserAuthenticated(),
//       //   username: Auth.getToken()
//       // });
//     } else {
//       if (user.data.username) {
//         this.logoutUser();
//       } else {
//         Auth.deauthenticateUser();
//       }
//     }
//   });
// };

// checkAuthenticateStatus{
//
// }



  render() {
    console.log(this.props, "in the app")
    return (
      <div className="App">

        <AuthRoute exact path={"/"} component={UserAuthContainer} />
        <ProtectedRoute exact path={"/home"} component={HomeContainer} />
        <ProtectedRoute exact path={"/pins/:id"} component={DisplayOnePinById}/>

      </div>
    );
  }
}
// <Route exact path={"/login"} component={Login} />

  // <Route  exact path={"/"} component={CreateAccount}/>
// <Route exact path={"/home"} component={Home} />


export default App;
