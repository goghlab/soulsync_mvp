// src/webrtcSetup.js

export async function initializeWebRTC(offerData) {
  try {
    const { sdp, iceServers } = offerData;

    const peerConnection = new RTCPeerConnection({
      iceServers: iceServers
    });

    console.log('Peer connection state before setRemoteDescription:', peerConnection.connectionState);

    if (peerConnection.connectionState === 'new') {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(sdp));
    } else {
      console.warn('Peer connection is in an invalid state for setting remote description:', peerConnection.connectionState);
      return;
    }

    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    console.log("Generated SDP Answer:", answer);
    return answer;

  } catch (error) {
    console.error('Error initializing WebRTC:', error);
    throw error;
  }
}

