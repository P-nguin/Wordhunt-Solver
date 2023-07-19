import React from "react";

import "../styles/InputBox.css";

function InputBox(props) {
	const { value, name, handleChange, innerRef } = props;
	return (
		<input
			type="text"
			name={name}
			className="input-box"
			value={value}
			onChange={handleChange}
			ref={innerRef}
		/>
	);
}

export default InputBox;
