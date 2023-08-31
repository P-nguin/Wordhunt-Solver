import React, { useEffect } from "react";
import "../styles/CalculateButton.css";
import WordBank from "../assets/WordBank.json";

let foundWords = [];
let foundPaths = [];

function CalculateButton(props) {
	var rootNode = new TrieNode();
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
	const input = props.input;
	const setTable = props.setTable;
	const setFoundPaths = props.setFoundPaths;
	const setFoundWords = props.setFoundWords;

	function makeTrie() {
		WordBank[0].data.map((curStr) => {
			let curNode = rootNode;
			for (let i = 0; i < curStr.length; i++) {
				if (!curNode.children.has(curStr.charAt(i))) {
					curNode.children.set(curStr.charAt(i), new TrieNode());
				}
				curNode = curNode.children.get(curStr.charAt(i));
			}
			curNode.isWord = true;
		});
	}

	function handleClick(str) {
		makeTrie();
		let found = [];
		let grid = [];
		for (let i = 0, cnt = 0; i < 4; i++) {
			let temp = [];
			for (let j = 0; j < 4; j++, cnt++) {
				temp.push(str[cnt]);
			}
			grid.push(temp);
		}

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let vis = [];
				for (let k = 0; k < 4; k++) vis.push([false, false, false, false]);
				vis[i][j] = true;
				solve(i, j, grid[i][j], grid, vis, rootNode.children.get(grid[i][j]), [
					[i, j],
				]);
			}
		}

		setFoundPaths(foundPaths);
		setFoundWords(foundWords);
		setTable(true);
	}

	//When solving with empty grid there error fix!
	function solve(r, c, curStr, grid, vis, curNode, path) {
		for (let i = 0; i < dir.length; i++) {
			const cur = dir[i];
			const cr = r + cur[0],
				cc = c + cur[1];
			if (cr < 0 || cr >= 4 || cc < 0 || cc >= 4 || vis[cr][cc]) continue;
			if (curNode.children.has(grid[cr][cc])) {
				if (
					curNode.children.get(grid[cr][cc]).isWord &&
					foundWords.indexOf(curStr + grid[cr][cc]) === -1
				) {
					foundWords.push(curStr + grid[cr][cc]);
					foundPaths.push([...path, [cr, cc]]);
				}

				path.push([cr, cc]);
				vis[cr][cc] = true;
				solve(
					cr,
					cc,
					curStr + grid[cr][cc],
					grid,
					vis,
					curNode.children.get(grid[cr][cc]),
					path
				);
				path.pop();
				vis[cr][cc] = false;
			}
		}
	}

	return (
		<div className="button-container">
			<button className="button" onClick={() => handleClick(input)}>
				solve
			</button>
		</div>
	);
}

class TrieNode {
	children;
	isWord;
	constructor() {
		this.isWord = false;
		this.children = new Map();
	}
}

export default CalculateButton;
