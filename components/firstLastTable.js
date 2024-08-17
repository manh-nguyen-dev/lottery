import React, { useEffect, useState } from "react";

import "../styles/prizeTable.css";

export default function PrizeTable({ visibleNumbers }) {
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
                  {visibleNumbers[record]?.value || ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="number-spin">
        <label className="label-radio labelspin">
          Đầy đủ{" "}
          <input
            className="radio-1"
            defaultChecked=""
            name="spinOptions"
            defaultValue={1}
            type="radio"
          />
          <span className="radio-2" />
        </label>
        <label className="label-radio labelspin">
          2 số{" "}
          <input
            className="radio-1"
            name="spinOptions"
            defaultValue={2}
            type="radio"
          />
          <span className="radio-2" />
        </label>
        <label className="label-radio labelspin">
          3 số{" "}
          <input
            className="radio-1"
            name="spinOptions"
            defaultValue={3}
            type="radio"
          />
          <span className="radio-2" />
        </label>
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
    </>
  );
}
