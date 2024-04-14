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
                    </div>
                    <div className='flex items-start justify-center w-1/2'>
                        <div className="w-fit h-fit bg-white p-3">
                            <iframe className="w-full h-full rounded-lg" src={`https://www.youtube.com/embed/${getVideoId(course.video_url)}`} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
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
