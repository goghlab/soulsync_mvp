const BASE_URL = 'https://9988-185-213-82-223.ngrok-free.app/api/heygen';

export async function createNewSession(avatarId, voiceId) {
  try {
    const response = await fetch(`${BASE_URL}/new-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ avatarId, voiceId }), // Updated to match backend
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Server responded with status ${response.status}: ${errorText}`);
      throw new Error(`Failed to create session: ${response.status} - ${errorText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error in createNewSession:', error);
    throw error;
  }
}

export async function sendSDPAnswer(sessionId, sdp) {
  const response = await fetch(`${BASE_URL}/send-sdp-answer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, sdp }),
  });
  if (!response.ok) throw new Error('Failed to send SDP answer');
  return response.json();
}

export async function startSession(sessionId, sdp) {
  const response = await fetch(`${BASE_URL}/start-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, sdp }),
  });
  if (!response.ok) throw new Error('Failed to start session');
  return response.json();
}

export async function stopSession(sessionId) {
  const response = await fetch(`${BASE_URL}/stop-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId }),
  });
  if (!response.ok) throw new Error('Failed to stop session');
  return response.json();
}