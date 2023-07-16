import React from "react";
import "../styles/Button.css";

export default function Button(props) {
	const { handleClick } = props;

	return (
		<button className="button" onClick={handleClick}>
			solve
		</button>
	);
}
