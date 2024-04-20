import { FaUserCircle } from 'react-icons/fa';
function Footer() {
    return (
        <>
        <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2024 Learnify</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300"><FaUserCircle className="h-6 w-6" /></a>
            {/* Add social media links here */}
          </div>
        </div>
      </footer>
        </>
    );
}

export default Footer;

