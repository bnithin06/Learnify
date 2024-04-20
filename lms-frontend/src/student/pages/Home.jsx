import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import Logo from '../assets/logo.png'; // Replace with actual logo file path
import AuthContext from '../../contexts/AuthContext'


const StudentHomepage = () => {
  const {user}=useContext(AuthContext);
  let name='';
  if(user){
    name=user.first_name;
  }
  else{
    name='Student'
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}

      {/* Hero Section */}
      <section className="bg-slate-300 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome, {name}!</h1>
          <p className="text-lg">Discover the benefits of our platform designed for learners.</p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Enrolled Courses</h2>
          {/* Add enrolled course cards or listing here */}
          <p className="text-lg mb-4">Explore and enroll in new courses:</p>
          {/* Add option to explore and enroll in new courses */}
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Course Progress</h2>
          {/* Add progress tracking components here */}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Learning Resources</h2>
          {/* Add links to supplementary learning materials, study guides, and forums */}
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default StudentHomepage;
