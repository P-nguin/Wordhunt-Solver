import React, { useEffect } from "react";
import "../styles/CalculateButton.css";
import WordBank from "../assets/WordBank.json";

function CalculateButton(props) {
	let wordList = new Map<String, Boolean>();
	const { input } = props;
	useEffect(() => {
		wordList = createLookUpMap(WordBank[0].data);
		console.log(wordList);
	}, []);

	function createLookUpMap(arr: string[]) {
		return new Map(arr.map((item) => [item, true]));
	}
	function handleClick(str: string[]) {
		console.log(str);
		let grid: string[][] = [];
		for (let i = 0, cnt = 0; i < 4; i++) {
			let temp: string[] = [];
			for (let j = 0; j < 4; j++, cnt++) {
				temp.push(str[cnt]);
			}
			grid.push(temp);
		}

		var dir = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
			[1, 1],
			[-1, -1],
			[1, -1],
			[-1, 1],
		];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let vis: boolean[][] = [];
				for (let k = 0; k < 4; k++) vis.push([false, false, false, false]);
			}
		}
	}

	function solve(r: number) {}

	return (
		<button className="button" onClick={() => handleClick(input)}>
			solve
		</button>
	);
}

export default CalculateButton;
