import React, { useState } from 'react';
import { createNewSession, sendSDPAnswer, startSession, stopSession } from './api';
import WebRTCComponent from './components/WebRTCComponent';
import { initializeWebRTC } from './webrtcSetup';

function Streaming() {
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('No session yet.');
  const [webRTCData, setWebRTCData] = useState(null);

  const handleCreateNewSession = async () => {
    setLoading(true);
    setStatusMessage('Creating new session...');
    try {
      // Replace with your actual avatarId and voiceId from HeyGen
      const data = await createNewSession('Daisy-inskirt-20220818', '2d5b0e6cf36f460aa7fc47e3eee4ba54');
      console.log('Session creation response:', data);

      setSessionId(data.sessionId);
      setStatusMessage(`New session created: ${data.sessionId}`);

      const { answer, peerConnection } = await initializeWebRTC({
        sdp: data.sdp,
        iceServers: data.iceServers,
        sessionId: data.sessionId,
      });

      await sendSDPAnswer(data.sessionId, answer);
      await startSession(data.sessionId, answer);

      setWebRTCData({ peerConnection, sessionId: data.sessionId });
    } catch (error) {
      console.error('Error creating session:', error);
      setStatusMessage(`Failed to create session: ${error.message}`);
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
      setWebRTCData(null);
    } catch (error) {
      console.error('Error stopping session:', error);
      setStatusMessage('Failed to stop session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', color: 'white' }}>
      <h1 style={{ color: 'white' }}>WebRTC STREAMING</h1>
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
          <WebRTCComponent webRTCData={webRTCData} /> {/* Fixed: uses webRTCData */}
        </div>
      )}
    </div>
  );
}

export default Streaming;