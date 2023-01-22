import React from "react";
import { Link } from "react-router-dom";
import { DoughNut } from "../charts";
import "./bookingchart.styles.scss";

const BookingsChart = () => {
  return (
    <div className="booking-chart">
      <div className="chart-title">
        <h2>Room Booking Chart</h2>
        <Link to="/">View</Link>
      </div>
      <DoughNut
        labels={["Reserved", "Occupied", "Available", "Maintenance"]}
        label="Rooms"
        values={[20, 50, 125, 5]}
        colors={["#488A99", "#DBAE58", "#779341", "#EA6A47"]}
        circumference={360}
        radius={100}
      />
    </div>
  );
};

export default BookingsChart;
