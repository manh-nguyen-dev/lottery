import React, { useEffect, useState } from "react";

import "../styles/prizeTable.css";

export default function AdminPrizeTable({ numbers = [] }) {
  const [filledNumbers, setFilledNumbers] = useState({});

  useEffect(() => {
    for (let i = 0; i < numbers.length; i++) {
      setFilledNumbers((prevNumbers) => ({
        ...prevNumbers,
        ...{ [i]: numbers[i] },
      }));
    }
  }, [numbers]);

  const prizes = [
    {
      name: "ĐB",
      records: [26],
      className: "flex-row color-red",
    },
    {
      name: "1",
      records: [0],
      className: "flex-row bg-blue-light",
    },
    {
      name: "2",
      records: [1, 2],
    },
    {
      name: "3",
      records: [3, 4, 5, 6, 7, 8],
      className: "grid-3  bg-blue-light",
    },
    {
      name: "4",
      records: [9, 10, 11, 12],
    },
    {
      name: "5",
      records: [13, 14, 15, 16, 17, 18],
      className: "grid-3  bg-blue-light",
    },
    {
      name: "6",
      records: [19, 20, 21],
    },
    {
      name: "7",
      records: [22, 23, 24, 25],
      className: "flex-row color-red bg-blue-light",
    },
  ];

  const handleInputChange = (e, record) => {
    console.log(e, record);
    setFilledNumbers((prevNumbers) => ({
      ...prevNumbers,
      ...{ [record]: e?.target.value },
    }));
  };

  const save = () => {
    console.log(filledNumbers);
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
                {!filledNumbers[record]?.value ? (
                  <input
                    type="number"
                    value={filledNumbers[record] || ""}
                    onChange={(value) => handleInputChange(value, record)}
                  />
                ) : (
                  <div>{filledNumbers[record]?.value || ""}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={save}>Save</button>
    </>
  );
}
