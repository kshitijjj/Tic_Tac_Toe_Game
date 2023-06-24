import React from 'react';
import Box from './Box';
import { useState } from 'react';




function Home(){

    const style={
        display:"grid",
        justifyContent: "center",
        height: "10vh",
        margin: "0.2em",
        padding:"0.5em",
        boxShadow: "0px 2px 16px -8px grey"
    };

    const [mystyle,setmystyle]=useState(style);
    const [value,setValue]=useState(Array(9).fill(null));
    const[input,setInput]=useState(true);
    const[ans,setans]=useState('');

    function winner(){
        const winnerArray=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let i of winnerArray){
            const [a,b,c]=i;
            if(value[a]!==null && value[a]===value[b] && value[a]===value[c]){
                return value[a];
            };
        };
        return false;
    };


    function handleClick(e){
        const copy_Value=[...value];
        if(input==true){
            copy_Value[e]='X';
        }else{
            copy_Value[e]='O';
        }
        setValue(copy_Value);
        setInput(!input);

        setmystyle({
        display:"grid",
        justifyContent: "center",
        height: "10vh",
        margin: "0.2em",
        padding:"0.5em",
        boxShadow: "0px 2px 16px -8px black",
        backgroundColor:"#56FBDB",
        transition:"0.9s ease-in",
        color:"white",
        textShadow:"2px 2px 2px black"
        })
    };

    const str="Yeaahhh !!! "+winner()+" won the game ";

  

    return (
        <div className="home_main">
            <div className="home_heading">
                <h1 id='home_title'>Tic-Tac-Toe Game</h1>
            </div>
        <div className="game_box">
            {winner() ?(<><p id='win'>{str}</p>
            <p id='refresh'>Refresh to start a new game</p>
             </>):
            (
            <>
            <div className="game_sub_boxes">
                <Box style={mystyle}  id='inbox' onClick={()=>handleClick(0)}text={value[0]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(1)} text={value[1]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(2)} text={value[2]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(3)} text={value[3]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(4)} text={value[4]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(5)} text={value[5]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(6)} text={value[6]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(7)} text={value[7]}/>
                <Box style={mystyle} id='inbox' onClick={()=>handleClick(8)} text={value[8]}/>
            </div>
         </>)}
        </div>
        
        </div>
    );
}

export default Home;
