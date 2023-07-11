import React from "react";

import "../styles/InputBox.css";

function InputBox(props) {
	const { value, name, onChange } = props;
	return <input type="text" className="input-box" value={value} />;
}

export default InputBox;
