import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaUserCircle, FaDollarSign, FaUpload, FaFileAlt, FaCog, FaLifeRing, FaSignOutAlt } from 'react-icons/fa';
import banner from './assets/banner01.png'; // Import the banner image

function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-custom-dark-gray text-white">
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Banner Section */}
        <div className="relative bg-custom-gray p-4 mb-6 rounded-lg shadow-lg">
          <img src={banner} alt="Banner" className="w-full h-40 object-cover rounded-lg mb-4" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 rounded-lg p-4">
            <h2 className="text-2xl font-bold">Create Your SoulSync Avatar</h2>
            <p className="mt-2">Choose an option to start your journey.</p>
          </div>
        </div>

        {/* Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/upload-assets" className="bg-custom-gray rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:bg-custom-hover-gray transition">
            <FaUpload size={48} className="mb-4 text-custom-light-gray" />
            <h3 className="text-xl font-semibold mb-2">Upload Assets</h3>
            <p className="mb-4">Start by uploading photos, videos, voice recordings, and personal stories to create your avatar.</p>
          </Link>
          <Link to="/explore-avatars" className="bg-custom-gray rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:bg-custom-hover-gray transition">
            <FaUserCircle size={48} className="mb-4 text-custom-light-gray" />
            <h3 className="text-xl font-semibold mb-2">Explore Avatars</h3>
            <p className="mb-4">View and interact with existing avatars, or explore the gallery to find inspiration.</p>
          </Link>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="flex justify-around items-center bg-custom-gray p-4 fixed bottom-0 w-full">
        <Link to="/dashboard" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaHome size={24} />
          <span className="sr-only">Home</span>
        </Link>
        <Link to="/profile" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaUser size={24} />
          <span className="sr-only">Profile</span>
        </Link>
        <Link to="/avatars" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaUserCircle size={24} />
          <span className="sr-only">My Avatars</span>
        </Link>
        <Link to="/billing" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaDollarSign size={24} />
          <span className="sr-only">Billing</span>
        </Link>
        <Link to="/uploads" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaUpload size={24} />
          <span className="sr-only">Uploads</span>
        </Link>
        <Link to="/stories" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaFileAlt size={24} />
          <span className="sr-only">Personal Stories</span>
        </Link>
        <Link to="/settings" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaCog size={24} />
          <span className="sr-only">Settings</span>
        </Link>
        <Link to="/support" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaLifeRing size={24} />
          <span className="sr-only">Support</span>
        </Link>
        <Link to="/logout" className="text-custom-light-gray hover:text-custom-hover-gray">
          <FaSignOutAlt size={24} />
          <span className="sr-only">Logout</span>
        </Link>
      </nav>
    </div>
  );
}

export default Dashboard;
