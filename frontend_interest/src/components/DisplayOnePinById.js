import React, {Component} from 'react';


class DisplayOnePinById extends Component{



componentDidMount(){
  this.props.fetchOnePin(this.props.match.params.id)
}

  render(){
    // console.log(this.props.match.params.id, "the id")
    // console.log(this.props, "the pin id");
    if(!this.props.pin) return null
    return(
      <div className="displayOnePinPage">

        hello world
        <img src={this.props.pin.imgurl} alt="" />
      </div>
    )
  }

}


export default DisplayOnePinById
