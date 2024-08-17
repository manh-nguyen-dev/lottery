import React, { useEffect, useState } from "react";

import "../styles/firstLastTable.css";

export default function FirstLastTable({ visibleNumbers }) {
  const getLastTwoDigits = (number = "") => {
    return number?.toString()?.slice(-2);
  };

  const twoDigits = visibleNumbers.map((num) => getLastTwoDigits(num.value));

  const prioritizeFirstNumbers = visibleNumbers.map((num) =>
    getLastTwoDigits(num.value)
  );
  const prioritizeLastNumbers = visibleNumbers.map((num) =>
    getLastTwoDigits(num.value)
  );

  const toOneDigits = (twoDigits, value, isFirst = true) => {
    const idx = isFirst ? 0 : 1;
    return twoDigits.filter((d) => d?.[0] == value.toString()).map();
  };

  const renderDigits = () => {
    return (
      <>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i}>{i}</div>
        ))}
      </>
    );
  };

  const renderValueByDigits = () => {
    return (
      <>
        {Array.from({ length: 10 }, (_, i) => (
          <div>{}</div>
        ))}
      </>
    );
  };

  console.log("twoDigits", twoDigits);
  return (
    <>
      <div>
        <h4>
          <a
            title="Bảng Loto Miền Bắc"
            href="/lo-to-mien-bac/ket-qua-lo-to-mien-bac-p1.html"
          >
            Bảng Loto Miền Bắc
          </a>
        </h4>
      </div>
      <div className="first-last-container">
        <div className="first-last-label">
          <div>Đầu</div>
          {renderDigits()}
        </div>
        <div className="first-last-value">
          <div>Đuôi</div>
          {renderDigits()}
        </div>
        <div className="first-last-label">
          <div>Đầu</div>
          {renderDigits()}
        </div>
        <div className="first-last-value">
          <div>Đuôi</div>
          {renderDigits()}
        </div>
      </div>
    </>
  );
}
