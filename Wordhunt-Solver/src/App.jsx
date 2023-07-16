import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

import InputGrid from "./components/InputGrid";

function App() {
	return (
		<div>
			<NavBar />
			<InputGrid />
			<Button />
		</div>
	);
}

export default App;
