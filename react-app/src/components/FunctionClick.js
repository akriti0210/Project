import React from "react";

function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked")
    }
    return (
        <div>
            {/* passing function as an event handler */}
            <button onClick={clickHandler}>Click</button>
            {/* function call not an event handler
            <button onClick={clickHandler()}>Click</button> */}
        </div>
    )
}

export default FunctionClick