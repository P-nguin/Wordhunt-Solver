import React from "react";

import "../styles/WordsTable.css";

function WordsTable(props) {
	const wordList = [];
	props.wordsList.map((word) => {
		wordList.push(<li>{word}</li>);
	});

	return <ul className="wordsTable">{wordList}</ul>;
}

export default WordsTable;
