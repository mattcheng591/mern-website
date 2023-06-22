import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="../gallery">Gallery</Link>
            <Link to="../order">Order</Link>
            <Link to="../staff">Staff</Link>
            <Link to="../topics">Topics</Link>
            <Link to="../log">Nutrition Log</Link>
        </nav>
    );
}

export default Nav;