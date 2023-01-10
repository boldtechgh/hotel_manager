import React from "react";
import { Table } from "react-bootstrap";
import "./rooms.styles.scss";
import { db } from "../../components/firebase/firebase.utils";
import { UserAuth } from "../firebase/AuthContext";
import { async } from "@firebase/util";

const RoomList = () => {
  const { user } = UserAuth();
  return (
    <div className="blist">
      <Table id="table">
        <thead>
          <tr>
            <th>Room No.</th>
            <th>Room Type</th>
            <th>Bed Capacity</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {async () => {
            db.collection("users")
              .doc(`${user}`)
              .collection("hotelchain")
              .get()
              .then((snap) => {
                snap.forEach((doc) => {
                  // <tr><td>{doc.data().roomtype}</td></tr>
                  console.log(doc.id, " => ", doc.data());
                });
              });
          }}
        </tbody>
      </Table>
    </div>
  );
};

export default RoomList;
