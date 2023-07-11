import { useState } from "react";

import "./GridBox.css";

function gridBox(props) {
	return (
		<div className="GridBox">
			<input
				className="Input"
				type="text"
				value={props.value}
				key={props.idx}
				onChange={() => props.handleChange(event, props.idx)}
			/>
		</div>
	);
}

export default gridBox;
