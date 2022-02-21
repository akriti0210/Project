import React, { useState } from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState()

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        // or
        // value, ES6
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}

export default useInput