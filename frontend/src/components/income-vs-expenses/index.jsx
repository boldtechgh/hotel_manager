import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { DoughNut, LineChart } from "../charts";
import "./income-vs-expenses.styles.scss";

const IncomeVsExpense = () => {
  return (
    <div className="balsheet-chart">
      <div className="chart-title">
        <h2>Income vs Expenses</h2>
        <Link to="/">View</Link>
      </div>
      <div className="revenue">
        <div className="revenue">
          <div className="period">
            <h4 className="period-title-income">Income</h4>
            <p className="period-revenue">24,000</p>
            <p className="percent-increase">
              <FontAwesomeIcon icon={faArrowAltCircleUp} /> 3.05%
            </p>
          </div>
          <div className="period">
            <h4 className="period-title-expense">Expenditure</h4>
            <p className="period-revenue">4,000</p>
            <p className="percent-decrease">
              <FontAwesomeIcon icon={faArrowAltCircleDown} /> 3.05%
            </p>
          </div>
        </div>
      </div>

      <LineChart
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
        label="Income"
        label2="Expenses"
        values={[
          2000, 1860, 3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870, 2000,
          1860, 3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870, 2000, 1860,
          3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870,
        ]}
        values2={[
          800, 1200, 450, 80, 1870, 1500, 1460, 3050, 80, 1870, 2030, 1860,
          3450, 5080, 4870, 2000, 1860, 3450, 5080, 4870, 2000, 1860, 3450,
          5080, 4870, 2000, 1860, 3450, 5080, 4870,
        ]}
        colors={["#779341"]}
        colors2={["#ac3e31"]}
        circumference={360}
        radius={100}
      />
      <div></div>
    </div>
  );
};

export default IncomeVsExpense;
