import React, { useEffect, useState } from "react";
import "../styles/prizeTable.css";
import "../styles/adminPrizeTable.css";
import axios from "axios";
import { API_URL, SESSION_STATUS } from "../const";
import { getMaxLengthForIndex } from "../utils/digit";

export default function AdminPrizeTable({
  numbers = [],
  autoDisabled = true,
  setNumbersList,
  sessionStatus,
  timeRendered,
  sessionId,
}) {
  const [filledNumbers, setFilledNumbers] = useState([]);
  const [completedNumberIdxes, setCompletedNumberIdxes] = useState([]);

  useEffect(() => {
    if (autoDisabled) {
      setCompletedNumberIdxes(numbers.map((_, idx) => idx));
    } else {
    }

    for (let i = 0; i < numbers.length; i++) {
      setFilledNumbers(numbers);
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
    if (e?.target.value?.length > getMaxLengthForIndex(record)) return;

    const newValues = filledNumbers.map((val, idx) => {
      if (idx === record) {
        return {
          ...val,
          ...{ value: e?.target.value },
        };
      }

      return val;
    });

    setFilledNumbers(newValues);
  };

  const handleInputBlur = async (e, record, number) => {
    const { id: numberId, value: numberOldValue } = number || {};
    if (e?.target.value?.length < getMaxLengthForIndex(record)) return;

    try {
      const response = await axios.put(`${API_URL}/numbers/${numberId}`, {
        value: e?.target.value,
        session_id: sessionId,
        run_socket: true,
      });

      console.log("update number success", response);
    } catch (error) {
      console.error("Error update numbers:");
    }
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
                {
                  <input
                    type="number"
                    value={filledNumbers[record]?.value || ""}
                    onChange={(value) => handleInputChange(value, record)}
                    onBlur={(value) =>
                      handleInputBlur(value, record, filledNumbers[record])
                    }
                    disabled={
                      autoDisabled ||
                      filledNumbers[record]?.status === 3 ||
                      numbers[record - 3]?.status === 3 ||
                      numbers[record - 2]?.status === 3 ||
                      numbers[record - 1]?.status === 3 ||
                      sessionStatus === 3
                    }
                    maxLength={getMaxLengthForIndex(record)}
                  />
                }
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
