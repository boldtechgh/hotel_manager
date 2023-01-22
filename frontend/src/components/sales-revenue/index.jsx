import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="revenue">
        <div className="period">
          <h4 className="period-title">Monthly</h4>
          <p className="period-revenue">24,000</p>
          <p className="percent-increase">
            <FontAwesomeIcon icon={faArrowAltCircleUp} /> 3.05%
          </p>
        </div>
        <div className="period">
          <h4 className="period-title">Weekly</h4>
          <p className="period-revenue">4,000</p>
          <p className="percent-decrease">
            <FontAwesomeIcon icon={faArrowAltCircleDown} /> 3.05%
          </p>
        </div>
        <div className="period">
          <h4 className="period-title">Daily(Avg)</h4>
          <p className="period-revenue">960</p>
          <p className="percent-decrease">
            <FontAwesomeIcon icon={faArrowAltCircleDown} /> 3.05%
          </p>
        </div>
      </div>
      <div className="sales-chart">
        <BarChart
          label={["Daily Income"]}
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
            "11 Jan",
            "12 Jan",
            "13 jan",
            "14 Jan",
            "15 Jan",
            "16 Jan",
            "17 Jan",
            "18 jan",
            "19 Jan",
            "20 Jan",
            "21 Jan",
            "22 Jan",
            "23 jan",
            "24 Jan",
            "25 Jan",
            "26 Jan",
            "27 Jan",
            "28 jan",
            "29 Jan",
            "30 Jan",
          ]}
          values={[
            2000, 1860, 3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870, 2000,
            1860, 3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870, 2000, 1860,
            3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870,
          ]}
          colors={["#779341"]}
        />
      </div>
    </div>
  );
};

export default SalesRevenueChart;
