import React, { useEffect, useRef } from 'react';

function WebRTCComponent({ webRTCData }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (webRTCData?.peerConnection) {
      const peerConnection = webRTCData.peerConnection;

      peerConnection.ontrack = (event) => {
        const stream = event.streams[0];
        console.log('Remote stream received in WebRTCComponent:', stream);
        console.log('Video tracks:', stream.getVideoTracks());
        console.log('Audio tracks:', stream.getAudioTracks()); // Fixed: Added closing parenthesis

        if (videoRef.current) {
          console.log('Attaching stream to video element');
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch((error) => console.error('Error playing video:', error));
        } else {
          console.error('Video element not found in the DOM');
        }
      };
    }

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      if (webRTCData?.peerConnection) {
        webRTCData.peerConnection.close();
      }
    };
  }, [webRTCData]);

  return (
    <div>
      <h1>WebRTC Connection Setup</h1>
      <p>Setting up WebRTC connection...</p>
      <video
        ref={videoRef}
        id="avatarVideo"
        autoPlay
        muted
        playsInline
        style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default WebRTCComponent;