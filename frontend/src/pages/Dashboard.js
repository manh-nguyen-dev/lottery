import AdminPrizeTable from "../components/adminPrizeTable";
import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../const/index.js";

const Dashboard = () => {
  const [ws, setWs] = useState(null);

  const [numbersList, setNumbersList] = useState([
    [
      {
        value: 26680,
      },
      {
        value: 56422,
      },
      {
        value: 78436,
      },
      {
        value: 70538,
      },
      {
        value: 26612,
      },
      {
        value: 93568,
      },
      {
        value: 62585,
      },
      {
        value: 69373,
      },
      {
        value: 52768,
      },
      {
        value: 5555,
      },
      {
        value: 5800,
      },
      {
        value: 9461,
      },
      {
        value: 3668,
      },
      {
        value: 2909,
      },
      {
        value: 7306,
      },
      {
        value: 8726,
      },
      {
        value: 2905,
      },
      {
        value: 7182,
      },
      {
        value: 1956,
      },
      {
        value: 662,
      },
      {
        value: 290,
      },
      {
        value: 577,
      },
      {
        value: 26,
      },
      {
        value: 15,
      },
      {
        value: 51,
      },
      {
        value: 74,
      },
      {
        value: 28526,
      },
    ],
    [
      {
        value: 26680,
      },
      {
        value: 56422,
      },
      {
        value: 78436,
      },
      {
        value: 70538,
      },
      {
        value: 26612,
      },
      {
        value: 93568,
      },
      {
        value: 62585,
      },
      {
        value: 69373,
      },
      {
        value: 52768,
      },
      {
        value: 5555,
      },
      {
        value: 5800,
      },
      {
        value: 9461,
      },
      {
        value: 3668,
      },
      {
        value: 2909,
      },
      {
        value: 7306,
      },
      {
        value: 8726,
      },
      {
        value: 2905,
      },
      {
        value: 7182,
      },
      {
        value: 1956,
      },
      {
        value: 662,
      },
      {
        value: 290,
      },
      {
        value: 577,
      },
      {
        value: 26,
      },
      {
        value: 15,
      },
      {
        value: 51,
      },
      {
        value: 74,
      },
      {
        value: 28526,
      },
    ],
    [
      {
        value: 26680,
      },
      {
        value: 56422,
      },
      {
        value: 78436,
      },
      {
        value: 70538,
      },
      {
        value: 26612,
      },
      {
        value: 93568,
      },
      {
        value: 62585,
      },
      {
        value: 69373,
      },
      {
        value: 52768,
      },
      {
        value: 5555,
      },
      {
        value: 5800,
      },
      {
        value: 9461,
      },
      {
        value: 3668,
      },
      {
        value: 2909,
      },
      {
        value: 7306,
      },
      {
        value: 8726,
      },
      {
        value: 2905,
      },
      {
        value: 7182,
      },
      {
        value: 1956,
      },
      {
        value: 662,
      },
      {
        value: 290,
      },
      {
        value: 577,
      },
      {
        value: 26,
      },
      {
        value: 15,
      },
      {
        value: 51,
      },
      {
        value: 74,
      },
      {
        value: 28526,
      },
    ],
  ]);

  const loadNumbersList = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/admin/sessions/recent`);
      setNumbersList(data);

      console.log("completeRandom", data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  useEffect(() => {
    loadNumbersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket("ws://103.54.153.110/:3000"); // Change the URL to your WebSocket server's URL

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      // Parse and handle incoming messages
      const data = JSON.parse(event.data);
      console.log("in admin", data);
      loadNumbersList();
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
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
          <h4>Phiên {idx + 1}</h4>
          <AdminPrizeTable
            numbers={obj.numbers}
            sessionStatus={obj.status}
            sessionId={obj.id}
            autoDisabled={idx < 4}
            timeRendered={obj.updatedAt}
            setNumbersList={setNumbersList}
          />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
