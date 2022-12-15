import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const products = [{'id': '1', 'roomType': 'Panorama', 'rate': 'GHC 600', 'count': '10', 'countAvailable': '8'}];
const columns = [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'roomType',
    text: 'Room Type'
}, {
    dataField: 'rate',
    text: 'Rate'
}, {
    dataField: 'count',
    text: 'Total'
}, {
    dataField: 'countAvailable',
    text: 'Available'
}];

export default (props) => <BootstrapTable keyField="id" data={props.products} columns={props.columns} />