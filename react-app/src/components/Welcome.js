import React, { Component } from "react";

class Welcome extends Component {
    render() {
        //Without destructuring
        /*
        return (
            <h1>Welcome {this.props.name} a.k.a {this.props.name}</h1>
        )
        */
        //With destructuring
        const { name, heroName } = this.props
        //const { state1, state2 } = this.state
        return (
            <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
}

export default Welcome;