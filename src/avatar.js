import React, { useEffect, useRef } from 'react';

const HeyGenAvatarComponent = () => {
  const avatarContainerRef = useRef(null);
  const peerConnectionRef = useRef(null);

  const startSession = async () => {
    try {
      // Make a request to your backend to start the session
      const response = await fetch('/api/start-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to start session');
      }

      const data = await response.json();
      const { sdp, iceServers } = data;

      // Initialize WebRTC Peer Connection
      peerConnectionRef.current = new RTCPeerConnection({
        iceServers: iceServers.map(server => ({
          urls: server.urls,
          username: server.username,
          credential: server.credential,
        })),
      });

      // Set up WebRTC connection with SDP
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(sdp));

      // Create and send the answer
      const answer = await peerConnectionRef.current.createAnswer();
      await peerConnectionRef.current.setLocalDescription(answer);

      // Handle ICE candidates
      peerConnectionRef.current.onicecandidate = event => {
        if (event.candidate) {
          console.log('ICE Candidate:', event.candidate);
          // Send ICE candidates to the server if needed
        }
      };

      // Handle media stream
      peerConnectionRef.current.ontrack = event => {
        if (avatarContainerRef.current) {
          avatarContainerRef.current.srcObject = event.streams[0];
        }
      };

    } catch (error) {
      console.error('Error setting up the avatar:', error);
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (peerConnectionRef.current) {
        try {
          peerConnectionRef.current.close(); // Close the WebRTC connection
          console.log('WebRTC connection closed');
        } catch (error) {
          console.error('Error during WebRTC connection cleanup:', error);
        }
      } else {
        console.warn('No WebRTC connection to close');
      }
    };
  }, []);

  return (
    <div>
      <h1>HeyGen Streaming Avatar</h1>
      <button onClick={startSession}>Start Session</button>
      <video id="avatar-container" ref={avatarContainerRef} autoPlay playsInline>
        {/* The avatar will be displayed within this video element */}
      </video>
    </div>
  );
};

export default HeyGenAvatarComponent;
