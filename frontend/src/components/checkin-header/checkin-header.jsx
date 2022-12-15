import React from 'react';
import Tabs from 'react-bootstrap/esm/Tabs';
import Tab from 'react-bootstrap/Tab';
import CheckInDetails from '../checkin-details/checkin-details.component';



const CheckInHeader = () => {
  
    return(
        <>
        <div className='container'>
            <Tabs
      defaultActiveKey="checkin"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Check In Details">
      <CheckInDetails />
      </Tab>
      <Tab eventKey="profile" title="Customer Details">
        Customer Details
      </Tab>
      <Tab eventKey="longer-tab" title="Billing Info">
        Billing Info
      </Tab>
      <Tab eventKey="contact" title="Summary" >
        Summary
      </Tab>
    </Tabs>
            </div>
        </>
    );
}
export default CheckInHeader;