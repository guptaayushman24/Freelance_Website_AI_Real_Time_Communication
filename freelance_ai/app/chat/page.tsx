'use client'
import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';

export default function ChatComponent() {
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io('http://localhost:8001', {
      transports: ['websocket'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('✅ Connected to socket:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('❌ Disconnected from socket');
    });

    socket.on("a", (data) => {
      console.log('📩 Received message from server:', data);
      setReceivedMessage(data);
    });

    socket.on("b",(data)=>{
      console.log("Data from the b event is",data);
    })

    socket.on("c",(data)=>{
      console.log("Data from the c event is",data);
    })

    return () => {
      socket.disconnect();
    };
  }, [receivedMessage]);

  return (
    <div>
      <h2>Received Message:</h2>
      <p>{receivedMessage}</p>
    </div>
  );
}
