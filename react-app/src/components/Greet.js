import React from "react";

// function Greet() {
//     return <h1>Hello Akriti</h1>
// }

//ES6 arrow function
//Without destructuring
/*
const Greet = (props) => {
    console.log(props)
    //props are immutable
    // props.children = 'Akriti' //error
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}
*/
//Destructuring in parameter
// const Greet = ({ name, heroName }) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

//Destructuring in function body
const Greet = (props) => {
    const { name, heroName } = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

//export const Greet = () => <h1>Hello Akriti</h1>
//prepend the function with export and not using default export won't allow to use any name, import it as a function: import {Greet} from '...'

//exporting as default will allow us to import the component into another component with any name
export default Greet;