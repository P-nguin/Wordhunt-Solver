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

function groupWords(wordList){
	let sortedList = [];
	let tempList =[];

	wordList.forEach(element => {
		if(tempList.length === 0) tempList.push(element);
		else if(tempList[tempList.length-1].length === element.length) tempList.push(element);
		else{
			sortedList.push(tempList);
			tempList=[];
			tempList.push(element);
		}
	});
	if(tempList.length > 0) sortedList.push(tempList);
	return sortedList;
}

const tableList = [...groupWords(props.foundWords)];

	return (
		<div className="wordsTable">
			{tableList}
			
		</div>
		
		);
}

export default WordsTable;
