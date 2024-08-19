import React, { useEffect, useState } from "react";
import { provinces } from "../const/provinces";
import axios from "axios";
import { API_URL } from "../const/index.js";

export default function RegionProvinceRandomSelect({
  trying,
  setTrying,
  setNumbers,
  initData,
  setInitData,
}) {
  const [selected, setSelected] = useState("1");
  useEffect(() => {}, [selected]);
  const onChange = (e, value) => {
    setSelected(value);
  };
  const choices = [
    { text: "Quay thử theo miền", value: "1" },
    { text: "Quay thử theo tỉnh", value: "2" },
  ];

  const tryRandom = async () => {
    try {
      setTrying(1);
      setNumbers([]);
      const { data } = await axios.post(`${API_URL}/sessions`);
      setNumbers(data.numbers || []);
      data.sessionId && setInitData(data);

      console.log("run quay thử", data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  return (
    <>
      <div className="form-group">
        {choices.map((choice, index) => (
          <label key={"pro" + index} className="label-radio btn-item">
            <input
              type="radio"
              className="radio-1"
              name="vote"
              value={choice.value}
              key={index}
              checked={selected === choice.value}
              onChange={(e) => onChange(e, choice.value)}
            />
            {choice.text}
            <span className="radio-2" />
          </label>
        ))}
      </div>
      <div className="form-group">
        <div className="btn-item">
          <select id="ddlProvincesQuayThu" onChange={(e) => console.log(e)}>
            <option value="0">Chọn tỉnh thành</option>
            {provinces.map((province, idx) => (
              <option key={"province" + idx} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-item2 fixw">
          <button
            id="btnStartOrStop"
            className="btn btn-danger"
            onClick={tryRandom}
            disabled={trying === 1}
          >
            {trying === 2
              ? "Quay thử lại"
              : trying === 1
              ? "Đang quay thử"
              : "Quay thử"}
          </button>
        </div>
      </div>
    </>
  );
}
