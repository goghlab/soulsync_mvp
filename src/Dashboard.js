import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen bg-custom-dark-gray text-white">
      <nav className="w-64 bg-custom-dark-gray p-4">
        <h2 className="text-xl font-bold mb-4 text-custom-light-gray">Dashboard Menu</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Home</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Profile</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">My Avatars</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Billing</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Uploads</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Personal Stories</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Settings</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Support</a></li>
          <li><a href="#" className="text-custom-light-gray hover:text-custom-hover-gray">Logout</a></li>
        </ul>
      </nav>
      <main className="flex-1 p-6 bg-custom-dark-gray">
        <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-lg font-semibold mb-2">Profile Photo</h3>
          <p className="mb-4">Upload a photo of the person to help with avatar generation.</p>
          <input type="file" accept="image/*" className="border border-custom-light-gray rounded p-2 bg-custom-dark-gray text-white" />
        </div>
        <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-lg font-semibold mb-2">Voice Recording</h3>
          <p className="mb-4">Upload a voice recording to capture the person's vocal characteristics.</p>
          <input type="file" accept="audio/*" className="border border-custom-light-gray rounded p-2 bg-custom-dark-gray text-white" />
        </div>
        <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-lg font-semibold mb-2">Footage</h3>
          <p className="mb-4">Upload video footage for detailed visual data.</p>
          <input type="file" accept="video/*" className="border border-custom-light-gray rounded p-2 bg-custom-dark-gray text-white" />
        </div>
        <div className="bg-custom-gray rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-lg font-semibold mb-2">Personal Stories</h3>
          <p className="mb-4">Upload text data or personal stories to add personality details.</p>
          <input type="file" accept=".txt,.doc,.docx" className="border border-custom-light-gray rounded p-2 bg-custom-dark-gray text-white" />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
