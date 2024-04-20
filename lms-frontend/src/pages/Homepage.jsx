// GeneralHomepage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import Logo from '../assets/logo.png'; // Replace with actual logo file path
import { FaUserCircle } from 'react-icons/fa'; // Assuming you're using Font Awesome for icons

const GeneralHomepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform!</h1>
          <p className="text-lg mb-8">Explore our platform and enhance your learning experience.</p>
          <div className="flex space-x-4">
            <Link to="/signup" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white">Join as Teacher</Link>
            <Link to="/signup" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white">Join as Student</Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          {/* Add featured course cards or listings here */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-4">Learn about our platform, mission, and values:</p>
          {/* Add information about the platform, mission, and values */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          {/* Add testimonials or quotes from satisfied users */}
        </div>
      </section>
    </div>
  );
};

export default GeneralHomepage;
