import React, { useState, useMemo } from 'react'

function CounterMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    //Now delay in counterOne still present but not in counterTwo
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    // it will make the performance slower for counterOne
    //also for counterTwo
    //Reason: Everytime when state updates the component
    //re renders and then isEven function is called again

    //Solution: Tell react to not calculate logic unneccesarily
    // useMemo hook
    /*
    const isEven = () => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }
    */

    return (
        <div>
            <button onClick={incrementCounterOne}>Counter One - {counterOne}</button>
            {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
            {/* useMemo */}
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={incrementCounterTwo}>Counter Two - {counterTwo}</button>
        </div>
    )
}

export default CounterMemo