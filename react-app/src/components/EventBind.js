import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // Method 4
        this.clickHandler = this.clickHandler.bind(this)
    }
    /*
    Method 1
    Arror function in callback
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    */

    /*
    Method 2
    Public class field syntax or use arrow function as a class property
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this.state.message)
    }
    */

    //Method 3
    //Bind event handler with render() using bind()
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/* this=undefined -> Error, event handler not binded to component instance
                <button onClick={this.clickHandler}>Click</button> */}

                {/* Method 1 */}
                {/* Arror function in callback
                <button onClick={(e) => this.clickHandler(e)}>Click</button> */}

                {/* Method 2 best*/}
                {/* Public class field syntax or use arrow function as a class property
                <button onClick={this.clickHandler}>Click</button> */}

                {/* Method 3 */}
                {/* Bind event handler with render() using bind()
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Method 4 best */}
                {/* Binding in the class constructor */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind