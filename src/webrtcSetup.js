// src/webrtcSetup.js

// Function to initialize WebRTC
export async function initializeWebRTC(offerData) {
  try {
    // 1. Parse the SDP and ICE servers from the received offerData
    const { sdp, iceServers } = offerData; // Adjusted to match response structure

    // 2. Create a new RTCPeerConnection with the ICE servers
    const peerConnection = new RTCPeerConnection({
      iceServers: iceServers
    });

    // 3. Set the remote description using the SDP offer
    await peerConnection.setRemoteDescription(new RTCSessionDescription(sdp));

    // 4. Create an SDP answer
    const answer = await peerConnection.createAnswer();

    // 5. Set the local description with the generated answer
    await peerConnection.setLocalDescription(answer);

    // 6. Log the SDP answer
    console.log("Generated SDP Answer:", answer);

    // 7. Return the answer to be sent back to the server
    return answer;

  } catch (error) {
    console.error('Error initializing WebRTC:', error);
    throw error;
  }
}
