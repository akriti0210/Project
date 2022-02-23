import React, { useEffect } from 'react'
import { useNavigate, Link, Routes, Route, useMatch } from 'react-router-dom'
import { EditProfile } from './EditProfile'
import { ViewProfile } from './ViewProfile'
const Profile = ({ login }) => {

    const navigate = useNavigate()

    useEffect(() => {

        if (!login) {
            navigate("/")
        }
    }, [login, navigate])

    const [path, url] = useMatch()

    return (
        <>
            <h1>Profile</h1>
            <ul className='nav'>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/viewprofile`}>View Profile</Link>
                </li>
                {/* Error- Use useMatch
                <li>
                    <Link to='/editprofile'>Edit Profile</Link>
                </li>
                <li>
                    <Link to='/viewprofile'>View Profile</Link>
                </li> */}
            </ul>

            <Routes>
                <Route path='${path}/editprofile' element={<EditProfile />} />
                <Route path='${path}/viewprofile' element={<ViewProfile />} />
            </Routes>
        </>

    )
}
export default Profile