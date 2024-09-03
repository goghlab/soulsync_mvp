// src/streaming.js
import React, { useState } from 'react';
import { initializeWebRTC } from './webrtcSetup'; // Import the WebRTC setup function

function Streaming() {
  const [sessionId, setSessionId] = useState(null);

  const createNewSession = async () => {
    try {
      const response = await fetch('https://600a-193-203-13-67.ngrok-free.app/create-new-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setSessionId(data.sessionId); // Assuming the backend returns a sessionId
      console.log('New session created:', data.sessionId);
    } catch (error) {
      console.error('Failed to create new session:', error);
    }
  };

  const startSession = async () => {
    try {
      if (!sessionId) {
        console.error('No session created yet.');
        return;
      }

      const response = await fetch(`https://600a-193-203-13-67.ngrok-free.app/get-sdp?sessionId=${sessionId}`);
      const offerData = await response.json();

      const answer = await initializeWebRTC(offerData);

      await fetch(`https://600a-193-203-13-67.ngrok-free.app/send-sdp-answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sdp: answer, sessionId }),
      });

      console.log('Session started successfully');
    } catch (error) {
      console.error('Failed to start session:', error);
    }
  };

  const stopSession = async () => {
    try {
      if (!sessionId) {
        console.error('No session to stop.');
        return;
      }

      await fetch(`https://600a-193-203-13-67.ngrok-free.app/stop-session?sessionId=${sessionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Session stopped successfully');
      setSessionId(null); // Reset sessionId
    } catch (error) {
      console.error('Failed to stop session:', error);
    }
  };

  return (
    <div>
      <h1>WebRTC Streaming Section</h1>
      <button onClick={createNewSession}>Create New Session</button>
      <button onClick={startSession} disabled={!sessionId}>Start Session</button>
      <button onClick={stopSession} disabled={!sessionId}>Stop Session</button>
    </div>
  );
}

export default Streaming;
