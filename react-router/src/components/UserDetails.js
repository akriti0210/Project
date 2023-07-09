import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    // const userParams = useParams()
    // const userId = userParams.userId
    // or destructure userId in single line
    const {userId} = useParams()
  return (
    <div>Details about user {userId}</div>
  )
}
