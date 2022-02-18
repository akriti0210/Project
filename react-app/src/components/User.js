import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div>
                {/* {this.props.name} */}
                {/* when passing through function that will return a string */}
                {/* {this.props.name(true)} */}

                {this.props.render(true)}
            </div>
        )
    }
}

export default User