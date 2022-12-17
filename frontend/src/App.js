import React, { Component } from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import HotelSetup from "./pages/Hotel_Setup/hotel_setup";
import { AuthContextProvider } from "./components/firebase/AuthContext";
import CheckIn from "./pages/checkin/chekin.page";
import Bookings from "./pages/bookings";

class App extends Component {
  render() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            // paging: false,
            pagingType: "full_numbers",
            pageLength: 20,
            processing: true,
            dom: "Bfrtip",
            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "pageLength",
                className: "btn btn-success bg-success",
              },
              {
                extend: "copy",
                className: "btn btn-success bg-success",
              },
              {
                extend: "csv",
                className: "btn btn-success bg-success",
              },
              {
                extend: "print",
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "btn btn-success bg-success",
              },
            ],

            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:first", nRow).html(index);
              return nRow;
            },

            lengthMenu: [
              [10, 20, 30, 50, -1],
              [10, 20, 30, 50, "All"],
            ],
            columnDefs: [
              {
                targets: 0,
                render: function (data, type, row, meta) {
                  return type === "export" ? meta.row + 1 : data;
                },
              },
            ],
          });
        }, 1000);
      });
    }

    return (
      <AuthContextProvider>
        <Routes>
          <Route exact path="/:action" element={<Login />} />
          <Route path="/dashboard/:action" element={<Dashboard />} />
          <Route path="/setup/:action" element={<HotelSetup />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </AuthContextProvider>
    );
  }
}

export default App;
