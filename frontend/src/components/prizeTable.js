import React, { useEffect, useState } from "react";

import "../styles/prizeTable.css";
import FirstLastTable from "./firstLastTable";
import { prizes } from "../const/prizes";
import RandomNumber from "./randomNumber.js";
import axios from "axios";
import { API_URL, SESSION_STATUS } from "../const/index.js";

export default function PrizeTable({
  initData,
  numbers,
  completeRandom = () => {},
}) {
  const [visibleNumbers, setVisibleNumbers] = useState([]);
  const [selected, setSelected] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const mapDigits = (values, numberOfDigit) => {
    return values.map((val, idx) => ({
      ...val,
      value: numbers[idx]?.value?.toString().slice(selected),
    }));
  };

  const updateNumberStatus = async (id) => {
    if (!id) return;
    try {
      const { data } = await axios.put(`${API_URL}/numbers/status/${id}`, {
        status: SESSION_STATUS.COMPLETED,
        run_socket: true,
      });

      console.log("update Number Status to loaded success", data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  useEffect(() => {
    setVisibleNumbers([]);
    setIsSpinning(false);
  }, [initData.sessionId]);

  useEffect(() => {
    let interval;
    interval = setInterval(
      () => {
        if (numbers.length) {
          const value = numbers[visibleNumbers.length];
          updateNumberStatus(value?.id);
          setVisibleNumbers((prevNumbers) => {
            return mapDigits([...prevNumbers, value], selected);
          });

          setIsSpinning(true);
        } else {
          setVisibleNumbers([]);
          setIsSpinning(false);
        }
      },
      isSpinning ? 3000 : 100
    );

    if (
      visibleNumbers.length === numbers.length &&
      visibleNumbers.length === 27
    ) {
      setTimeout(completeRandom, 1000);
    }

    return () => clearInterval(interval);
  }, [numbers, visibleNumbers]);

  useEffect(() => {
    setVisibleNumbers((prevNumbers) => mapDigits(prevNumbers, selected));
  }, [selected]);

  const choices = [
    { text: "Đầy đủ", value: 0 },
    { text: "2 số", value: -2 },
    { text: "3 số", value: -3 },
  ];

  const onChangeSelected = (e, value) => {
    setSelected(value);
  };

  return (
    <>
      {prizes.map((prize, idx) => (
        <div
          key={idx}
          className={`${
            idx % 2 !== 0 ? "bg-blue-light" : ""
          } flex-row prize-row`}
        >
          <span className="prize-name">{prize.name}</span>

          <div className={prize.className || "flex-row"}>
            {prize.records.map((record, rIdx) => (
              <div key={rIdx} className="prize-number">
                <div
                  className={
                    !visibleNumbers[record]?.value ? "spinning-ball" : ""
                  }
                >
                  {/* {visibleNumbers[record]?.value || ""} */}
                </div>
                {visibleNumbers[record]?.value && (
                  <RandomNumber
                    number={visibleNumbers[record]?.value}
                    duration={3000}
                    record={record}
                    isSpinning={isSpinning}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="number-spin">
        {choices.map((choice, index) => (
          <label className="label-radio btn-item" key={index}>
            <input
              className="radio-1"
              name="spinOptions"
              defaultValue={1}
              checked={selected === choice.value}
              onChange={(e) => onChangeSelected(e, choice.value)}
              type="radio"
            />
            {choice.text}
            <span className="radio-2" />
          </label>
        ))}
      </div>
      <div id="hover-number" className="flex-row">
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>

      <FirstLastTable visibleNumbers={visibleNumbers} />
    </>
  );
}
