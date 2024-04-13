import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a new context
const CourseContext = createContext();

// Custom hook to use the CourseContext
export const useCourseContext = () => useContext(CourseContext);

// Provider component to wrap your application
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/courses/');
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  // Value to be provided by the context
  const value = {
    courses,
    loading,
    error
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
};
