import React, { useState, useEffect } from 'react';

function Enrollments() {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/enrollments/1/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch enrolled courses');
                }
                return response.json();
            })
            .then(data => {
                // console.log('Data received from API:', data);
                setEnrolledCourses(data);
            })
            .catch(error => console.error('Error fetching enrolled courses:', error));
    }, []);

    return (
        <div>
            <h3>Enrolled Course Details</h3>
            {enrolledCourses ? (
                <ul>
                    {Object.keys(enrolledCourses).map(key => (
                        <li key={key}>
                            <strong>{key}:</strong> {enrolledCourses[key]}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No courses enrolled</p>
            )}
        </div>
    );
    
    
}

export default Enrollments;
