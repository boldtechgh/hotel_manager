import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Table } from "react-bootstrap";
import "./rooms.styles.scss";

import { db } from "../firebase/firebase.utils";
import { UserAuth } from "../firebase/AuthContext";

const RoomTypeList = () => {
  const { user } = UserAuth();
  const idRoom = user?.uid;
  const idRoom1 = user?.uid;
  const [count, setCount] = useState(1);
  const q = query(
    collection(db, "roomTypes"),
    where("hotelChainId", "==", `${idRoom}`)
  );
  const [Roomdata, setRoomData] = useState([]);
  const fetchData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      var data = doc.data();
      setRoomData((arr) => [...arr, data]);
      console.log(doc.id, " => ", doc.data());
    });
    console.log(user);
    console.log("id" + idRoom);
    console.log(user.uid);
    console.log("Data Successfully Retrieved");
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="blist">
      <Table id="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rate(Basic)</th>
            <th>Short Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Roomdata.map((data, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{data.ShortCode}</td>
              <td>{data.typeName}</td>
              <td>{data.typeRate}</td>
              <td>{data.typeStatus}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RoomTypeList;
