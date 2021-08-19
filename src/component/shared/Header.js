import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <header>
            <div className="app-name">MyNotes</div>
            <Link className="add-btn" to="/add" >+</Link>
        </header>
    )
}

export default Header
