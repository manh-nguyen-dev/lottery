import {provinces} from "../components/provinces";
import React, { useEffect, useState } from "react";
import { REGIONS } from "./regions";
export default function RegionProvinceRandomSelect() {
    const [selected, setSelected] = useState('1');
    useEffect(() => {
      
      }, [selected]);
    const onChange =(e, value)=>{
        console.log(value)
        setSelected(value)
    }
    const  choices=
    [
      { text: 'Quay thử theo miền', value: '1' },
      { text: 'Quay thử theo tỉnh', value: '2' }
    ] 
     return (
    <>
<div className="form-group">
      {choices.map((choice, index) => (
        <label className="label-radio btn-item" key={index}>
          <input type="radio"
           className="radio-1"
            name="vote"
            value={choice.value}
            key={index}
            checked={selected === choice.value}
            onChange={(e)=> onChange(e, choice.value)} />
          {choice.text}
          <span className="radio-2" />
        </label>
      ))}
</div>
<div className="form-group">
  <div className="btn-item">
    <select
      id="ddlProvincesQuayThu"
      onChange={(e) =>
        e.target.value && (window.location.href = e.target.value)
      }
    >
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
    >
      Quay thử
    </button>
  </div>
</div>

    </>
  );
}
