import React from "react"

import styled from "styled-components"

const Container = styled.div`
input {
	margin-top: 20px;
	display: block;
}
button {
	margin-top: 20px;
}
`


class Form extends React.Component {
	render() {
		return (
			<Container>
			<form onSubmit={this.props.handleSubmit}>
				<input type="text" name="title" placeholder="task-title" />
				<input type="text" name="desc" placeholder="task-description" />
				<button type="submit">追加</button>
			</form>
			</Container>

// formがsubmitされたらAppのstateを書き換えたいが、formcompornent内ではAppのstateは参照できない。
		)
	}
}

export default Form


