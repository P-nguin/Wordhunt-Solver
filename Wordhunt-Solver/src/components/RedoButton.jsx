import React from "react";
import redo from "../assets/redo.png";
import "../styles/redoButton.css";

export default function redoButton(props){
    return(
        <img src={redo} className="button-redo" onClick={props.handleClick}/>
    )
}