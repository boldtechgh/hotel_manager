import React from "react";
import { Table } from "react-bootstrap";
import './bookings.styles.scss';
import ProfilePhoto from '../../images/google.png';

const BookingsList = () => {
    

    return(
        <div className="blist">
            <Table id="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Guest Name</th>
                        <th>Mobile</th>
                        <th>Room Type</th>
                        <th>Arrival</th>
                        <th>Departure</th>
                        <th>Status</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="guest-name">
                                <div className="profile-photo">
                                    <img src={ProfilePhoto} alt="photo" />
                                </div>
                                <div className="name-email">
                                    <p className="name">John Doe</p>
                                    <p className="email">jdoe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>0548694211</td>
                        <td>Deluxe</td>
                        <td>17/12/2022</td>
                        <td>31/01/2023</td>
                        <td>Confirmed</td>
                        <td>Paid</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="guest-name">
                                <div className="profile-photo">
                                    <img src={ProfilePhoto} alt="photo" />
                                </div>
                                <div className="name-email">
                                    <p className="name">John Doe</p>
                                    <p className="email">jdoe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>0548694211</td>
                        <td>Deluxe</td>
                        <td>17/12/2022</td>
                        <td>31/01/2023</td>
                        <td>Confirmed</td>
                        <td>Paid</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="guest-name">
                                <div className="profile-photo">
                                    <img src={ProfilePhoto} alt="photo" />
                                </div>
                                <div className="name-email">
                                    <p className="name">John Doe</p>
                                    <p className="email">jdoe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>0548694211</td>
                        <td>Deluxe</td>
                        <td>17/12/2022</td>
                        <td>31/01/2023</td>
                        <td>Confirmed</td>
                        <td>Paid</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default BookingsList;