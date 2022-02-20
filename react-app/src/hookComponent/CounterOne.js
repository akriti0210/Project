import React, { useReducer } from 'react'

const inintialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return inintialState
        default:
            return state
    }
}

function CounterOne() {
    //count- current
    //pair with dispatch method
    //dispatch method lets execute
    //the code corresponding to perticular action
    const [count, dispatch] = useReducer(reducer, inintialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne