import React from "react";
import './type.styles.scss';
import Table from 'react-bootstrap/Table';

const RoomType = () => {
    return (
        <div>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Room Type</th>
                        <th>Rate</th>
                        <th>Total Count</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Panorama</td>
                        <td>GHC 500</td>
                        <td>37</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Deluxe</td>
                        <td>GHC 850</td>
                        <td>15</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Panorama</td>
                        <td>GHC 500</td>
                        <td>37</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Deluxe</td>
                        <td>GHC 850</td>
                        <td>15</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Panorama</td>
                        <td>GHC 500</td>
                        <td>37</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Deluxe</td>
                        <td>GHC 850</td>
                        <td>15</td>
                        <td>12</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RoomType;