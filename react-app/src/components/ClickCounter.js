import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render() {
        // const { count } = this.state
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>
                {/* {this.props.name} */}
                {/* props will be passed to HOC not wrapped component */}
                {this.props.name}
                Clicked {count} times</button>
        )
    }
}

export default withCounter(ClickCounter, 5)