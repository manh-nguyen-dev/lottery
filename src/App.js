import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import axios from "axios";
import { API_URL } from "./const/index.js";
import Dashboard from "./pages/Dashboard.js";

const App = () => {
  const [trying, setTrying] = useState(false);
  const [initData, setInitData] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [ws, setWs] = useState(null);

  const completeRandom = () => {};

  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket("ws://localhost:3000"); // Change the URL to your WebSocket server's URL

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    if (numbers.length <= 27) {
      socket.onmessage = (event) => {
        // Parse and handle incoming messages
        const data = JSON.parse(event.data);
        console.log("in", data);

        setInitData(data);
        if (data.numbers) {
          setNumbers(
            data.numbers.map((num) => ({
              value: num,
              createdAt: data.createdAt,
            }))
          );
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

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                numbers={numbers}
                trying={trying}
                setTrying={setTrying}
                completeRandom={completeRandom}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard numbers={numbers} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
