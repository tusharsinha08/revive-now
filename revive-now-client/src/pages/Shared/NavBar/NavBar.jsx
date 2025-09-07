import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={"/services"}>Services</Link></li>
        <li><Link to={"/services"}>Doctors</Link></li>
        <li><Link to={"/services"}>Appointment</Link></li>
        <li><Link to={"/services"}>Contact</Link></li>
        <li>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="bg-[#F7A582] rounded-4xl">Profile</div>
                <ul tabIndex={0} className="dropdown-content menu bg-gray-500/40 rounded-box z-1 w-52 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </li>
    </>

    return (
        <div>
            <div className="navbar fixed bg-gray-500/40 text-white max-w-[100rem] shadow-sm md:px-40 z-50">
                <div className="navbar-start flex">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-500/40 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to={"/"}><h2 className="flex items-center gap-2 text-2xl font-bold text-emerald-600">
                        <span className="bg-emerald-600 p-2 rounded-full text-white">+</span>
                        Revive <span className="text-[#F7A582]">Now</span>
                    </h2></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;