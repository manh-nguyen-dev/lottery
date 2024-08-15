import React, { useEffect, useState } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket('ws://localhost:3000'); // Change the URL to your WebSocket server's URL

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      // Parse and handle incoming messages
      const data = JSON.parse(event.data);
      if (data.type === 'numberCreated') {
        console.log(data);
        setNumbers((prevNumbers) => [...prevNumbers, { value: data.value, createdAt: data.createdAt }]);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setWs(socket);

    // Cleanup on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const pStyle = {
    fontSize: '16px',
    color: '#333',
    margin: '10px 0',
    padding: '5px',
    borderBottom: '1px solid #ddd'
  };

  const bStyle = {
    color: '#007bff'
  };

  return (
    <div>
      <h1>Socket with React</h1>
      {numbers.map((number, index) => (
        <p key={index} style={pStyle}>
          Value: <b style={bStyle}>{number.value}</b>, Created At: <b style={bStyle}>{new Date(number.createdAt).toLocaleString()}</b>
        </p>
      ))}
    </div>
  );
};

export default App;
