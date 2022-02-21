import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            // this.setState({
            //     timer: this.state.timer + 1
            // })

            // or
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }

    // componentWillUnmount() {
    //     clearInterval(this.interval)
    // }

    render() {
        return (
            <h1>
                Class Timer {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </h1>
        )
    }
}

export default ClassTimer