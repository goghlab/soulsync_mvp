import React, { useEffect, useRef, useState } from 'react';
import StreamingAvatar, { AvatarQuality, StreamingEvents, VoiceEmotion } from '@heygen/streaming-avatar';

const StreamingHeygen = () => {
  const videoRef = useRef(null);
  const [streamingAvatar, setStreamingAvatar] = useState(null);

  useEffect(() => {
    // Cleanup function to stop avatar streaming on unmount
    return () => {
      if (streamingAvatar) {
        streamingAvatar.stopAvatar();
        streamingAvatar.closeVoiceChat();
      }
    };
  }, [streamingAvatar]);

  const startStream = async () => {
    try {
      const avatar = new StreamingAvatar({
        token: 'MGU3M2Q2NDQ4YjAyNGNjZjgxZThhY2FhNzNhNzY5MjYtMTcyMzQzOTk2NQ==', // You need to replace with actual access token
      });

      avatar.on(StreamingEvents.AVATAR_START_TALKING, (e) => {
        console.log('Avatar started talking', e);
      });

      avatar.on(StreamingEvents.STREAM_READY, (event) => {
        console.log('Stream is ready!', event);
        if (videoRef.current) {
          videoRef.current.srcObject = event.stream;
        }
      });

      avatar.on(StreamingEvents.STREAM_DISCONNECTED, () => {
        console.log('Stream disconnected');
      });

      const sessionInfo = await avatar.createStartAvatar({
        quality: AvatarQuality.Low, 
        avatarName: 'your_actual_avatar_id', // Replace with the actual avatar ID
        voice: {
          voiceId: 'your_actual_voice_id', // Replace with the actual voice ID
          rate: 1.2,
          emotion: VoiceEmotion.EXCITED,
        },
        language: 'en',
      });

      setStreamingAvatar(avatar);
      console.log('Session started:', sessionInfo);

    } catch (error) {
      console.error('Error initializing the streaming avatar:', error);
    }
  };

  const stopStream = () => {
    if (streamingAvatar) {
      streamingAvatar.stopAvatar();
      streamingAvatar.closeVoiceChat();
      console.log('Streaming stopped');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>HeyGen Avatar Streaming Test</h2>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={startStream}>Start Stream</button>
      <button onClick={stopStream}>Stop Stream</button>
    </div>
  );
};

export default StreamingHeygen;
