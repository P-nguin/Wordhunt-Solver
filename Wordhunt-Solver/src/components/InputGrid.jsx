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
				id={i}
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
					console.log(gridItems[i]);
				}}
				innerRef={gridItemsRefs[i]}
			/>
		);
	}
	/*
    inputLists.forEach(input => {
        input.addEventListener("keyup", ()=>{
        if(input.value.length === input.maxLength && parseInt(input.id) < inputLists.length) {
                  document.getElementById(parseInt(input.id)+1).focus();
        }
      })
	useEffect(() => {
		gridItems.map((item) => {
			item.addEventListener("keyup", () => {
				console.log(document.getElementById(parseInt(item.id) + 1));
				document.getElementById(parseInt(item.id) + 1).focus();
			});
		});
	}, []);
    */

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
