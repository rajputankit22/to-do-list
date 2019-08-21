import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

export default class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: "That is my first task",
				comleted: false
			},
			{
				id: 2,
				title: "That is my socond task",
				comleted: false
			},
			{
				id: 3,
				title: "That is my third task",
				comleted: true
			}
		]
	};

	// For Toggle Todo
	markComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.comleted = !todo.comleted;
				}
				return todo;
			})
		});
	};

	// For Delete Todo
	delTodo = id => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Todos
					todos={this.state.todos}
					markComplete={this.markComplete}
					delTodo={this.delTodo}
				/>
				<AddTodo />
			</div>
		);
	}
}
