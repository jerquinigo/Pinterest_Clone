import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import NavBarContainer from './NavBarContainer.js'

class UserProfile extends Component{
  constructor(){
    super()
}

componentDidMount(){
  this.props.getSingleUserProfile(this.props.match.params.id)
}



    render(){
      console.log(this.props,"userprof")
      return(
        <div className="userProfilePage">
          <NavBarContainer />
        user profile page

        </div>
      )
    }
  }


export default withRouter(UserProfile);
