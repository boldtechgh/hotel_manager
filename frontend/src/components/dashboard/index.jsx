import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { BarChart, DoughNut, PieChart } from "../charts";
import ComponentTitle from "../component-title";
import ExpectedArrivals from "../expected-arrivals";
import ExpectedDepartures from "../expected-arrivals/departures";
import InfoCard from "../info-card";
import RoomType from "../room-type";
import "./dashboard.styles.scss";
import LogoImg from "../../images/google.png";
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

          <div className="expected">
            <div className="customers">
              <div className="chart-title">
                <h2>New Customers</h2>
                <Link to="/">View</Link>
              </div>
              <div className="activity">
                <div className="profile-photo">
                  <img src={LogoImg} alt="test" />
                </div>
                <div className="activity-desc">
                  <p className="desc">John Doe requested a room.</p>
                  <p className="time">2 hours ago</p>
                </div>
              </div>
              <div className="activity">
                <div className="profile-photo">
                  <img src={LogoImg} alt="test" />
                </div>
                <div className="activity-desc">
                  <p className="desc">John Doe requested a room.</p>
                  <p className="time">2 hours ago</p>
                </div>
              </div>
              <div className="activity">
                <div className="profile-photo">
                  <img src={LogoImg} alt="test" />
                </div>
                <div className="activity-desc">
                  <p className="desc">John Doe requested a room.</p>
                  <p className="time">2 hours ago</p>
                </div>
              </div>
            </div>
            <ExpectedDepartures />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
