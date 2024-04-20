import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error,setError]=useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    isStudent: false,
    isTeacher: false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/register/', formData);
      // console.log(response.data);
      navigate('/login');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      {error ? 'Registration failed! Try Again' : ''}
      <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center text-blue-500 mb-4 underline font-medium">
          <Link to="/login">Existing User? Login</Link>
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">
            First Name:
          </label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">
            Last Name:
          </label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username:
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 flex gap-3">
          <label className="block text-gray-700 font-bold mb-2">
            Register as:
          </label>
          <div className="flex items-center">
            <input
              id="student"
              type="checkbox"
              name="isStudent"
              checked={formData.isStudent}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label htmlFor="student" className="text-sm">
              Student
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="teacher"
              type="checkbox"
              name="isTeacher"
              checked={formData.isTeacher}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label htmlFor="teacher" className="text-sm">
              Teacher
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password:
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
