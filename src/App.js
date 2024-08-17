import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import axios from "axios";
import { API_URL } from "./const/index.js";
import Dashboard from "./pages/Dashboard.js";

const App = () => {
  const [trying, setTrying] = useState(0);
  const [initData, setInitData] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [ws, setWs] = useState(null);

  const completeRandom = async () => {
    try {
      setTrying(2);
      const { data } = await axios.put(
        `${API_URL}/sessions/${initData.sessionId}/status/completed`
      );

      console.log("completeRandom", data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket("ws://localhost:3000"); // Change the URL to your WebSocket server's URL

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      // Parse and handle incoming messages
      const data = JSON.parse(event.data);
      console.log("in", data);

      setInitData(data);
      if (data.numbers && initData.sessionId !== data.sessionId) {
        setNumbers([]);
        setTimeout(
          () =>
            setNumbers(
              data.numbers.map((num) => ({
                value: num,
                createdAt: data.createdAt,
              }))
            ),
          numbers.length === 27 ? 3000 : 100
        );
      }
    };

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
  }, [trying]);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                numbers={numbers}
                initData={initData}
                trying={trying}
                setTrying={setTrying}
                setNumbers={setNumbers}
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
