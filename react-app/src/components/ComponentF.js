import React, { Component } from 'react'
import UserContext, { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (

            //passing the function as a child to the consumer component
            //component F consumes the username and simply render it as a part of JSX
            <UserConsumer>
                {
                    //accepting context value as a parameter and
                    //it can be used within the function body to
                    //return a react element
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF

//Consuming multiple contexts

// function Context() {
//     return (
//         <ThemeContext.Consumer>
//             {(theme) => {
//                 <UserContext.Consumer>
//                     {(user) => {
                            // passing props to a component
//                         <ProfilePage user={user} theme={theme}/>
//                     }}
//                 </UserContext.Consumer>
//             }}
//         </ThemeContext.Consumer>
//     )
// }