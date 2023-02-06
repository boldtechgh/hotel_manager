import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import InfoTable from "../info-table";
import "./arrivals.styles.scss";

const ExpectedArrivals = () => {
  return (
    <div className="expected-arrivals">
      <div className="chart-title">
        <h2>Expected Arrivals</h2>
        <Link to="/">View</Link>
      </div>
      <MDBTable align="middle" hover>
        <MDBTableHead>
          <tr>
            <th scope="col">Reserv. ID</th>
            <th scope="col">Source</th>
            <th scope="col">Guest Name</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>1</td>
            <td>Front Desk</td>
            <td>John Doe</td>
            <td>
              <a href="http://">Checkin</a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Front Desk</td>
            <td>John Doe</td>
            <td>
              <a href="http://">Checkin</a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Front Desk</td>
            <td>John Doe</td>
            <td>
              <a href="http://">Checkin</a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Front Desk</td>
            <td>John Doe</td>
            <td>
              <a href="http://">Checkin</a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Front Desk</td>
            <td>John Doe</td>
            <td>
              <a href="http://">Checkin</a>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default ExpectedArrivals;
