import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaUserCircle, FaDollarSign, FaUpload, FaFileAlt, FaCog, FaLifeRing, FaSignOutAlt } from 'react-icons/fa';
import banner from './assets/banner01.png'; // Import the banner image

function Upload() {
  return (
    <div className="flex flex-col h-screen bg-custom-dark-gray text-white">
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Banner Section */}
        <div className="relative bg-custom-gray p-4 mb-6 rounded-lg shadow-lg">
          <img src={banner} alt="Banner" className="w-full h-40 object-cover rounded-lg mb-4" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 rounded-lg p-4">
            <h2 className="text-2xl font-bold">Upload Info to Create SoulSync Avatar</h2>
            <p className="mt-2">Love transcends time, creating a bond that endures forever</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">Profile Photo</h3>
            <p className="mb-4">Upload a photo of the person to help with avatar generation.</p>
            <input type="file" accept="image/*" className="border border-custom-gray rounded p-2 bg-gray-900 text-white w-full" />
          </div>
          <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">Voice Recording</h3>
            <p className="mb-4">Upload a voice recording to capture the person's vocal characteristics.</p>
            <input type="file" accept="audio/*" className="border border-custom-gray rounded p-2 bg-gray-900 text-white w-full" />
          </div>
          <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">Footage</h3>
            <p className="mb-4">Upload video footage for detailed visual data.</p>
            <input type="file" accept="video/*" className="border border-custom-gray rounded p-2 bg-gray-900 text-white w-full" />
          </div>
          <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">Personal Stories</h3>
            <p className="mb-4">Upload text data or personal stories to add personality details.</p>
            <input type="file" accept=".txt,.doc,.docx" className="border border-custom-gray rounded p-2 bg-gray-900 text-white w-full" />
          </div>
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

export default Upload;
