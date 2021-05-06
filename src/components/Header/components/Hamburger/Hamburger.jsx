import React from "react";

import './index.scss';

const Hamburger = ({ active, loading, onClick }) => (
    <div
      className={`hamburger-wrapper ${active ? "hamburger-position" : ""}`}
      onClick={onClick}
    >
      <div className="hamburger-main">
        <div
          className={`hamburger-top ${active ? "active" : ""} ${
            loading ? "loading" : ""
          }`}
        />
        <div
          className={`hamburger-center ${active ? "active" : ""}  ${
            loading ? "loading" : ""
          }`}
        />
        <div
          className={`hamburger-bottom ${active ? "active" : ""}  ${
            loading ? "loading" : ""
          }`}
        />
      </div>
    </div>
);

export default Hamburger;
