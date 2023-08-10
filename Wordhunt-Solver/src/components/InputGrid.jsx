import React, { useEffect, useRef, useState } from "react";

import InputBox from "./InputBox";
import CalculateButton from "./CalculateButton";
import WordsTable from "./WordsTable";
import Redo from "./RedoButton";

import "../styles/InputGrid.css";
import "../styles/RedoButton.css";

function InputGrid() {
	const [gridInput, setGridInput] = useState(() => {
		const temp = [];
		for (let i = 0; i < 16; i++) {
			temp.push("");
		}
		return temp;
	});
	const [table, setTable] = useState(false);
	const [foundWords, setFoundWords] = useState([]);
	const [foundPaths, setFoundPaths] = useState([]);

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

					//bug: pressing delete button also moves cursor forward
					if (name !== "InputBox 15") {
						gridItemsRefs[i + 1].current.focus();
					}

					if (event.key == "Enter") {
						console.log("entered");
					}
				}}
				innerRef={gridItemsRefs[i]}
			/>
		);
	}

	console.log(foundWords);

	return (
		<>
			<div className="grid-table-container">
				<div className="input-container">{gridItems}</div>
				{table && <WordsTable wordsList={CalculateButton.found} />}
			</div>

			<div className="button-container">
				<CalculateButton
					input={gridInput}
					setTable={setTable}
					setFoundWords={setFoundWords}
					setFoundPaths={setFoundPaths}
				/>
				<Redo
					handleClick={() => {
						setGridInput((prev) => {
							let newLetters = [];
							for (let i = 0; i < prev.length; i++) {
								newLetters.push("");
							}
							return newLetters;
						});
					}}
				/>
			</div>
		</>
	);
}

export default InputGrid;
