import React from "react";
import { Table } from "react-bootstrap";
import './rooms.styles.scss';

const RoomTypeList = () => {
    return (
        <div className="blist">
            <Table id="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Rate(Basic)</th>
                        <th>Short Code</th>
                        <th>No. of Rooms</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Single Room</td>
                        <td>GHC 120.00</td>
                        <td>SR</td>
                        <td>40</td>
                        <td>5 star</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Delux</td>
                        <td>GHC 520.00</td>
                        <td>DLUX</td>
                        <td>40</td>
                        <td>5 star</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Double</td>
                        <td>GHC 220.00</td>
                        <td>DD</td>
                        <td>50</td>
                        <td>5 star</td>
                        <td>Active</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RoomTypeList;