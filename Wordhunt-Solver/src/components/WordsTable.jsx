import React from "react";

import "../styles/WordsTable.css";

function WordsTable(props) {
	let foundList = [];
	for (let i = 0; i < props.foundWords.length; i++) {
		foundList.push({
			word: props.foundWords[i],
			path: props.foundPaths[i],
		});
	}

	foundList.sort((a, b) => {
		return b.word.length - a.word.length;
	});

	return <ul className="wordsTable">{wordList}</ul>;
	let table = [];
	foundList.map((i) => {
		table.push(<li key={i.word}>{i.word}</li>);
	});

	return <ul>{table}</ul>;
}

export default WordsTable;
