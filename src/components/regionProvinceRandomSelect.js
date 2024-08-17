import React, { useEffect, useState } from "react";
import { provinces } from "../const/provinces";
import axios from "axios";
import { API_URL } from "../const/index.js";

export default function RegionProvinceRandomSelect() {
  const [selected, setSelected] = useState("1");
  useEffect(() => {}, [selected]);
  const onChange = (e, value) => {
    setSelected(value);
  };
  const choices = [
    { text: "Quay thử theo miền", value: "1" },
    { text: "Quay thử theo tỉnh", value: "2" },
  ];

  const [trying, setTrying] = useState(false);

  const tryRandom = async () => {
    try {
      setTrying(true);
      const { data } = await axios.get(`${API_URL}/try-random`);

      console.log(data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  return (
    <>
      <div className="form-group">
        {choices.map((choice, index) => (
          <label className="label-radio btn-item" key={index}>
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
              <option value={province.id}>{province.name}</option>
            ))}
          </select>
        </div>
        <div className="btn-item2 fixw">
          <button
            id="btnStartOrStop"
            className="btn btn-danger"
            onClick={tryRandom}
          >
            {trying ? "Đang quay thử" : "Quay thử"}
          </button>
        </div>
      </div>
    </>
  );
}
