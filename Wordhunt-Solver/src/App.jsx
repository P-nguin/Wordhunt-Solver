import React from "react";
import { useState } from "react";

import NavBar from "./components/NavBar";
import InputGrid from "./components/InputGrid";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
	return (
		<div>
			<NavBar />
			<div className="grid--container">
			<InputGrid />
			</div>
			<Footer />
		</div>
	);
}

export default App;
