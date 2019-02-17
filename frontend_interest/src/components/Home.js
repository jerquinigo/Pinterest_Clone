import React, {Component} from 'react';
import NavBar from './NavBar.js'
// import axios from 'axios'


class Home extends Component{
  // constructor(){
  //   super()
  // }


  componentDidMount() {
// axios.get('/api/pins')
// .then(response => {
//   debugger
// })
// this.props.fetchAllPins()
   }



  render(){
    console.log(this.props, "redux")
    return(
      <div className="homepage">
        <NavBar/ >
      this is the home page
      </div>
    )
  }
}


export default Home;
