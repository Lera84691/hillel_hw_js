import React from 'react';
import { Link, Outlet } from 'react-router-dom'


class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className='nav'>
                    <li>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="/battle">Battle</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="/popular">Popular</Link>
                    </li>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Nav