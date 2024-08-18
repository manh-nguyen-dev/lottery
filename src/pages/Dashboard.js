import AdminPrizeTable from "../components/adminPrizeTable";
import { provinces } from "../const/provinces";
import { WEEK_DAYS_PROVINCES } from "../const/date";
import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, SESSION_STATUS } from "../const/index.js";

const getProvinceByDay = () => {
  const today = new Date().getDay();
  const provinceId = WEEK_DAYS_PROVINCES[today];
  return provinceId;
};

const getProvinceName = (provinceId) => {
  const province = provinces.find((p) => p.id === provinceId);
  return province ? province.name : "Unknown";
};

const Dashboard = () => {
  const provinceId = getProvinceByDay();
  const provinceName = getProvinceName(provinceId);

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

      console.log("data", data);

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

  return (
    <div className="dashboardContainer">
      {numbersList.map((obj, idx) => (
        <div key={`${idx}_number_list`} className="adminPrizeTable">
          <h4>Phiên {idx + 1}</h4>
          <AdminPrizeTable
            numbers={obj.numbers}
            autoDisabled={idx !== 4}
            timeRendered={obj.updatedAt}
          />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
