import React, { useState } from "react";
import { isSameDay } from "date-fns";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDayClick = (day) => {
    const date = new Date(2024, 6, day + 1);
    setSelectedDate(date);
  };

  return (
    <div className="datetime-picker-container">
      <div className="widget-container fc-calendar-container" id="calendar">
        <div className="fc-calendar fc-five-rows">
          <ul className="caleandar-weks">
            <li>Hai</li>
            <li>Ba</li>
            <li>Tư</li>
            <li>Năm</li>
            <li>Sáu</li>
            <li className="red">Bảy</li>
            <li>C.N</li>
          </ul>
          <ul className="caleandar-days">
            {[...Array(31).keys()].map((day) => (
              <li
                key={day}
                className={
                  selectedDate &&
                  isSameDay(new Date(2024, 6, day + 1), selectedDate)
                    ? "fc-today active"
                    : ""
                }
                onClick={() => handleDayClick(day)}
              >
                <span className="ca-pm">
                  <span className="fc-date">{day + 1}</span>
                  <i className="icon-hoangdao" title="Ngày hoàng đạo"></i>
                </span>
                <span className="ca-am" title={`${day + 1}/7/2024`}>
                  {day + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
