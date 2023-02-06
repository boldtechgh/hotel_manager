import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookingsList from "../../components/boookings-list";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import Layout from "../../components/layout/layout.component";

const Bookings = () => {
  return (
    <Layout>
      <ComponentTitle>
        <h1>Booking List</h1>
        <div className="add-booking">
          <Link to="/checkin">
            <Button className="btn btn-success" title="Add booking">
              <FontAwesomeIcon icon={faAdd} />
            </Button>
          </Link>
        </div>
      </ComponentTitle>
      <SubTitle>List of All bookings</SubTitle>
      <BookingsList />
    </Layout>
  );
};

export default Bookings;
