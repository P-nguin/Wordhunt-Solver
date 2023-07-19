import React, { useEffect, useRef, useState } from "react";

import InputBox from "./InputBox";
import CalculateButton from "./CalculateButton";
import WordsTable from "./WordsTable";

import "../styles/InputGrid.css";

function InputGrid() {
	const [gridInput, setGridInput] = useState(() => {
		const temp = [];
		for (let i = 0; i < 16; i++) {
			temp.push("");
		}
		return temp;
	});
	const [table, setTable] = useState(false);

	const gridItemsRefs = [];
	const gridItems = [];
	for (let i = 0; i < 16; i++) {
		gridItemsRefs.push(useRef());
		gridItems.push(
			<InputBox
				key={i}
				value={gridInput[i]}
				name={"InputBox " + i}
				handleChange={(event) => {
					let name = event.target.name;
					let idx = parseInt(name.split(" ")[1]);
					setGridInput((prev) => {
						let temp = [...prev];
						temp[idx] = event.target.value
							.charAt(event.target.value.length - 1)
							.toUpperCase();
						return temp;
					});

					if (name !== "InputBox 15") {
						gridItemsRefs[i + 1].current.focus();
					}
				}}
				innerRef={gridItemsRefs[i]}
			/>
		);
	}

	return (
		<>
			<div className="grid-table-container">
				<div className="input-container">{gridItems}</div>
				{table && <WordsTable />}
			</div>
			<CalculateButton input={gridInput} setTable={setTable} />
		</>
	);
}

export default InputGrid;
