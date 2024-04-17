import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from '../../contexts/AuthContext';
import TeacharNavbar from '../../components/Teacher/TeacherNavbar.jsx'

function Navbar() {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <nav>
            <div className=" h-16 w-full border-b flex">
                <div className=" w-96 flex items-center justify-start mx-4 text-black-400 text-3xl font-medium">
                    Learnify
                </div>
                <div className="w-screen flex justify-evenly items-center flex-wrap hidden md:flex font-semibold">
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} 
                        to="/"
                        >
                        Home
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} 
                        to="/courses"
                        >
                        All Courses
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} 
                        to="/enrollments"
                        >
                        My Enrollments
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} 
                        to="/session"
                        >
                        All Sessions
                    </NavLink>
                    {user ? (
                        <>
                            <div className=" text-slate-600">Welcome! {user.first_name}</div>
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
            </div>
        </nav>
    );
}

export default Navbar;
