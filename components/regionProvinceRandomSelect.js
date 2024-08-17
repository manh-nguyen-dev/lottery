import { provinces } from "../components/provinces";
import { REGIONS } from "./regions"
import React, { useEffect, useState } from "react";

export default function RegionProvinceRandomSelect() {
  const [selected, setSelected] = useState("1");

  const onChange = (e, value) => {
    console.log(value);
    setSelected(value);
  };

  const choices = [
    { text: "Quay thử theo miền", value: "1" },
    { text: "Quay thử theo tỉnh", value: "2" },
  ];

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
              checked={selected === choice.value}
              onChange={(e) => onChange(e, choice.value)}
            />
            {choice.text}
            <span className="radio-2" />
          </label>
        ))}
      </div>
      
      {selected === "1" && (
        <div className="form-group">
          <div className="btn-item">
            <select
              id="ddRegionsQuayThu"
            //   onChange={(e) =>
            //     e.target.value && (window.location.href = e.target.value)
            //   }
            >
              <option value="0">Chọn miền</option>
              {REGIONS.map((REGION, idx) => (
                <option key={idx} value={REGION.id}>
                  {REGION.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className="form-group">
        <div className="btn-item2 fixw">
          <button id="btnStartOrStop" className="btn btn-danger">
            Quay thử
          </button>
        </div>
      </div>
    </>
  );
}
