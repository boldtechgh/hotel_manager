import {
  faBuilding,
  faMoneyBill,
  faDoorOpen,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BarChart, PieChart } from "../charts";
import ComponentTitle from "../component-title";
import ExpectedArrivals from "../expected-arrivals";
import ExpectedDepartures from "../expected-arrivals/departures";
import InfoCard from "../info-card";
import RoomType from "../room-type";
import "./frontdesk.styles.scss";
import LogoImg from "../../images/google.png";
import {
  collection,
  query,
  where,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../firebase/firebase.utils";

const FrontDesk = (props) => {
  const [roomStatus, setRoomStatus] = useState({});
  const [statuses, setStatuses] = useState([
    "Reserved",
    "Available",
    "Maintenance",
    "Occupied",
  ]);

  const fetchStatusCount = () => {
    statuses.forEach(async (status) => {
      let query_ = query(
        collection(db, "roomList"),
        where("hotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`),
        where("Status", "==", status)
      );

      let snapShotCount = await getCountFromServer(query_);

      setRoomStatus((prevState) => {
        return {
          ...prevState,
          [status]: snapShotCount.data().count,
        };
      });
    });
  };

  useEffect(() => {
    fetchStatusCount();
  }, []);

  console.log(roomStatus);
  return (
    <>
      <ComponentTitle>
        <h1>FrontDesk</h1>
      </ComponentTitle>
      <div className="info-section">
        <InfoCard
          bgColor="#779341"
          icon={<FontAwesomeIcon icon={faMoneyBill} />}
          name="Today's Income"
          value="GHc 25,600"
        />
        <InfoCard
          bgColor="#ac3e31"
          icon={<FontAwesomeIcon icon={faMoneyBill} />}
          name="Today's Expenses"
          value="GHc 960"
        />
        <InfoCard
          bgColor="#1F3F49"
          icon={<FontAwesomeIcon icon={faDoorOpen} />}
          name="Expected Arrivals"
          value="8"
        />
        <InfoCard
          bgColor="#7E909A"
          icon={<FontAwesomeIcon icon={faDoorClosed} />}
          name="Expected Departures"
          value="6"
        />
      </div>
      <div className="statistics">
        <div className="top-section">
          <div className="chart-section">
            <div className="reservation-chart">
              <div className="chart-title">
                <div>
                  <h2>Rooms Status</h2>
                  <p>Visualize the current states of rooms</p>
                </div>
                <Link to="/">View</Link>
              </div>
              <PieChart
                labels={statuses}
                label="Rooms"
                values={[
                  roomStatus.Reserved,
                  roomStatus.Available,
                  roomStatus.Maintenance,
                  roomStatus.Occupied,
                ]}
                colors={["#488A99", "#779341", "#ac3e31", "#202020"]}
              />
            </div>
            <div className="room-info">
              <div className="chart-title">
                <div>
                  <h2>Room types</h2>
                  <p>Here are the types of rooms available</p>
                </div>

                <Link to="/">View</Link>
              </div>

              <div className="room-info-table">
                <RoomType />
              </div>
            </div>
          </div>
          <div className="expected">
            <ExpectedArrivals />
            <ExpectedDepartures />
          </div>
        </div>
        <div className="rigth-side-section">
          <div className="hotel-status">
            <div className="chart-title">
              <h2>Current Status</h2>
              <Link to="/">View</Link>
            </div>
            <div className="current-status">
              <div className="desc"></div>
              <div className="room">
                <h3>Rooms</h3>
              </div>
              <div className="percent">
                <h3>Percent</h3>
              </div>
            </div>
            <div className="current-status">
              <div className="desc">
                <h3>Start of Day</h3>
              </div>
              <div className="room">58</div>
              <div className="percent">91%</div>
            </div>
            <div className="current-status">
              <div className="desc">Realized Arrivals</div>
              <div className="room">8</div>
              <div className="percent">13%</div>
            </div>
            <div className="current-status">
              <div className="desc">Realized Departures</div>
              <div className="room">6</div>
              <div className="percent">10%</div>
            </div>
            <div className="current-status">
              <div className="desc">
                <h3>Current Status</h3>
              </div>
              <div className="room">58</div>
              <div className="percent">91%</div>
            </div>
            <div className="current-status">
              <div className="desc">Expected Arrivals</div>
              <div className="room">8</div>
              <div className="percent">13%</div>
            </div>
            <div className="current-status">
              <div className="desc">Expected Departures</div>
              <div className="room">6</div>
              <div className="percent">10%</div>
            </div>
          </div>

          <div className="activities">
            <div className="chart-title">
              <h2>Recent Activity</h2>
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
        </div>
      </div>
    </>
  );
};

export default FrontDesk;
