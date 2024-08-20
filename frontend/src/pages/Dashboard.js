import AdminPrizeTable from "../components/adminPrizeTable";
import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../const/index.js";

const Dashboard = () => {
  const [ws, setWs] = useState(null);

  const [numbersList, setNumbersList] = useState([]);

  const loadNumbersList = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/admin/sessions/recent`);
      setNumbersList(data);

      console.log("load Numbers List", data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  const connectSocket = () => {
    // Create a WebSocket connection
    const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL_ADMIN); 

    socket.onopen = () => {
      console.log("WebSocket connection established");
      socket.send("admin");
    };

    socket.onmessage = (event) => {
      // Parse and handle incoming messages

      const data = JSON.parse(event.data);
      console.log("in admin onmessage", data);
      loadNumbersList();
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
      setTimeout(function () {
        console.log("Reconnecting...");
        connectSocket();
      }, 3000); // Retry after 5 seconds
    };

    return socket;
  };

  useEffect(() => {
    loadNumbersList();
    // Create a WebSocket connection
    const socket = connectSocket(); // Change the URL to your WebSocket server's URL

    socket.onopen = () => {
      console.log("WebSocket connection established");
      socket.send("admin");
    };

    socket.onmessage = (event) => {
      // Parse and handle incoming messages
      const data = JSON.parse(event.data);
      console.log("in admin onmessage", data);
      loadNumbersList();
    };

    socket.onclose = () => {
      setTimeout(function () {
        console.log("Reconnecting...");
        connectSocket();
      }, 3000); // Retry after 5 seconds
    };

    setWs(socket);

    // Cleanup on component unmount
    return () => {
      if (socket) {
        console.log("un mount");
        socket.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboardContainer">
      {numbersList.map((obj, idx) => (
        <div key={`${idx}_number_list_${obj.id}`} className="adminPrizeTable">
          <h4>Phiên {numbersList.length - idx}</h4>
          <AdminPrizeTable
            numbers={obj.numbers}
            sessionStatus={obj.status}
            sessionId={obj.id}
            autoDisabled={idx > 1}
            timeRendered={obj.updatedAt}
            setNumbersList={setNumbersList}
          />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
