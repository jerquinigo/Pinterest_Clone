import React, {Component} from 'react';
import '../css/DisplayUsersBoards.css'


class DisplayUsersBoards extends Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    let id = this.props.match.params.id
    this.props.fetchAllBoardsforOneUser(id)
  }

displayUsersBoards = () => {
    let boards = Object.values(this.props.boards)
    if(boards.length === 0) return null
      return boards.map(boards => {
        return(
          <div>
          {boards.title}
          </div>
        )
      })
  }



  render(){

    return(
      <div className="DisplayUsersBoardsPage">
      <p className="test">hello world boards page</p>
      {this.displayUsersBoards()}
      </div>
    )
  }
}


export default DisplayUsersBoards;
