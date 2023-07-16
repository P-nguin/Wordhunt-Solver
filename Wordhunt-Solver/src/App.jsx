import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar"
import Button from "./components/Button"
import Footer from "./components/Footer"
import InputGrid from "./components/InputGrid";

function App() {
	return (
		
		<div>
			<NavBar/>
			<InputGrid/>
			<Button/>
			<Footer/>
		</div>
	);
}

export default App;
