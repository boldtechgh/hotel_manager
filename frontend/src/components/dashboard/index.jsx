import React from "react";
import ComponentTitle from "../component-title";
import "./dashboard.styles.scss";
import Card from "./info-card";
import SalesRevenueChart from "../sales-revenue";
import BookingsChart from "../bookings-chart";
import IncomeVsExpense from "../income-vs-expenses";

const DashboardComponent = (props) => {
  return (
    <>
      <ComponentTitle>
        <h1>Dashboard </h1>
      </ComponentTitle>
      <div className="info-section">
        <Card
          title="Total Booking"
          info="11,980"
          othertitle1="This Month"
          othertitle2="This Week"
          otherinfo1="945"
          otherinfo2="1,890"
        />
        <Card
          title="Rooms Available"
          info="580"
          othertitle1="Booked (Month)"
          othertitle2="Booked (Week)"
          otherinfo1="945"
          otherinfo2="180"
        />
        <Card
          title="Expenses"
          info="GHs 110,980"
          othertitle1="This Month"
          othertitle2="This Week"
          otherinfo1="GHs 945"
          otherinfo2="GHs 90"
        />
      </div>
      <div className="analytics">
        <div className="top-section">
          <div className="charts">
            <SalesRevenueChart />
            <BookingsChart />
            <IncomeVsExpense />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
