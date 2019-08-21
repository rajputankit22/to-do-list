import React, { Component } from "react";

export default class AddTodo extends Component {
	render() {
		return (
			<div>
				<input type="text" name="title" placeholder="Add Todo" />
			</div>
		);
	}
}
