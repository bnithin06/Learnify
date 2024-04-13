import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../contexts/AuthContext';
import Spinner from '../../components/Spinner';
import ErrorMessage from './ErrorMessage';
import Login from '../../components/Accounts/Login';
import { useNavigate } from 'react-router-dom';

function CourseDetailsPage() {
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const { slug } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://127.0.0.1:8000/courses/${slug}`);
                setCourse(response.data);
            } catch (error) {
                setError('Failed to fetch course details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    // enrollment logic it happens when the enroll button is clicked
    const handleEnroll = async () => {
        try {
            // Assuming course and user are defined somewhere in your code
            const response = await axios.post('http://localhost:8000/enrollments/', {
                course: course.slug,
                user: user.user_id,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                // Handling successful enrollment
                alert('Enrollment successful!');
                navigate('/enrollments');
                
            } else {
                throw new Error('Failed to enroll in the course. Please try again later.');
            }
        } catch (error) {
            console.error('Enrollment failed:', error);
            // Handle enrollment error
            setError('Failed to enroll in the course. Please try again later.');
        }
    };
    

    
    
    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!user) {
        return (
            <>
                <p className='text-center mt-3 font-bold text-xl text-red-500'>Please Login to view courses</p>
                <Login />
            </>
        );
    }

    return (
        <div className="container mx-auto mt-8">
            {course ? (
                <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <img
                            className="w-full h-40 object-cover"
                            src={course.thumbnail || 'placeholder.jpg'}
                            alt={course.title}
                            onError={(e) => { e.target.src = 'placeholder.jpg' }}
                        />
                        <p className="text-lg font-bold text-gray-800 mb-4">{course.title}</p>
                        <p className="text-sm text-gray-600 mb-2">Instructor: {course.user}</p>
                        <p className="text-sm text-gray-600 mb-2">Level: {course.level}</p>
                        <p className="text-sm text-gray-600 mb-4">Language: {course.language}</p>
                        <p className="text-sm text-gray-700 mb-4">{course.description}</p>
                        <p className="text-lg font-bold text-gray-800 mb-2">Price: ₹{course.price}</p>
                        <p>Course category: {course.categories}</p>
                        <button
                            onClick={handleEnroll}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            ) : (
                <ErrorMessage message="No course found." />
            )}
        </div>
    );
}

export default CourseDetailsPage;
