import React, { Component, useContext } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

/* for context
class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext
export default ComponentE

*/


//for useContext hook
import { ChannelContext } from '../App'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE