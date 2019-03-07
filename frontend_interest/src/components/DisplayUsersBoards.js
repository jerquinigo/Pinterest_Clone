import React, {Component} from 'react';
import '../css/DisplayUsersBoards.css'


class DisplayUsersBoards extends Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    let id = this.props.match.params.id

    this.props.fetchAllBoardsforOneUser(id)
    this.props.fetchAllPinsForSingleUser(id)
  }

displayUsersBoards = () => {
    let boards = Object.values(this.props.boards)
    let picArr = []
    console.log(boards, "IN THE BOARDS")
    if(boards.length === 0) return null
      return boards.map(boards => {
        console.log(picArr, "the picture arr in the function")
        return(

          <div className="displayUsersMainDiv">
              {picArr.push(boards.imgurl)}
            <div className="innerDiv">
          {boards.title}<br />

        <img className="thumbnail" src={boards.imgurl} alt=""/>
        </div>
          </div>
        )
      })

  }



  render(){
    console.log(this.props.allBoards, "THIS IS ALL THE BOARDS PROPS")
    console.log(this.props.pins, "the PINS FOR THE BOARDS IN THE USER PROF")

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
