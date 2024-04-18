import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext'
function Home() {
    const {user}=useContext(AuthContext)
    console.log(user.first_name)
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Welcome to Learnify</h1>
            <p className="text-lg text-gray-600">Your go-to platform for online learning</p>
            {/* Add more content here as needed */}
        </div>
        </>
    );
}

export default Home;
