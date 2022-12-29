import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tabs from "react-bootstrap/esm/Tabs";
import Tab from "react-bootstrap/Tab";
import BillingAddress from "../billing-address";
import CheckInDetails from "../checkin-details/checkin-details.component";
import CustomerDetails from "../customer-details/customer-details.component";
import "./checkin-header.styles.scss";

const CheckInHeader = () => {
  return (
    <>
      <div className="container">
        <Tabs
          defaultActiveKey="home"
          id="justify-tab-example"
          className="mb-4"
          fill
        >
          <Tab className="tab" eventKey="home" title="Checkin Details">
            <CheckInDetails />
          </Tab>
          <Tab className="tab" eventKey="profile" title="Customer Details">
            <CustomerDetails />
          </Tab>
          <Tab className="tab" eventKey="longer-tab" title="Billing Info">
            <BillingAddress />
          </Tab>
          <Tab className="tab" eventKey="contact" title="Summary">
            Summary
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default CheckInHeader;
