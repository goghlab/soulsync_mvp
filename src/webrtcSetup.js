export async function initializeWebRTC(offerData) {
  const { sdp, iceServers, sessionId } = offerData;
  const peerConnection = new RTCPeerConnection({ iceServers });

  // Handle ICE candidates
  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      console.log('Sending ICE candidate:', event.candidate);
      fetch('https://9988-185-213-82-223.ngrok-free.app/api/heygen/send-ice-candidate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          candidate: event.candidate,
        }),
      }).catch((error) => console.error('Error sending ICE candidate:', error));
    }
  };

  // Monitor ICE connection state
  peerConnection.oniceconnectionstatechange = () => {
    console.log('ICE connection state:', peerConnection.iceConnectionState);
  };

  // Set remote description and generate answer
  await peerConnection.setRemoteDescription(new RTCSessionDescription(sdp));
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);
  console.log('Generated SDP Answer:', answer);

  return { answer, peerConnection };
}