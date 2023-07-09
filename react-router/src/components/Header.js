import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {
    // return (
    //     <>
    //         <h1>React Router</h1>
    //         <ul className='nav'>
    //             <li>
    //                 <Link to='/'>Home</Link>
    //             </li>
    //             <li>
    //                 <Link to='/about'>About</Link>
    //             </li>
    //             <li>
    //                 <Link to='/profile'>Profile</Link>
    //             </li>
    //         </ul>
    //     </>
    // )

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return (
        <nav className='primary-nav'>
            {/* links */}
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}
            {/* active links */}
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
        </nav>
    )
}

export default Header