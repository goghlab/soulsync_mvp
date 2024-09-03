// WebRTCComponent.js

import { initializeWebRTC } from './webrtcSetup'; // Adjust the path based on where the file is located

import React, { useEffect } from 'react';

function WebRTCComponent() {

  useEffect(() => {
    async function setupWebRTC() {
      try {
        // Fetch offer data from your backend server via ngrok
        const response = await fetch('https://600a-193-203-13-67.ngrok-free.app/get-sdp');
        const offerData = await response.json();

        // Initialize WebRTC and get the SDP answer
        const answer = await initializeWebRTC(offerData);

        // Send the SDP answer back to your backend server via ngrok
        await fetch('https://600a-193-203-13-67.ngrok-free.app/send-sdp-answer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sdp: answer }),
        });

        console.log('WebRTC connection established successfully');

      } catch (error) {
        console.error('Failed to establish WebRTC connection:', error);
      }
    }

    setupWebRTC();
  }, []);

  return (
    <div>
      <h1>WebRTC Connection Setup</h1>
      <p>Setting up WebRTC connection...</p>
    </div>
  );
}

export default WebRTCComponent;
