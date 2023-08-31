import React, { useRef, useEffect, useState } from "react";

function Canvas(props) {
	const { gridItemSize, path } = props;
	const canvasRef = useRef();

	function draw(path) {
		if (path.length === 0) return;
		const ctx = canvasRef.current.getContext("2d");
		ctx.clearRect(0, 0, gridItemSize * 4, gridItemSize * 4);
		ctx.fillStyle = "#FF0000";

		for (let i = 0; i < path.length - 1; i++) {
			ctx.beginPath();
			ctx.moveTo(
				path[i][1] * gridItemSize + gridItemSize / 2,
				path[i][0] * gridItemSize + gridItemSize / 2
			);
			ctx.lineTo(
				path[i + 1][1] * gridItemSize + gridItemSize / 2,
				path[i + 1][0] * gridItemSize + gridItemSize / 2
			);
			ctx.stroke();
		}
	}

	useEffect(() => {
		draw(path);
	}, [path]);

	return (
		<canvas
			ref={canvasRef}
			height={gridItemSize * 4}
			width={gridItemSize * 4}
		></canvas>
	);
}

export default Canvas;
