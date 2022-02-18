import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        //setState will let react know that the component needs to be rerendered
        //setState is async
        /*
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Callback value', this.state.count)
            }
        )
        */

        // react won't rerender the component
        // this.state.count = this.state.count + 1;

        //console.log is being called before the state is actually set
        // it will print 0 when set is incremented to 1
        //if we want to execute the code only after the state has been set then pass
        //the callback function as a second parameter to the setState method
        //synchronous console statement
        console.log(this.state.count)

        //For incrementFive
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        //If want to use props also
        // this.setState((prevState,props) => ({
        //     count: prevState.count + props.addValue
        // }))
    }

    //react makes group multiple setState calls into a single update for better performance
    //all the five setState() calls are done in one single go and
    //updated value does not carry over between the different calls
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter