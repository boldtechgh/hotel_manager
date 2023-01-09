import React from "react";
import CheckInHeader from "../../components/checkin/checkin-header/checkin-header";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import Layout from "../../components/layout/layout.component";

const CheckIn = () => {
  return (
    <Layout>
      <ComponentTitle>
        <h1>Add a Booking</h1>
        {/* <div className="add-booking">
                <Button className="btn btn-success" title="Add booking"><FontAwesomeIcon icon={faAdd} /></Button>
            </div> */}
      </ComponentTitle>
      <SubTitle>Provide booking details</SubTitle>
      <CheckInHeader />
    </Layout>
  );
};

export default CheckIn;
