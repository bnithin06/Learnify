import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Enrollments from './components/Enrollments/Enrollments';
import Login from './components/Accounts/Login';
import Register from './components/Accounts/Register';
import CourseDetailsPage from './components/Courses/CourseDetailsPage';
import { AuthProvider } from './contexts/AuthContext';
import { CourseProvider } from './contexts/CourseContext'; // Import CourseProvider
import Session from './components/sessions/Session';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Dashboard from './components/Teacher/Dashboard';
import { StudentRoutes,TeacherRoutes } from './utils/PrivateRoute'; // Import PrivateRoutes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CourseProvider>
        <Routes>
        <Route path="/" element={<StudentRoutes />}>
          <Route index element={<Home />} />
          <Route path='/courses' element={<Courses/>}/>
          <Route path="enrollments" element={<Enrollments />} />
          <Route path="signup" element={<Register />} />
          <Route path="session" element={<Session />} />
          <Route path="course-details/:slug" element={<CourseDetailsPage />} />
        </Route>
        <Route path="/teacher/*" element={<TeacherRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
       </Routes>
        </CourseProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
