import React from 'react'
import {Link} from 'react-router-dom'
import '../style/navbar.css'
import {BiUserCircle} from 'react-icons/bi'
import {UserAuth} from '../context/AuthContext'


const NavBar = () => {
  const {user,logOut} = UserAuth()

  const handleSignOut = async () => {
    try {
        await logOut()
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <div>
        <nav >
            <ul>
                <Link to="/"><li><img src="https://img.icons8.com/cute-clipart/64/undefined/help.png" alt="logo" className="logo"/></li></Link>
                <Link to="/all-questions"><li className="question__header"> Questions</li></Link>
                <li><p>{user?.displayName}</p></li>

                {
                  user?.displayName ? (
                    <button onClick={handleSignOut}>logout</button>
                  ):
                  (
                    <Link to="/login"><li>Login</li></Link>
                  )
                }

            </ul>
        </nav>
    </div>
  )
}

export default NavBar