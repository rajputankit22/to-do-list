import React, { Component } from "react";
import Todositems from "./Todositems";
import PropTypes from "prop-types";

export class Todos extends Component {
	render() {
		return this.props.todos.map(todo => (
			<Todositems
				key={todo.id}
				todo={todo}
				markComplete={this.props.markComplete}
				delTodo={this.props.delTodo}
			/>
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired
};

export default Todos;
