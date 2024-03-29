import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Tabs from "react-bootstrap/esm/Tabs";
import Tab from "react-bootstrap/Tab";
import useLocalStorage from "../../../hooks/useLocalStorage";
import BillingAddress from "../billing-address";
import CheckInDetails, {
  simulateNetworkRequest,
} from "../checkin-details/checkin-details.component";
import CustomerDetails from "../customer-details/customer-details.component";
import BookingSumary from "../summary";
import "./checkin-header.styles.scss";

const CheckInHeader = () => {
  const [activeTab, setActiveTab] = useState();
  const [formData, setFormData] = useState({
    RoomNo: "",
    RoomType: "",
    BedCapacity: "",
    Description: "",
    Rate: "",
    Status: "",
    hotelChainId: "QDl07LW72pQqzSowmF65YgbPL292",
  });

  const activateTab = (tab) => {
    setActiveTab(tab);
  };
  console.log(activeTab);

  return (
    <>
      <div className="container">
        <Tabs
          activeKey={activeTab ? activeTab : "home"}
          id="justify-tab-example"
          className="mb-4"
          fill
        >
          <Tab className="tab" eventKey="home" title="Checkin Details">
            <CheckInDetails onSubmit={activateTab} />
          </Tab>
          <Tab className="tab" eventKey="profile" title="Customer Details">
            <CustomerDetails onSubmit={activateTab} />
          </Tab>
          <Tab className="tab" eventKey="billing" title="Billing Info">
            <BillingAddress onSubmit={activateTab} />
          </Tab>
          <Tab className="tab" eventKey="summary" title="Summary">
            <BookingSumary />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default CheckInHeader;
