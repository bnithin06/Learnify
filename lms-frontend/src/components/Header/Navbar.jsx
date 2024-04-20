import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../../contexts/AuthContext";


function StudentNavbar() {
    const { user, logoutUser } = useContext(AuthContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <>
            <header className="bg-white shadow-md">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
            <img src={'https://up.yimg.com/ib/th?id=OIP.cyJ8O7A-uvorQZjiHaiosQHaCQ&%3Bpid=Api&rs=1&c=1&qlt=95&w=319&h=97'} alt="Logo" className="h-11 mr-4" />
                <nav className="space-x-4">
                <Link to="/courses" className="text-gray-800 hover:text-gray-600 font-medium">Courses</Link>
                <Link to="/resources" className="text-gray-800 hover:text-gray-600 font-medium">Resources</Link>
                <Link to="/profile" className="text-gray-800 hover:text-gray-600 font-medium">Profile</Link>
                </nav>
            </div>
            <div>
                <Link to="/login" className="text-gray-800 hover:text-gray-600 font-medium">Login</Link>
                <Link to="/signup" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-medium">Sign up</Link>
            </div>
            </div>
            </header>
            </>
    );
}

export default StudentNavbar;
