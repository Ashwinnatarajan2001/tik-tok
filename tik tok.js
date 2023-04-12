import React,{useState} from "react";
import Square from "./square";


function Board(){
    const [state,setState]=useState(Array(9).fill(null))
    const [IsXTurn,setIsTurn]=useState(true);
    const checkWinner=()=>{
        const Winner=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ];
        for(let logic of Winner){
            const [a,b,c]=logic
            if(state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
           
        }
        
    };
    const isWinner = checkWinner();
    
    const handleClick=(index)=>{
        console.log("index",index);
        const copyState=[...state];
        copyState[index]=IsXTurn?"X":"O";
        setState(copyState);
        setIsTurn(!IsXTurn);
    };

    return(
        <div className="board-container">
            {
            isWinner ?
             (
                <div className="Center">{isWinner}-won the game</div>
                ):(
                    <>
                <div className="board-row">
                <Square onClick={()=>handleClick(0)} value={state[0]}/>
                <Square onClick={()=>handleClick(1)} value={state[1]}/>
                <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
            </>
                )}
            </div>
    );
}
export default Board;