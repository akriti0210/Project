import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
        <div>List of Products</div>
        <input type='search' placeholder='Search a product'/>
        <nav>
            <Link to='/products/featured'>Featured</Link>
            <Link to='/products/new'>New</Link>
        </nav>
        <Outlet/>
    </>
  )
}
