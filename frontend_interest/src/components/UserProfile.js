import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "./NavBarContainer.js";
// import DisplayUsersBoards from "./DisplayUsersBoards.js"
import addButton from "../frontendResources/addIcon.jpg";
import DisplayUsersBoardsContainer from "./DisplayUsersBoardsContainer.js";
import "../css/UserProfile.css";
import "../css/UserProfilePinFormStyle.css";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      addFeature: false,
      createBoard: false,
      createPin: false,
      boardTitle: "",
      pinTitle: "",
      pinDescription: "",
      pinCategory: "",
      pinurl: "",
      user_board_id: "",
      addedPin: false,
      addedBoard: false,
      backgroundBlack: false,
      pinBackgroundBlack: false,
      pinMessage: "added a photo to website"
    };
    this.onSubmitPinForm = this.onSubmitPinForm.bind(this);
  }

  componentDidMount() {
    this.props.getSingleUserProfile(parseInt(this.props.match.params.id));
    this.props.fetchAllBoardsforOneUser(parseInt(this.props.match.params.id));
    // .then(res => {
    //   this.setState({"user_board_id": res.allBoards[0].id})
    //
    // })
  }

  displayEmailAsUserName = () => {
    let username = window.localStorage.token.substring(
      0,
      window.localStorage.token.lastIndexOf("@")
    );
    return <p className="titleUserName">{username}</p>;
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onCrossImageClick = () => {
    this.setState({
      addFeature: !this.state.addFeature
    });
  };

  createBoardOnClick = event => {
    event.preventDefault();
    this.setState({
      createBoard: !this.state.createBoard
    });
  };

  createPinOnClick = event => {
    event.preventDefault();
    this.setState({
      createPin: !this.state.createPin
    });
  };

  submitCreateBoardForm = event => {
    event.preventDefault();
    let boardData = {
      user_id: this.props.match.params.id,
      title: this.state.boardTitle
    };

    this.setState({
      addedBoard: true,
      boardTitle: ""
    });
    return this.props.createBoard(boardData);
  };

  toggleBlackBackground = () => {
    this.setState({
      backgroundBlack: !this.state.backgroundBlack
    });
  };

  togglePinBlackBackground = () => {
    this.setState({
      pinBackgroundBlack: !this.state.pinBackgroundBlack
    });
  };

  handleBackgroundCreateBoardOnclick = event => {
    this.toggleBlackBackground();
    this.createBoardOnClick(event);
  };

  handlePinBackgroundCreateBoardOnclick = event => {
    this.togglePinBlackBackground();
    this.createPinOnClick(event);
  };

  dragAndDropFile = event => {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      this.setState({
        pinurl: fileReader.result
      });
    });

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  displayCreateBoardAndPin = () => {
    if (this.state.addFeature) {
      return (
        <div className="selectBoardOrPinContainer">
          <div className="selectBoardOrPin">
            <ul>
              <div className="ListOneItem">
                <li
                  name="backgroundBlack"
                  onClick={this.handleBackgroundCreateBoardOnclick}
                  onChange={this.toggleBlackBackground}
                >
                  create board
                </li>
              </div>
              <div className="ListTwoItem">
                <li onClick={this.handlePinBackgroundCreateBoardOnclick}>
                  create pin
                </li>
              </div>
            </ul>
          </div>
        </div>
      );
    }
  };

  displayOptionBoardSelectForm = () => {
    let userBoards = Object.values(this.props.allBoards);
    console.log(userBoards, "in the function");
    return userBoards.map(boards => {
      return (
        <option key={boards.id} value={boards.id}>
          {boards.title}
        </option>
      );
    });
  };

  displayCreateBoardForm = () => {
    if (this.state.addFeature && this.state.createBoard) {
      return (
        <div className="createBoardFormContainer">
          <div className="createBoardTitle">
            <h2>Create Board</h2>
          </div>
          <form>
            <div className="titleInput">
              <label>Title</label>
              <input
                className="boardTitleInput"
                onChange={this.handleChange}
                type="text"
                value={this.state.boardTitle}
                name="boardTitle"
                placeholder="Title for board"
              />
            </div>
            <br />
            <div className="createBoardButton">
              <div className="innerBoardButtonDiv">
                <button onClick={this.submitCreateBoardForm} type="submit">
                  Create
                </button>
                <button type="submit">Cancel</button>
              </div>
            </div>
          </form>
          {this.state.addedBoard ? <h3>added a new board</h3> : null}
        </div>
      );
    }
  };

  onSubmitPinForm = event => {
    event.preventDefault();
    let pinData = {
      title: this.state.pinTitle,
      description: this.state.pinDescription,
      category: this.state.pinCategory,
      imgUrl: this.state.pinurl,
      user_board_id: parseInt(this.state.user_board_id),
      user_id: this.props.match.params.id
    };

    this.setState({
      addedPin: true,
      pinTitle: "",
      pinDescription: "",
      pinCategory: "",
      pinurl: "",
      user_board_id: null
    });

    return this.props.createSinglePin(pinData);
  };

  //posting a form for a user
  displayCreatePinForm = () => {
    if (this.state.addFeature && this.state.createPin) {
      return (
        <div className="pinFormContainer">
          <div className="mainPinFormDiv">
            <div className="SubmitAndCancelDiv">
              <br />
              {this.state.addedPin ? <h3>added a photo to website</h3> : null}
              <button class="formButton" type="submit">
                Cancel
              </button>
              <button
                class="formButton"
                onClick={this.onSubmitPinForm}
                type="submit"
              >
                Save
              </button>
            </div>
            <div className="FormDiv">
              <div className="theFormContainer">
                <form className="formTagToStyle">
                  <br />
                  <input
                    className="inputTitle"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.pinTitle}
                    name="pinTitle"
                    placeholder="Add A Title"
                  />
                  <br />
                  <input
                    className="inputDescription"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.pinDescription}
                    name="pinDescription"
                    placeholder="Add Description"
                  />
                  <br />
                  <input
                    className="inputCategory"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.pinCategory}
                    name="pinCategory"
                    placeholder="Add Category"
                  />
                  <br />
                  <input
                    className="inputUrl"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.pinurl}
                    name="pinurl"
                    placeholder="add image url"
                  />
                  <br />
                  <select
                    className="dropDownBoardSelector"
                    onChange={this.handleChange}
                    name="user_board_id"
                  >
                    <option>Select Board</option>
                    {this.displayOptionBoardSelectForm()}
                  </select>
                  <br />
                </form>
                <div className="displayPicture">
                  <input
                    type="file"
                    className="dragAndDrop"
                    accept="image/*"
                    onChange={this.dragAndDropFile.bind(this)}
                  />
                  <img
                    className="dragAndDropImage"
                    src={this.state.pinurl}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    // console.log(this.state, "the state!!!!!!!!!!!");
    // console.log(this.props, "in props in user profile");
    // console.log(this.props.allBoards, "hunting");

    // console.log("PROFILE PROPS", this.props);
    return (
      <div className="userProfilePage">
        <NavBarContainer />

        <div
          className={
            this.state.pinBackgroundBlack
              ? "pinDisplayBlackBackground"
              : "noBlackBackground"
          }
        >
          <div
            className={
              this.state.backgroundBlack
                ? "displayBlackBackground"
                : "noBlackBackground"
            }
          >
            <br />
            <div className="editButtonsPinBoards">
              <img
                onClick={this.onCrossImageClick}
                className="addButton"
                src={addButton}
                alt=""
              />

              <i className="fas fa-pen" />
            </div>
            <div className="displayUserName">
              {this.displayEmailAsUserName()}
              {this.displayCreateBoardAndPin()}
              {this.displayCreateBoardForm()}
              {this.displayCreatePinForm()}
              <div className="userBoardContainer">
                <div className="parentUserBoard" />
              </div>
            </div>
          </div>
        </div>
        <DisplayUsersBoardsContainer />
      </div>
    );
  }
}

export default withRouter(UserProfile);

// {this.state.addFeature ? (
//   <ul>
//     <li onClick={this.createBoardOnClick}>create board</li>
//     <li onClick={this.createPinOnClick}>create pin</li>
//   </ul>
// ) : null}
//
// {this.state.createBoard ? (
//   <form>
//     <input
//       onChange={this.handleChange}
//       type="text"
//       value={this.state.boardTitle}
//       name="boardTitle"
//     />
//     <button onClick={this.submitCreateBoardForm} type="submit">
//       Create
//     </button>
//     <button type="submit">Cancel</button>
//   </form>
// ) : null}
// {this.state.createPin ? <h1>hello 2</h1> : null}

//
// <input
//   onChange={this.handleChange}
//   type="text"
//   value={this.state.user_board_id}
//   name="user_board_id"
//   placeholder="user Board id"
// />
