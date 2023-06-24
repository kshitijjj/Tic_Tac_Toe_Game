import React from 'react';

function  Box(props){
    return (
        <div id={props.id} className="box_comp" style={props.style} onClick={props.onClick}>
            {props.text}
        </div>
    );
}

export default Box;
