import React from "react";

export default function Header() {
	return (
		<header style={headerStyle}>
			<h1>TodoList</h1>
		</header>
	);
}

const headerStyle = {
	textAlign: "center",
	padding: "10px",
	background: "#333",
	color: "#fff"
};
