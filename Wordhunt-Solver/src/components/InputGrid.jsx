import React, { useState } from "react";

import InputBox from "./InputBox";

import "../styles/InputGrid.css";

function InputGrid() {
	const [gridInput, changeGridInput] = useState(() => {
		const temp = [];
		for (let i = 0; i < 16; i++) {
			temp.push("");
		}
		return temp;
	});

	console.log(gridInput);

	function onChange(name) {
		let idx = name.split(" ");
	}

	const gridItems = [];
	for (let i = 0; i < 16; i++) {
		gridItems.push(
			<InputBox key={i} value={gridInput[i]} name={"InputBox " + i} />
		);
	}

	return (
		<div className="container">
			{gridItems}
			<div></div>
		</div>
	);
}

export default InputGrid;
