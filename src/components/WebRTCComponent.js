import React, { useEffect, useRef } from 'react';
import { initializeWebRTC } from '../webrtcSetup'; // Ensure this includes the necessary methods

function WebRTCComponent() {
  const videoRef = useRef(null); // Reference for the video element

  useEffect(() => {
    async function setupWebRTC() {
      try {
        // Fetch offer data from your backend server
        const response = await fetch('https://7c89-193-203-12-87.ngrok-free.app/api/heygen/new-session');

        // Check for HTTP errors
        if (!response.ok) {
          const errorText = await response.text(); // Capture the raw error message
          console.error('Failed to fetch session offer:', errorText);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ensure the response is in JSON format
        const offerData = await response.json();
        console.log('Session creation response:', offerData); // Debugging line

        if (offerData?.sdp) {
          console.log('SDP offer received:', offerData.sdp);

          // Initialize WebRTC and create an SDP answer using the offer
          const { localStream, remoteStream, answer } = await initializeWebRTC(offerData);

          // Set the remote stream to the video element
          if (videoRef.current) {
            videoRef.current.srcObject = remoteStream; // Set the video element's source to the remote stream
            videoRef.current.play(); // Ensure the video plays automatically
          }

          // Send the SDP answer back to your backend server
          const answerResponse = await fetch('https://7c89-193-203-12-87.ngrok-free.app/send-sdp-answer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sdp: answer }), // Use the answer variable here
          });

          // Check for HTTP errors in the response from sending the SDP answer
          if (!answerResponse.ok) {
            const answerErrorText = await answerResponse.text(); // Capture the raw error message
            console.error('Failed to send SDP answer:', answerErrorText);
            throw new Error(`Failed to send SDP answer: ${answerResponse.status}`);
          }

          console.log('SDP answer sent successfully, WebRTC connection established');
        } else {
          console.error('Invalid offer data received:', offerData);
        }
      } catch (error) {
        console.error('Failed to establish WebRTC connection:', error);
      }
    }

    setupWebRTC();

    // Clean up function to stop any ongoing streams when the component unmounts
    return () => {
      if (videoRef.current) {
        const tracks = videoRef.current.srcObject?.getTracks();
        if (tracks) {
          tracks.forEach(track => track.stop()); // Stop all tracks
        }
        videoRef.current.srcObject = null; // Clear the video element's source
      }
    };
  }, []);

  return (
    <div>
      <h1>WebRTC Connection Setup</h1>
      <p>Setting up WebRTC connection...</p>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }} // Add styles as needed
      />
    </div>
  );
}

export default WebRTCComponent;
