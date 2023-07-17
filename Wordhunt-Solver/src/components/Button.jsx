import React from "react";
import "../styles/Button.css";
import redo from "../assets/redo.png";

export default function Button(props) {
	const { handleClick } = props;

	return (
		<div>
			<button className="button" onClick={handleClick}>
			Solve
		</button>

		<img src = {redo} className="redo"/>
		</div>
		

	);
}
