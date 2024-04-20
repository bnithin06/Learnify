import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../../../contexts/AuthContext";


function StudentNavbar() {
    const { user, logoutUser } = useContext(AuthContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <nav>
            <div className=" h-20 w-full border-b flex">
                <div className="w-96 flex items-center justify-start mx-4 text-black-400 text-3xl font-medium">
                <img src={'https://up.yimg.com/ib/th?id=OIP.cyJ8O7A-uvorQZjiHaiosQHaCQ&%3Bpid=Api&rs=1&c=1&qlt=95&w=319&h=97'} alt="Logo" className="h-11 mr-4" />
                </div>
                <div className="w-screen flex justify-evenly items-center flex-wrap md:flex hidden font-semibold ">
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-black' : 'text-black')} 
                        to="/student"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} 
                        to="/student/courses"
                    >
                        All Courses
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} 
                        to="/student/enrollments"
                    >
                        My Enrollments
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} 
                        to="/student/session"
                    >
                        All Sessions
                    </NavLink>
                    {user && user.is_student ? (
                        <>
                            <div className="text-slate-600">Welcome! {user.first_name}</div>
                            <button onClick={handleLogout} className="bg-blue-500 px-3 py-1 rounded-md text-white ml-2">Logout</button>
                        </>
                    ) : (
                        <div>
                            <Link to="/login" className="border-blue-500 border-2 px-2 rounded-md text-blue-600 mr-5">
                                Sign In
                            </Link>
                            <Link to="/signup" className="bg-blue-500 px-3 py-1 rounded-md text-white ml-2">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
                <div className="md:hidden grid place-content-center text-2xl mr-7 cursor-pointer">
                    <FontAwesomeIcon icon={faBars} onClick={() => setDropdownVisible(!dropdownVisible)} />
                </div>
                {dropdownVisible && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white border border-gray-200 shadow-lg">
                        {/* Dropdown content */}
                        <NavLink to="/" className="block py-2 px-4 text-black">Home</NavLink>
                        <NavLink to="/student/courses" className="block py-2 px-4 text-black">All Courses</NavLink>
                        <NavLink to="/enrollments" className="block py-2 px-4 text-black">My Enrollments</NavLink>
                        <NavLink to="/session" className="block py-2 px-4 text-black">All Sessions</NavLink>
                        {user ? (
                            <>
                                <div className="py-2 px-4">Welcome! {user.first_name}</div>
                                <button onClick={handleLogout} className="bg-blue-500 px-3 py-1 rounded-md text-white ml-2">Logout</button>
                            </>
                        ) : (
                            <div>
                                <Link to="/login" className="border-blue-500 border-2 px-2 rounded-md text-blue-600 mr-5">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="bg-blue-500 px-3 py-1 rounded-md text-white ml-2">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default StudentNavbar;
