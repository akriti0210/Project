import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams();
    const query = new URLSearchParams(useLocation().search)

    console.log(useParams())
    console.log(useLocation())
    console.log(query)
    return (
        <>
            <h2>
                Post id ={id}
            </h2>
            <h2>
                Query= {query.get("name")} {query.get("lastName")}
            </h2>
        </>
    )
}

export default Post