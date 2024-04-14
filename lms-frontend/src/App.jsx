import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./contexts/AuthContext";
import { useContext } from "react";
import Login from "./components/Accounts/Login";
import Dashboard from "./components/Teacher/Dashboard";
import TeacherNavbar from "./components/Teacher/TeacherNavbar";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <>
          {user.is_student ? (
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          ) : (
            <>
              {user.is_teacher ? (
                <>
                  <TeacherNavbar/>
                  <Outlet/>
                  <Footer/>
                </>
              ) : (
                <>
                  <h1 className="text-center text-xl text-red-500 my-8">
                    Please login with valid student or teacher credentials.
                  </h1>
                  <Login />
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
