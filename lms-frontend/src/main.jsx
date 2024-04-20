import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentBase from './student/StudentBase';
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { CourseProvider } from './contexts/CourseContext';
import Home from './student/pages/Home';
import Login from './components/Accounts/Login'
import TeacherBase from './teacher/TeacherBase';
import TeacherDashboard from './teacher/TeacherDashboard'
import ContactUs from './pages/ContactUs';

import Courses from './student/components/Courses/Courses'
import CourseDetailsPage from './student/components/Courses/CourseDetailsPage';

import Enrollments from './student/components/Enrollments/Enrollments'
import Session  from './student/components/sessions/Session'
import TeacherHomepage from './teacher/pages/TeacherHomepage';
import GeneralHomepage from './pages/Homepage';
import Register from './components/Accounts/Register';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CourseProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<GeneralHomepage />} />
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Register/>}/>
          </Route>
          <Route path="/teacher/*" element={<TeacherRoutes />} />
          <Route path="/student/*" element={<StudentRoutes />} />
        </Routes>
        </CourseProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

function TeacherRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TeacherBase />}>
        <Route index element={<TeacherHomepage/>}/>
        <Route path='/dashboard' element={<TeacherDashboard/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        </Route>
      </Routes>
    </>
  );
}

function StudentRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentBase />}>
          <Route index element={<Home/>}/>
          <Route path="/student-details" element={<Home />} />
          <Route path='/courses' element={<Courses/>}/>
          <Route path="course-details/:slug" element={<CourseDetailsPage />} />
          <Route path="enrollments/" element={<Enrollments />} />
          <Route path="session" element={<Session />} />
        </Route>
      </Routes>
    </>
  );
}
