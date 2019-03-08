import React, { Component } from "react";
import NavBarContainer from "./NavBarContainer.js";
import "../css/DisplayOnePinById.css";

class DisplayOnePinById extends Component {
  constructor(props){
    super(props)
  this.state = {
    boardId: 0,
    submitted: false
  }
  this.onSubmitDropDown = this.onSubmitDropDown.bind(this)
}
  componentDidMount() {
    this.props.fetchOnePin(this.props.match.params.id);
    this.props.fetchAllBoardsforOneUser(parseInt(this.props.match.params.id));
  }

handleChange = (event) => {
  this.setState({
   boardId: event.target.value
  })
}

  displayDropDownMenu = () => {
    let boards = Object.values(this.props.allBoards)
    return boards.map(board => {
      return(
      <option name="boardId" value={board.id} key={board.id}>{board.title}</option>
      )
    })
  }

  displayPinInfo = () => {

      return (
        <p className="pinTitleForDisplay">{this.props.pin.title}</p>
      )

  }

  onSubmitDropDown = (event) => {
    event.preventDefault()
    debugger
    let pinData = {
      title: this.props.pin.title,
      description: this.props.pin.description,
      category: this.props.pin.category,
      imgUrl: this.props.pin.imgurl,
      user_board_id: parseInt(this.state.boardId),
      user_id:this.props.user


    }

    console.log(pinData, "THE PIN DATA")
// debugger
    return this.props.createSinglePin(pinData)

  }

  render() {
    // console.log(this.props.match.params.id, "the id")
    // console.log(this.props, "the pin id");
console.log(parseInt(this.props.match.params.id), "THE USER BOARD IDDDDD")
    console.log(this.props, "the boards in the one pid id")
    if (!this.props.pin) return null;
    return (
      <div className="displayOnePinPage">
        <NavBarContainer />
        <div className="grandparentMainImageDiv">
          <div className="mainImageDiv">
            <div className="imageButtonContainer">
              <div className="imageInputButtons" >
              <select className="selectDropDown" onChange={this.handleChange}>
                <option >Select Board</option>
                {this.displayDropDownMenu()}
              </select>
              <button className="saveButton" onClick={this.onSubmitDropDown}>Save</button>
            </div>
          </div>
            <div className="imageContainer">
              <div className="imagePinDiv">
                <img
                  className="onePinImage"
                  src={this.props.pin.imgurl}
                  alt=""
                />
              </div>
              <div className="sideBarDiv">
                <p>{this.displayPinInfo()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayOnePinById;
