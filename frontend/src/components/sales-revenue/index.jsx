import React from "react";
import { Link } from "react-router-dom";
import { BarChart } from "../charts";
import "./sales.styles.scss";

const SalesRevenueChart = () => {
  return (
    <div className="sales-revenue-chart">
      <div className="chart-title">
        <h2>Sales Revenue</h2>
        <Link to="/">View</Link>
      </div>
      <div className="sales-chart">
        <BarChart
          labels={[
            "1 Jan",
            "2 Jan",
            "3 jan",
            "4 Jan",
            "5 Jan",
            "6 Jan",
            "7 Jan",
            "8 jan",
            "9 Jan",
            "10 Jan",
          ]}
          values={[2000, 1860, 3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870]}
          colors={["#779341"]}
        />
      </div>
    </div>
  );
};

export default SalesRevenueChart;
