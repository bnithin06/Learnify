import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";

function TeacherNavbar() {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
    };

    return (
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
          <div className="flex  gap-3">
          {user ? (
                        <>
                            <div className="text-slate-600 font-medium">Welcome! {user.first_name}</div>
                            <button onClick={handleLogout} className="bg-blue-500 px-3 py-1 rounded-md text-white ml-2 font-medium">Logout</button>
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
      </header>
    );
}

export default TeacherNavbar;
