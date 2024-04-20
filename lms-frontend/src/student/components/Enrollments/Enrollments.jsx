import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import axios from 'axios';

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
                    <h3>Enrolled Course Details</h3>
                    {enrolledCourses && enrolledCourses.map(enrollment => (
                    <div key={enrollment.id}>
                        <h4>Course: {enrollment.course.title}</h4>
                        <p>Description: {enrollment.course.description}</p>
                        <p>Instructor: {enrollment.course.instructor}</p>
                        {/* Display other course details as needed */}
                    </div>
                ))}

                </>
            ) : (
                <p>Please log in to view enrollment details</p>
            )}
        </div>
    );
}

export default Enrollments;
