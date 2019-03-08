import React, {Component} from 'react'


class DisplayBoardItems extends Component{
  constructor(){
    super()
}

componentDidMount(){
  let boardId = this.props.board.id
  this.props.fetchAllPinsForSingleUser(boardId)
  this.props.fetchAllBoardsforOneUser(boardId)
  this.props.getPinsByBoardId(boardId)
}

// displayBoardItem = () => {
// if(!this.props.board.pins) return null
//     let pinArr = this.props.boards.pins;
//     let newArr = [];
//     if(pinArr > 6){
//       newArr = pinArr.slice(0, 6);
//     }else{
//       newArr = pinArr;
//     }
//     let imgs = newArr.map(pinId => {
//     debugger
//       return <img className="board-item-img" src={this.props.pins[pinId].imgUrl} alt=""/>
//     })
//     return <div className="board-item-imgs">{imgs} hello world</div>
//
// }


    render(){
      // if(!Object.values(this.props.pins).length) return null
      // let { board } = this.props;
      // if(Object.values(this.props.pins).length < 50) return null
      console.log(this.props.boards, "ITS IN HEREeeeeeeeeeeñn")
      return(
        <div className="DisplayBoardItemsPage">
        </div>
      )
    }
  }
  // {this.displayBoardItem()}


export default DisplayBoardItems

// displayBoardItem = () => {
//     // debugger;
//     let { board } = this.props;
//     // debugger;
//     if(!board.pins) return null
//     let imgArr = board.pins;
//     let newArr = [];
//     if(imgArr.length > 6){
//       newArr = imgArr.slice(0, 6);
//     } else {
//       newArr = imgArr;
//     }
//
//     let imgs = newArr.map(pinId => {
//       // debugger;
//       return <img className="board-item-img" src={this.props.pins[pinId].pinimg_url} alt=""/>
//     })
//     return <div className="board-item-imgs">{imgs}</div>
//   }
