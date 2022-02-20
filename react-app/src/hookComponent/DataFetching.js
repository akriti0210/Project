import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    // const [posts, setPosts] = useState({})
    const [post, setPost] = useState()
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //{id}- fetching based on input change
        //{idFromButtonClick}- fetching on button click
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(response => {
                console.log(response)
                // setPosts(response.data)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)

            })
    }, [idFromButtonClick])
    //[id] - dependency so that title changes on changing the input id
    // [idFromButtonClick] - dependency so that title changes on button click
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type="text"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            {/* <ul>
                {
                    posts.map(post =>
                        <li key={post.id}>
                            {post.title}
                        </li>)
                }
            </ul> */}
            <div>{post ? post.title : null}</div>
        </div>
    )
}

export default DataFetching