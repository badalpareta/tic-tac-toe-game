import React from "react";
import "./App2.css";

function Square(props){
return(
    <button className="square" onClick={()=>
      props.onClick()}>
      {props.value}
    </button>
    );
}

class Board extends React.Component{
  constructor(props)
{
  super(props);
  this.state={squares:Array(9).fill(null),turnX:true,};
}
handleClick(i)
{
  const newSq=this.state.squares.slice();
  if(declareWinner(newSq)||newSq[i]!=null)
  return;
  (this.state.turnX?newSq[i]="X":newSq[i]="O");
  this.setState({squares:newSq,turnX:!this.state.turnX});
}
  
  renderSquare(i){
    
    return <Square 
    value={this.state.squares[i]}
    onClick={()=>this.handleClick(i)}
    />;
  }
  render()
  {
    let winner=declareWinner(this.state.squares);
let status;
if(winner)
{
status="Winner:"+winner;
}else
{
  status="Next Player: "+(this.state.turnX?"X":"O");
}
      return(
        <><div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
              {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div></>);
  }
}
function declareWinner(squares){
  let lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(let i=0;i<lines.length;i++)
{
  let[a,b,c]=lines[i];
if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c])
{
  return squares[a];
}
}

}

function Game (props){
  
  
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>

    )

}

export default Game;