import { Navigate ,Outlet} from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import { useContext } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
// import TeacherNavbar from '../components/Teacher/TeacherNavbar';

export const StudentRoutes = () => {
  let {user} = useContext(AuthContext)
  return(
      user  && user.is_student ? 
      <>
      <Navbar />
      <Outlet/>
      <Footer />
      </>
       : <Navigate to="/login"/>
  )
}

export const TeacherRoutes = () => {
  let {user} = useContext(AuthContext)
  return(
      user  && user.is_student ? 
      <>
      <Navbar />
      <Outlet/>
      <Footer />
      </>
       : <Navigate to="/login"/>
  )
}


