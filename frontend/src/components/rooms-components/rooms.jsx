import React from "react";
import { Table } from "react-bootstrap";
import './rooms.styles.scss';
import ProfilePhoto from '../../images/google.png';

const RoomList = () => {
    return (
        <div className="blist">
            <Table id="table">
                <thead>
                    <tr>
                        <th>Room No.</th>
                        <th>Room Type</th>
                        <th>AC/Non AC</th>
                        <th>Meal</th>
                        <th>Bed Capacity</th>
                        <th>Rate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>Single</td>
                        <td>AC</td>
                        <td>Breakfast</td>
                        <td>1</td>
                        <td>GHC 120.00</td>
                        <td>Booked</td>
                    </tr>
                    <tr>
                        <td>102</td>
                        <td>Single</td>
                        <td>AC</td>
                        <td>Breakfast</td>
                        <td>1</td>
                        <td>GHC 120.00</td>
                        <td>Booked</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td>Single</td>
                        <td>None</td>
                        <td>None</td>
                        <td>1</td>
                        <td>GHC 80.00</td>
                        <td>Open</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RoomList;