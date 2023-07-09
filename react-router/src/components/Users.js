import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>
        <div>Users 1</div>
        <div>Users 2</div>
        <div>Users 3</div>
        <Outlet/>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active users</button>
        <button onClick={()=>setSearchParams({})}>Reset</button>
        <div>
            {showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>}
        </div>
    </>
  )
}
