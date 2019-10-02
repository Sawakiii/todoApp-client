import React from "react"

import styled from "styled-components"

const Li = styled.li`
border-top: solid 3px gray;
margin-top: 20px;
`

export default class TodoItem extends React.Component {
	render() {
		const buttonText = this.props.isDone?"戻す":"完了" //True:False
		// this.props.keyで数値が出せる

		const id = this.props.id

		const handleClick = this.props.handleClick //thisをTodoItemのコンポーネントにするためここで定義。
		
		function handleId() {
			return handleClick(id)
		}

		return (
					<Li>
						<p>タイトル: {this.props.title}</p>
						<p>詳細: {this.props.desc}</p>
						{/* <button onClick={handleId}>{buttonText}</button> */}
						<button onClick={()=>handleClick(this.props.id)}>{buttonText}</button>
					</Li>
		)
	}
}
