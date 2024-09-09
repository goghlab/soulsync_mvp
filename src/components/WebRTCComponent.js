import { initializeWebRTC } from '../webrtcSetup'; // Adjust the path based on where the file is located
import React, { useEffect } from 'react';

function WebRTCComponent() {
  useEffect(() => {
    async function setupWebRTC() {
      try {
        // Fetch offer data from your backend server
        const response = await fetch(' https://cf40-45-80-184-175.ngrok-free.app/api/heygen/new-session');
        const offerData = await response.json();

        console.log('Session creation response:', offerData); // Debugging line

        if (offerData?.sdp) {
          console.log('SDP offer received:', offerData.sdp);

          // Initialize WebRTC and create an SDP answer using the offer
          const answer = await initializeWebRTC(offerData.sdp);

          // Send the SDP answer back to your backend server
          await fetch(' https://cf40-45-80-184-175.ngrok-free.app/send-sdp-answer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sdp: answer }),
          });

          console.log('SDP answer sent successfully, WebRTC connection established');
        } else {
          console.error('Invalid offer data received:', offerData);
        }
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
