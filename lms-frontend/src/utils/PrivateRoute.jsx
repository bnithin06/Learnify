import { Navigate ,Outlet} from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import { useContext } from 'react';

export const PrivateRoutes = () => {
  let {user} = useContext(AuthContext)
  return(
      user  ? 
      <>
      <Outlet/>
      </>
       : <Navigate to="/login"/>
  )
}
