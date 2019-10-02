import React from "react"
import Form from "./form"
import TodoList from "./TodoList"
// import TodoItem from "./TodoItem"

import styled from "styled-components"

const Container = styled.div`
`

class App extends React.Component {
	constructor() {
		super() //継承元のコンストラクタが使えるよ
		this.state = {
			todos: [
				{
					// id: 1,
					title: "課題をやる",
					desc: "testtestestestestest",
					isDone: false
				},
				{
					// id: 2,
					title: "課題をやる",
					desc: "testtestestestestest",
					isDone: false
				}
			]
		}
	}
	handleSubmit(e) {

		e.preventDefault()
		// stateを書き換えるよ

		// ######### formに入力されたデータを取得
		
		// const title = this.title.value
		// このthisはインスタンスになってしまうが、フォームを指したい(form.sample)。なのでe(仮)を引数に取る
		
		const title = e.target.title.value
		// targetはイベントの発生源のエレメントが取れる。この場合<form>
		const desc = e.target.desc.value
		
		fetch('http://localhost:3001/todos', {
			method: 'POST',
			body: JSON.stringify({
				title: title,
				desc: desc,
				// isDone: false // サーバで自動処理にしたいできれば。
			})
		}).then(()=>{
			// 全部更新する。
			this.fetchResponse()
			//更新後にform空にするやつ入れるべき。
			
		})
		// #########3 stateのtodosにそのデータを追加
		// this.state.todos.push({
		// 	id: 3,
		// 	title: title,
		// 	desc: desc,
		// 	isDone: false
		// })
		// これはできないよ。stateは直接変更はやめた方がいい。

	// 	const newTodos = this.state.todos.slice()
	// 	// todosをコピーする

	// 	newTodos.push({
	// 		// id: newTodos.length,
	// 		title: title,
	// 		desc: desc,
	// 		isDone: false
	// 	})



	// 	// これはすべてを再renderingする。
	// 	this.setState({

	// 		// 変更するstateの内容を記述
	// 		todos: newTodos
	// 	})
	}

	handleClick(key) {
		// 押されたボタンのtodoのisDoneを変更=>this.state.todos[i].isDone = trueだが、iだけ求めたい。
		// 押されたボタンはe.targetで求められる
		// 押されたボタンと一緒にいるやつのkeyはどう求めるのか。
		const newTodos = this.state.todos.slice()
		if (newTodos[key].isDone === false) {
			newTodos[key].isDone = true
		} else {
			newTodos[key].isDone = false
		}

		///////////////////////// 上記のif elseはnewTodos[key].isDone = !newTodos[key].isDone toggle

		// その結果をsetStateする
		this.setState({
			todos: newTodos
		})
	}
	fetchResponse() {
		// 非同期処理
		fetch('http://localhost:3001/api/todos')
		// jsonだけ取り出す。あと=>だけでリターンになる。
		.then(res=>res.json())
		// 取り出したらset。ここでresには前のthenのリターンが来る。
		.then(res=>{
			this.setState({
				todo: res
			})
		})
	}
	render() {
		return (
			<Container>
				<Form handleSubmit={this.handleSubmit.bind(this)}
					
					
					></Form>
				<TodoList todos={this.state.todos}
						handleClick={this.handleClick.bind(this)}
				></TodoList>
			</Container> //疑似的に囲うやつ
		)
	}
}

export default App

