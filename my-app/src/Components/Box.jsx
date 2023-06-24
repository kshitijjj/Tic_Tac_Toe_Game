import React from 'react';

function  Box(props){
    return (
        <div className="inner_box">
            <div id={props.id} className="box_comp" style={props.style} onClick={props.onClick}>
            {props.text}
            </div>
        </div>
       
    );
}

export default Box;
