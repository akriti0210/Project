import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <h1>Homepage</h1>
            <button onClick={()=>navigate('order-summary',{replace:true})}>Place an order</button>
        </>
    )
}

export default Home