import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const legMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', legMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', legMousePosition)
        }

    }, [])

    return (
        <div>Hook X- {x} Y- {y}</div>
    )
}

export default HookMouse