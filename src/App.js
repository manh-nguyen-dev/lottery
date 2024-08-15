import React, { useEffect, useState } from "react";
import Home from "./Home.js";
import axios from "axios";
import { API_URL } from "./const/index.js";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [ws, setWs] = useState(null);

  const fetchNumbers = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/draw-results?date=2024-08-02&province_id=2`
      );
      setNumbers(data.numbers);
      console.log(data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  useEffect(() => {
    fetchNumbers();

    // Create a WebSocket connection
    const socket = new WebSocket("ws://localhost:3000"); // Change the URL to your WebSocket server's URL

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    if (numbers.length < 27) {
      socket.onmessage = (event) => {
        // Parse and handle incoming messages
        const data = JSON.parse(event.data);
        if (data.type === "numberCreated") {
          console.log(data);
          setNumbers((prevNumbers) => [
            ...prevNumbers,
            { value: data.value, createdAt: data.createdAt },
          ]);
        }
      };
    }

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setWs(socket);

    // Cleanup on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pStyle = {
    fontSize: "16px",
    color: "#333",
    margin: "10px 0",
    padding: "5px",
    borderBottom: "1px solid #ddd",
  };

  const bStyle = {
    color: "#007bff",
  };

  return (
    <div>
      <h1>Socket with React</h1>
      {numbers.map((number, index) => (
        <p key={index} style={pStyle}>
          Value: <b style={bStyle}>{number.value}</b>, Created At:{" "}
          <b style={bStyle}>{new Date(number.createdAt).toLocaleString()}</b>
        </p>
      ))}

      <Home numbers={numbers} />
    </div>
  );
};

export default App;
