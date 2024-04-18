import { Link } from 'react-router-dom';

import { useCourseContext } from '../../../contexts/CourseContext'; // Import the useCourseContext 

import AuthContext from '../../../contexts/AuthContext';
import { useContext } from "react";
import Login from '../../../components/Accounts/Login';

function Courses() {
  const { user } = useContext(AuthContext);
  const { courses, loading, error } = useCourseContext(); // Use the useCourseContext hook

  // If user is not logged in, render login component
  if (!user) {
    return (
      <>
        <p className=' text-center mt-3 font-bold text-xl text-red-500'> Please Login to view courses</p>
        <Login />
      </>
    )
  }

  // Render loading state
  if (loading) {
    return <h1>Loading..</h1>;
  }

  // Render error state
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // Render courses
  return (
    <>
      <div className='h-16 grid place-content-center text-xl font-semibold'>
        Available Courses
      </div>
      <div className='flex flex-wrap justify-evenly'>
        {courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          courses.map(course => (
            <div key={course.title} className="max-w-xs rounded overflow-hidden shadow-lg m-3">
              <img
                className="w-full h-40 object-cover"
                src={course.thumbnail}
                alt={course.title}
                onError={(e) => { e.target.src = 'placeholder.jpg' }} // Placeholder image
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{course.title}</div>
                <p className="text-gray-700 text-base">{course.short_description}</p>
              </div>
              <div className="px-6 py-4 underline text-blue-500 cursor-pointer">
              <Link to={`/student/course-details/${course.slug}`}>Explore the curriculum</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Courses;
