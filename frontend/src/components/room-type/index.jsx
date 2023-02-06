import React, { useEffect, useMemo, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";
import DataTable from "react-data-table-component";
import { db } from "../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { UserAuth } from "../firebase/AuthContext";
import "./type.styles.scss";

const columns = [
  { name: "Name", selector: (row) => row.typeName, sortable: true },

  {
    name: "Rate",
    selector: (row) => row.typeRate,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.typeStatus,
  },
  {
    name: "No. of Rooms",
    selector: (row) => row.count,
  },
  {
    name: "No. Available",
    selector: (row) => row.available,
  },
];

const RoomType = () => {
  const [roomData, setRoomData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { user } = UserAuth();

  const q = query(
    collection(db, "roomTypes"),
    where("hotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`)
  );

  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      let data = doc.data();

      let query_ = query(
        collection(db, "roomList"),
        where("hotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`),
        where("RoomType", "==", data.typeName)
      );

      let snapShotCount = await getCountFromServer(query_);
      let snapShot = await getDocs(query_);

      data.count = snapShotCount.data().count;

      data.available = 0;
      snapShot.forEach((doc) => {
        console.log(doc.data());
        if (doc.data().Status === "Available") {
          data.available += 1;
        }
      });

      setRoomData((arr) => [...arr, data]);
      console.log(doc.id, " => ", data);
    });
    console.log("Data Successfully Retrieved");
  };

  const title = () => {
    return (
      <div className="chart-title">
        <h2>Room type</h2>
        <Link to="/">View</Link>
      </div>
    );
  };

  useEffect(async () => {
    await fetchData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="room-types">
      <DataTable
        columns={columns}
        data={roomData}
        progressPending={isLoading}
        striped
        selectableRows
        persistTableHead
        responsive={false}
      />
    </div>
  );
};

export default RoomType;
