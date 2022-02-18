import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    //defining method as class property
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        //this wil prevent the input data after submit
        event.preventDefault();
    }

    render() {
        const { username, comments, topic } = this.state
        return (
            //onClick can be used inside button tag instead of form
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}>
                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
