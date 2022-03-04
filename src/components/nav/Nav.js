import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    const [username, setUserName] = useState('');

    useEffect(()=>{
        setUserName(localStorage.getItem('username'))
    }, [])

    const logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('userId')
        localStorage.removeItem('token')

        window.location.href = '/'
    }

  return (
    <div className='nav'>
        <div className="nav-left">
                <h2>Ecommerce</h2>
        </div>    
        <div className="nav-right">
            <Link className="text-decoration-none" to={"/account"}>Account</Link>
            <Link className="text-decoration-none" to={"/cart"}>Cart</Link>
            <div className="user-intro">Hi {username}</div>
            <div onClick={logout} className="logout-btn">Logout</div>
        </div>    
    </div>
  )
}

export default Nav