import React, {Component} from 'react';


class DisplayOnePinById extends Component{



componentDidMount(){
  this.props.fetchOnePin(this.props.match.params.id)
}

  render(){
    console.log(this.props, "the pin id");
    return(
      <div className="displayOnePinPage">

        hello world
        <img src={this.props.pins} alt="" />
      </div>
    )
  }
}


export default DisplayOnePinById
