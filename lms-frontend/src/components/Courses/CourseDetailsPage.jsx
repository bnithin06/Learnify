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
    const navigate = useNavigate();

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

    const handleEnroll = async () => {
        try {
            const response = await axios.post('http://localhost:8000/enrollments/', {
                course: course.slug,
                user: user.user_id,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                alert('Enrollment successful!');
                navigate('/enrollments');
            } else {
                throw new Error('Failed to enroll in the course. Please try again later.');
            }
        } catch (error) {
            console.error('Enrollment failed:', error);
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
        <div>
            {course ? (
                <>
                <h1 className='m-4  font-medium text-2xl'>{course.title}</h1>
                <div className='flex flex-col md:flex-row m-4'>
                    <div className=' w-1/2 '>
                       <p>{course.description}</p> 
                       <div>
                       <div className="flex items-center mb-4 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8 15a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zm-3-3a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zm6 0a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z" clipRule="evenodd"/>
                            </svg>
                            <p className="text-gray-600">Beginner Level</p>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-5-3a1 1 0 0 0 1.447.895l3.789-1.895a1 1 0 0 0 .342-1.74l-3.789-2.263A1 1 0 0 0 5 9V5a1 1 0 1 0-2 0v4a3 3 0 0 0 1.158 2.37l3.789 2.263a1 1 0 0 0 .342 1.74l-3.789 1.895A1 1 0 0 0 5 15z" clipRule="evenodd"/>
                            </svg>
                            <p className="text-gray-600">Duration: 10 weeks</p>
                         </div>
                         <div>
                            <button onClick={handleEnroll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Enroll Now</button>
                        </div>
                       </div>
                    </div>
                    <div className='flex items-start justify-center w-1/2'>
                        <div className="w-fit h-fit bg-white p-3">
                            <iframe className="w-full h-full rounded-lg" src={`https://www.youtube.com/embed/${getVideoId(course.video_url)}`} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>


                <div>
                    <h1 className='text-center text-xl font-semibold'>Course Features</h1>
                </div>
                </>
            ) : (
                <ErrorMessage message="No course found." />
            )}
        </div>
    );
}

function getVideoId(url) {
    const videoIdRegex = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
}

export default CourseDetailsPage;
