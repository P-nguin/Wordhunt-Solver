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

	console.log("hi");

	const gridItems = [];
	for (let i = 0; i < 16; i++) {
		gridItems.push(
			<InputBox 
				key={i}
				value={gridInput[i]}
				name={"InputBox " + i}
				handleChange={(event) => {
					let name = event.target.name;
					let idx = parseInt(name.split(" ")[1]);
					changeGridInput((prev) => {
						let temp = [...prev];
						temp[idx] = event.target.value
							.charAt(event.target.value.length - 1)
							.toUpperCase();
						return temp;
					});
				}}

			/>
		);
	}

	return (
		<>
			<div className="container">
				{gridItems}
			</div>
		</>
	);
}

export default InputGrid;
