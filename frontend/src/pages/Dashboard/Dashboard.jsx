import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DashComponent from "../../components/dashboard/dashboard.component";
import Layout from "../../components/layout/layout.component";
import { DashboardContext } from "./context";
import StaffPage from "../../components/table/table.component";
import CheckIn from "../../components/checkin/checkin.component";
import HotelsCard from "../../components/hotel/hotel-card.compoinent";
import CheckOut from "../../components/checkout/checkout.component";
import RoomType from "../rooms/roomtypes";
import Rooms from "../rooms";

const Dashboard = (props) => {
  const initialActive = useParams();
  const [active, setActive] = useState(
    initialActive ? initialActive : "dashboard"
  );

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToDashboard = () => {
    switchActive("dashboard");
  };

  const switchToCheckIn = () => {
    switchActive("checkin");
  };

  const switchToStaff = () => {
    switchActive("staff");
  };
  const switchToRoomType = () => {
    switchActive("room-type");
  };
  const switchToRoomList = () => {
    switchActive("room-list");
  };

  const switchToCheckOut = () => {
    switchActive("checkout");
  };
  const switchToHotels = () => {
    switchActive("hotels");
  };

  const contextValue = {
    switchToCheckIn,
    switchToStaff,
    switchToHotels,
    switchToCheckOut,
    switchToDashboard,
    switchToRoomList,
    switchToRoomType,
  };
  return (
    <Layout>
      <DashboardContext.Provider value={contextValue}>
        {active.action === "checkout" && <CheckOut />}
        {active.action === "room-list" && <Rooms />}
        {active.action === "room-type" && <RoomType />}
        {active.action === "hotels" && <HotelsCard />}
        {active.action === "staff" && <StaffPage />}
        {active.action === "dashboard" && <DashComponent />}
      </DashboardContext.Provider>
    </Layout>
  );
};

export default Dashboard;
