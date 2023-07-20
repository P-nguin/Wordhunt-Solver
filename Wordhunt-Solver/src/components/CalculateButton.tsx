import React, { useEffect } from "react";
import "../styles/CalculateButton.css";
import WordBank from "../assets/WordBank.json";

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
  const input: string[] = props.input;
  let found: string[] = [];
  const setTable = props.setTable;

  function makeTrie() {
    WordBank[0].data.map((curStr) => {
      let curNode = rootNode;
      for (let i = 0; i < curStr.length; i++) {
        if (!curNode.children.has(curStr.charAt(i))) {
          curNode.children.set(curStr.charAt(i), new TrieNode());
        }
        curNode = curNode.children.get(curStr.charAt(i)) as TrieNode;
      }
      curNode.isWord = true;
    });
  }

  function handleClick(str: string[]) {
    makeTrie();
    console.log(rootNode);
    found = [];
    let grid: string[][] = [];
    for (let i = 0, cnt = 0; i < 4; i++) {
      let temp: string[] = [];
      for (let j = 0; j < 4; j++, cnt++) {
        temp.push(str[cnt]);
      }
      grid.push(temp);
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let vis: boolean[][] = [];
        for (let k = 0; k < 4; k++) vis.push([false, false, false, false]);
        vis[i][j] = true;
        solve(
          i,
          j,
          grid[i][j],
          grid,
          vis,
          rootNode.children.get(grid[i][j]) as TrieNode
        );
      }
    }
    props.setFoundWords((prev) => found);
    setTable(true);
  }

  //When solving with empty grid there error fix!
  function solve(
    r: number,
    c: number,
    curStr: string,
    grid: string[][],
    vis: boolean[][],
    curNode: TrieNode
  ) {
    for (let i = 0; i < dir.length; i++) {
      const cur = dir[i];
      const cr: number = r + cur[0],
        cc: number = c + cur[1];
      if (cr < 0 || cr >= 4 || cc < 0 || cc >= 4 || vis[cr][cc]) continue;
      if (curNode.children.has(grid[cr][cc])) {
        if ((curNode.children.get(grid[cr][cc]) as TrieNode).isWord) {
          found.push(curStr + grid[cr][cc]);
        }

        vis[cr][cc] = true;
        solve(
          cr,
          cc,
          curStr + grid[cr][cc],
          grid,
          vis,
          curNode.children.get(grid[cr][cc]) as TrieNode
        );
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
  children: Map<string, TrieNode>;
  isWord: boolean;
  constructor() {
    this.isWord = false;
    this.children = new Map<string, TrieNode>();
  }
}

export default CalculateButton;
