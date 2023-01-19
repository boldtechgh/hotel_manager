import React from "react";
import "./dashboard.styles.scss";

const Card = ({
  title,
  info,
  othertitle1,
  othertitle2,
  otherinfo1,
  otherinfo2,
}) => {
  return (
    <div className="card-container">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-info">{info}</div>
      <div className="card-other-info">
        <div className="other-info">
          <h3>{othertitle1}</h3>
          <p>{otherinfo1}</p>
        </div>
        <div className="other-info">
          <h3>{othertitle2}</h3>
          <p>{otherinfo2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
