import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        // with dependency list
        // setCount(count + 1)

        // without dependency list
        setCount(prevCount => prevCount + 1)
    }

    // with dependency list

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count])

    // without dependency list

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter