import React from "react";
import "./dashboard.styles.scss";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-title">
        <h2>Total Bookings</h2>
      </div>
      <div className="card-info">11,230</div>
      <div className="card-other-info">
        <div className="other-info-1">
          <h3>This Month</h3>
          <p>932</p>
        </div>
        <div className="other-info-2">
          <h3>This Week</h3>
          <p>932</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
