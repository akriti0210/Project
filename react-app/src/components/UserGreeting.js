import React, { Component } from "react";

class UserGreeting extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        //Short circuit operator
        return this.state.isLoggedIn && <div>Welcome Akriti</div>

        /*
        Ternary conditional operator
        return (
            this.state.isLoggedIn ?
                <div>Welcome Akriti</div> :
                <div>Welcome Guest</div>
        )
        */

        /* Element variable
        let message

        if (this.state.isLoggedIn) {
            message = <div>Welcome Akriti</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>
        */

        /* if else
        if (this.state.isLoggedIn) {
            return (
                <div>Welcome Akriti</div>
            )
        }
        else {
            return (
                <div>Welcome Guest</div>
            )
        }
        */

        // return (
        //     <div>
        //         <div>Welcome Akriti</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting;