import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {user?.email ?
            <>
                <li className='font-semibold ml-2'><Link to='/orders'>orders</Link></li>
                <li className='font-semibold ml-2'><button onClick={handleLogout} className='btn-ghost'>logout</button></li>
            </>
            :
            <li className='font-semibold ml-2'><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className="navbar mb-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='h-20 w-24' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button title='checkout for Appointment' className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Header;