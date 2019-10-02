import React from "react"
import TodoItem from './TodoItem'

import styled from "styled-components"

const Ul = styled.ul`
width: 500px;
margin-right: auto;
padding: 0;
li:last-child {
	border-bottom: solid 3px gray;
	padding-bottom: 20px;
}
`


export default class TodoList extends React.Component {
	render() {
		const todos = this.props.todos.map((todo, i)=>{
			return (
				<TodoItem 
				key={i}
				id={i}
				title={todo.title}
				desc={todo.desc}
				isDone={todo.isDone}
				handleClick={this.props.handleClick}
				></TodoItem>
			)
		})


		return (
			<Ul>
				{todos}
			</Ul>
		)
	}
}

