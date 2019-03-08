import React, {Component} from 'react';
import '../css/DisplayUsersBoards.css'
import { Link } from 'react-router-dom';
import DisplayBoardItemsContainer from "./DisplayBoardItemsContainer.js"



class DisplayUsersBoards extends Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    let id = this.props.match.params.id

    this.props.fetchAllBoardsforOneUser(id)
    this.props.fetchAllPins()
  }

 displayUsersBoards = () => {
   let boardList = Object.values(this.props.boards)
    return boardList.map(board => {
     return (
       <Link to={`/${window.localStorage.token}/boards/${board.id}`}>
         <DisplayBoardItemsContainer board={board}/>
       </Link>
     )
    })
   }


  // displayBoardItem = () => {
  //   // debugger;
  //   let { board } = this.props;
  //   // debugger;
  //   if(!board.pins) return null
  //   let imgArr = board.pins;
  //   let newArr = [];
  //   if(imgArr.length > 6){
  //     newArr = imgArr.slice(0, 6);
  //   } else {
  //     newArr = imgArr;
  //   }
  //
  //   let imgs = newArr.map(pinId => {
  //     // debugger;
  //     return <img className="board-item-img" src={this.props.pins[pinId].pinimg_url} alt=""/>
  //   })
  //   return <div className="board-item-imgs">{imgs}</div>
  // }


  render(){

    // console.log(this.props.allBoards, "THIS IS ALL THE BOARDS PROPS")
    console.log(this.props.boards, "the BOARDS FOR THE BOARDS IN THE USER PROF")
    console.log(this.props.pins,"the PINS FOR THE BOARDS IN THE USER PROF")

    return(
      <div className="displayUsersBoardsPage">
      <div className="displayUsersContainer">
        {this.displayUsersBoards()}
      </div>

      </div>
    )
  }
}


export default DisplayUsersBoards;
