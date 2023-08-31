import React from "react";

import "../styles/WordsTable.css";

function WordsTable(props) {
	let wordList = [];
	for (let i = 0; i < props.foundWords.length; i++) {
		wordList.push({
			word: props.foundWords[i],
			path: props.foundPaths[i],
		});
	}

	wordList.sort((a, b) => {
		return b.word.length - a.word.length;
	});

	function groupWords(words) {
		let sortedList = [];
		let tempList = [];

		words.map((element) => {
			if (tempList.length === 0) tempList.push(element);
			else if (
				tempList[tempList.length - 1].word.length === element.word.length
			) {
				tempList.push(element);
			} else {
				sortedList.push(tempList);
				tempList = [];
				tempList.push(element);
			}
		});
		if (tempList.length > 0) sortedList.push(tempList);
		return sortedList;
	}

	const tableList = [...groupWords(wordList)].map((group) => {
		return group.map((element, idx) => {
			return (
				<li
					onMouseEnter={() => {
						props.setCanvasToggle(true);
						props.setCanvasDrawWord(element.word);
					}}
					onMouseLeave={() => {
						props.setCanvasToggle(false);
						props.setCanvasDrawWord(0);
					}}
				>
					{element.word}
				</li>
			);
		});
	});

	return <div className="wordsTable"> {tableList} </div>;
}

export default WordsTable;
