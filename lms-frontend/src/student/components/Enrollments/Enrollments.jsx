import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import axios from 'axios';
import {  NavLink } from 'react-router-dom';

function Enrollments() {
    const { user } = useContext(AuthContext);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:8000/enrollments/${user.user_id}`)
                .then(response => {
                    setEnrolledCourses(response.data);
                })
                .catch(error => {
                    console.error('Error fetching enrolled courses:', error);
                });
        }
    }, [user]); 

    console.log(enrolledCourses);

    return (

        <div>
    {user ? (
        <>
            <h3 className="text-xl font-semibold mb-4 text-center mt-3">Enrolled Course Details</h3>
            {enrolledCourses && enrolledCourses.length > 0 ? (
                enrolledCourses.map(enrollment => (
                    <div key={enrollment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold mb-2">Course: {enrollment.course}</h4>
                        <div className="flex items-center mb-2">
                            <span className="text-gray-600 mr-2">Instructor:</span>
                            <span className="text-blue-500 font-medium">Yogeeshwar</span>
                        </div>
                        {/* Display other course details as needed */}
                    </div>
                ))
            ) : (
                <p className='text-center mb-5'>No enrollments found. <NavLink to="/student/courses" className={`underline text-blue-500`}>Browse courses to enroll</NavLink></p>
            )}
        </>
    ) : (
        <p>Please log in to view enrollment details</p>
    )}
</div>


    );
}

export default Enrollments;
