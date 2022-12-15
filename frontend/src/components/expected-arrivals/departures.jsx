import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import InfoTable from "../info-table";
import './arrivals.styles.scss';

const ExpectedDepartures = () => {
    return (
        <div className="expected-arrivals">
            <div className='chart-title'>
                <h2>Expected Departures</h2>
                <Link to="/">View</Link>
            </div>
            {/* <InfoTable
                products = {[{'id': '1', 'source': 'Front desk', 'guest': 'John Doe', 'balance': 'GHC 500'}, {'id': '1', 'source': 'Front desk', 'guest': 'John Doe', 'balance': 'GHC 500'}, {'id': '1', 'source': 'Front desk', 'guest': 'John Doe', 'balance': 'GHC 500'}, {'id': '1', 'source': 'Front desk', 'guest': 'John Doe', 'balance': 'GHC 500'}, {'id': '1', 'source': 'Front desk', 'guest': 'John Doe', 'balance': 'GHC 500'} ]} 

                columns = {[{ dataField: 'id', text: 'Room Number'},  {dataField: 'guest', text: 'Guest Name'}, {dataField: 'source',   text: 'Source'}, {dataField: 'balance',   text: 'Balance'},]}
            /> */}
            <MDBTable align='middle' hover>
            <MDBTableHead>
                <tr className="table-dark">
                    <th scope='col'>Room Number</th>
                    <th scope='col'>Guest Name</th>
                    <th scope='col'>Source</th>
                    <th scope='col'>Balance</th>
                    <th scope='col'>Action</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>
                        101
                    </td>
                    <td>John Doe</td>
                    <td>Front Desk</td>
                    <td>GHC</td>
                    <td>Edit</td>
                </tr>
                <tr>
                   <td>
                        101
                    </td>
                    <td>John Doe</td>
                    <td>Front Desk</td>
                    <td>GHC</td>
                    <td>Edit</td>
                </tr>
                <tr>
                   <td>
                        101
                    </td>
                    <td>John Doe</td>
                    <td>Front Desk</td>
                    <td>GHC</td>
                    <td>Edit</td>
                </tr>
                <tr>
                   <td>
                        101
                    </td>
                    <td>John Doe</td>
                    <td>Front Desk</td>
                    <td>GHC</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>
                        101
                    </td>
                    <td>John Doe</td>
                    <td>Front Desk</td>
                    <td>GHC</td>
                    <td>Edit</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
        </div>
    )
}

export default ExpectedDepartures;