import React, { useEffect, useState } from 'react';
import { createNewSession, sendSDPAnswer, stopSession } from './api'; // Adjust for your actual API calls
import WebRTCComponent from './components/WebRTCComponent'; // Assuming you have a WebRTCComponent for UI
import { initializeWebRTC } from './webrtcSetup'; // Import the WebRTC setup function

function Streaming() {
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('No session yet.');
  const [webRTCData, setWebRTCData] = useState(null); // State for storing WebRTC data

  const handleCreateNewSession = async () => {
    setLoading(true);
    setStatusMessage('Creating new session...');
    try {
      const data = await createNewSession('your-avatar-id', 'your-voice-id'); // Adjust with dynamic avatar and voice IDs
      console.log('Session creation response:', data);

      setSessionId(data.sessionId);
      setStatusMessage(`New session created: ${data.sessionId}`);

      // Pass the SDP offer and ICE servers to the WebRTC setup function
      const sdpAnswer = await initializeWebRTC({
        sdp: data.sdp,
        iceServers: data.iceServers
      });

      // Send the generated SDP answer back to the server
      await sendSDPAnswer(data.sessionId, sdpAnswer);

      // Assuming you want to store some WebRTC data or streams
      setWebRTCData(sdpAnswer);

    } catch (error) {
      console.error('Error creating session:', error);
      setStatusMessage('Failed to create session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStopSession = async () => {
    if (!sessionId) {
      setStatusMessage('No session to stop.');
      return;
    }

    setLoading(true);
    setStatusMessage('Stopping session...');
    try {
      await stopSession(sessionId);
      setStatusMessage('Session stopped successfully.');
      setSessionId(null);
      setWebRTCData(null);  // Clear WebRTC data
    } catch (error) {
      console.error('Error stopping session:', error);
      setStatusMessage('Failed to stop session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', color: 'white' }}>
      <h1 style={{ color: 'white' }}>WebRTC Streaming</h1>

      <div className="status-bar">
        {loading ? (
          <div className="loading-spinner" style={{ color: 'white' }}>⏳ Loading...</div>
        ) : (
          <p style={{ color: 'white' }}>{statusMessage}</p>
        )}
      </div>

      <div className="button-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={handleCreateNewSession} disabled={loading || sessionId}>
          {loading && !sessionId ? 'Creating session...' : 'Create New Session'}
        </button>
        <button onClick={handleStopSession} disabled={!sessionId || loading}>
          {loading && sessionId ? 'Stopping session...' : 'Stop Session'}
        </button>
      </div>

      {sessionId && webRTCData && (
        <div className="streaming-area" style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Streaming Area</h3>
          <p>Session ID: {sessionId}</p>
          <WebRTCComponent webRTCData={webRTCData} />  {/* Pass webRTCData to WebRTCComponent */}
        </div>
      )}
    </div>
  );
}

export default Streaming;
