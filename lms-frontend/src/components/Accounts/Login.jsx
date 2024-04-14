import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Login() {
  const { loginUser } = useContext(AuthContext);
  

  return (
    <div className="flex justify-center items-center h-fit">
      <form onSubmit={loginUser} className="border-2  rounded px-8 pt-6 pb-8 mb-16 mt-16">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email" 
            id="email" 
            placeholder="Enter Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
       <div className='text-blue-500 font-medium text-center underline  mt-3'>
       <Link to={'/signup'}>New user? Register now.</Link>
       </div>
      </form>
    </div>
  );
}

export default Login;
