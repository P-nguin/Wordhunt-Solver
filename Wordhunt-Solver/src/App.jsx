import React from "react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import InputGrid from "./components/InputGrid";

import "./styles/App.css";

function App() {
	return (
		<div>
			<NavBar />
			<div className="grid--container">
				<InputGrid />
			</div>
		</div>
	);
}

export default App;
