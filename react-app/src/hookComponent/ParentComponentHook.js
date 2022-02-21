import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponentHook() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])

    // const incrementAge = () => {
    //     setAge(age + 1)
    // }

    // const incrementSalary = () => {
    //     setSalary(salary + 10000)
    // }

    return (
        <div>
            {/* Performance issue- Updating one single component 
            will re render all the components 
            Solution- React.Memo*/}

            {/* Incrementing age or salary will re-render
            the salary and age component buttons respectively
            Whenevever the button is clicked React.Memo
            will observe that handleClick prop value has been
            changed and the component buttons get re-rendered
            Solution- useCallback hook*/}
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}



export default ParentComponentHook