import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";

function TeacherNavbar() {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <nav>
            <div className="h-16 w-full border-b flex">
                <div className="w-96 flex items-center justify-start mx-4 text-black-400 text-3xl font-medium">
                    Teacher Dashboard
                </div>
                
                <div className="w-screen flex justify-evenly items-center flex-wrap hidden md:flex font-semibold">
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} to="/teacher/dashboard">
                            Dashboard
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')} to="/teacher/contactus">
                            Contact Us
                        </NavLink>
                    <div className="flex items-center">
                        <div className="text-slate-600">Welcome! {user.first_name}</div>
                        <button onClick={handleLogout} className="bg-blue-500 px-3 py-1 rounded-md text-white ml-2">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TeacherNavbar;
