import { useEffect, useState } from "react";

import GridBox from "./GridBox";
import "./Grid.css";

function grid() {
	const [values, setValues] = useState(Array(16).fill(""));
	const [id, setId] = useState(Array.from(Array(16), (i, j) => j));

	function handleChange(event, idx) {
		setValues((prev) => {
			let temp = [...prev];
			temp[idx] = event.target.value.charAt(0);
			return temp;
		});
	}

	console.log(values);

	const gridBox = values.map((cur, idx) => {
		return (
			<GridBox
				value={values[idx]}
				idx={idx}
				handleChange={handleChange}
				id={id[idx]}
			/>
		);
	});

	return <div className="Grid"> {gridBox} </div>;
}

export default grid;
