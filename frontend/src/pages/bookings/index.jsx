import React from "react";
import BookingsList from "../../components/boookings-list";
import ComponentTitle from "../../components/component-title";
import Layout from "../../components/layout/layout.component";

const Bookings = () => {
    return (
        <Layout>
            <ComponentTitle>Booking List</ComponentTitle>
            <BookingsList />
        </Layout>
    )
}

export default Bookings;