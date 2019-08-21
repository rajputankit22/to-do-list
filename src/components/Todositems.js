import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todositems extends Component {
	getStyle = () => {
		return {
			background: "#f4f4f4",
			padding: "10px",
			borderBottom: "1px #ccc dotted",
			textDecoration: this.props.todo.comleted ? "line-through" : "none"
			// display: "inline"
		};
	};

	btnStyle = () => {
		return {
			background: "red"
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>
					{title}
					<button
						// style={this.btnStyle}
						onClick={this.props.delTodo.bind(this, id)}>
						x
					</button>
				</p>
			</div>
		);
	}
}

Todositems.propTypes = {
	todo: PropTypes.object.isRequired
};

export default Todositems;
