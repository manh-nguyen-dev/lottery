import React, { useEffect, useState } from "react";
import "../styles/prizeTable.css";
import "../styles/adminPrizeTable.css";
import axios from "axios";
import { API_URL } from "../const";
import { getMaxLengthForIndex } from "../utils/digit";

export default function AdminPrizeTable({
  numbers = [],
  autoDisabled = true,
  timeRendered,
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

    console.log(newValues);

    setFilledNumbers(newValues);
  };

  const createNumbersForResult = async (result_id, nums) => {
    try {
      if (!result_id) {
        throw new Error("Result ID is required");
      }

      if (typeof nums !== "object") {
        throw new Error("Numbers array must have exactly 27 elements");
      }
      const numbers = Object.values(nums);

      const response = await axios.post(`${API_URL}/admin/numbers`, {
        numbers,
        result_id,
      });

      console.log("Successfully created numbers:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error creating numbers:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const save = async () => {
    await createNumbersForResult(1, filledNumbers);
    console.log(filledNumbers);
  };

  const clear = () => {
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
                {filledNumbers[record]?.value && (
                  <input
                    type="number"
                    value={filledNumbers[record]?.value || ""}
                    onChange={(value) => handleInputChange(value, record)}
                    // onBlur={handleSaveNumber}
                    disabled={
                      autoDisabled ||
                      Date.now() >
                        new Date(timeRendered)?.getTime() + 6000 * record
                    }
                    maxLength={getMaxLengthForIndex(record)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="button-container">
        <button className="button-save" onClick={save}>
          Save
        </button>
        <button className="button-clear" onClick={clear}>
          Clear
        </button>
      </div>
    </>
  );
}
