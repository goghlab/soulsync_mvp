import axios from 'axios';

const BASE_URL = ' https://cf40-45-80-184-175.ngrok-free.app'; // Replace with your actual base URL

// Function to create a new session with HeyGen
export const createNewSession = async (avatarId, voiceId, quality = 'medium') => {
  try {
    const response = await axios.post(`${BASE_URL}/api/heygen/new-session`, {
      avatarId,  // Pass avatarId dynamically
      voiceId,   // Pass voiceId dynamically
      quality    // Set default to 'medium' if not provided
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Return the session data (including sessionId)
  } catch (error) {
    console.error('Failed to create session:', error);
    throw error;
  }
};

// Function to get SDP offer
export const getSDPOffer = async (sessionId) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-sdp?sessionId=${sessionId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to get SDP offer:', error);
    throw error;
  }
};

// Function to send SDP answer
export const sendSDPAnswer = async (answer, sessionId) => {
  try {
    await axios.post(`${BASE_URL}/send-sdp-answer`, {
      sdp: answer,
      sessionId,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to send SDP answer:', error);
    throw error;
  }
};

// Function to stop a session
export const stopSession = async (sessionId) => {
  try {
    await axios.post(`${BASE_URL}/stop-session`, { sessionId }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to stop session:', error);
    throw error;
  }
};
