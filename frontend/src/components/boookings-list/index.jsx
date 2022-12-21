import React, { useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import './bookings.styles.scss';
import ProfilePhoto from '../../images/google.png';
// import DataTable from "react-data-table-component";
// import DataTableExtensions from 'react-data-table-component-extensions';
// import 'react-data-table-component-extensions/dist/index.css';

const BookingsList = () => {
//     const columns = [
//     {
//         name: 'Title',
//         selector: row => row.title,
//         sortable: true,
//     },
//     {
//         name: 'Year',
//         selector: row => row.year,
//         sortable: true,
//     },
// ];

// const data = [
//     {
//         id: 1,
//         title: 'Beetlejuice',
//         year: '1988',
//     },
//     {
//         id: 2,
//         title: 'Ghostbusters',
//         year: '1984',
//     },
// ]

// const tableData = {
//     columns,
//     data,
//   };

    return(
        
        <div className="blist">
             {/* <DataTableExtensions
                {...tableData}
                >
                    <DataTable
                        noHeader
                        defaultSortField="id"
                        defaultSortAsc={false}
                        pagination
                        highlightOnHover
                        selectableRows
                        persistTableHead
                    />
                </DataTableExtensions> */}
            
          
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