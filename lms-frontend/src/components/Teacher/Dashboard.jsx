import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <div className='flex flex-col justify-evenly'>
                <Link to="/courses">
                    <button className="btn">View Courses</button>
                </Link>
                <Link to="/students">
                    <button className="btn">View Students</button>
                </Link>
                <Link to="/add-quiz">
                    <button className="btn">Add Quiz</button>
                </Link>
                <Link to="/add-assessment">
                    <button className="btn">Add Assessment</button>
                </Link>
                <Link to="/assignments">
                    <button className="btn">View Assignments</button>
                </Link>
                {/* Add more buttons with links as needed */}
            </div>
        </>
    );
}

export default Dashboard;
