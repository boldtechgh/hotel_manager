import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./rooms.styles.scss";
import { collection, query, where, getDocs } from "firebase/firestore";

import DataTable from "react-data-table-component";
import { db } from "../../components/firebase/firebase.utils";
import { UserAuth } from "../firebase/AuthContext";

const columns = [
  { name: "Room No.", selector: (row) => row.RoomNo, sortable: true },
  {
    name: "Room Type",
    selector: (row) => row.RoomType,
    sortable: true,
  },
  {
    name: "Bed Capacity",
    selector: (row) => row.BedCapacity,
    sortable: true,
  },
  {
    name: "Rate",
    selector: (row) => row.Rate,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.Description,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.Status,
  },
];

const RoomList = () => {
  const { user } = UserAuth();
  const [roomData, setRoomData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const q = query(
    collection(db, "roomList"),
    where("hotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`)
  );

  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      var data = doc.data();
      setRoomData((arr) => [...arr, data]);
      console.log(doc.id, " => ", doc.data());
    });
    console.log(user.uid);
    console.log("Data Successfully Retrieved");
  };

  useEffect(() => {
    fetchData();
    console.log("i run once" + user.uid);
    setLoading(false);
  }, []);

  return (
    <div className="blist">
      <div className="blist">
        <DataTable
          columns={columns}
          data={roomData}
          progressPending={isLoading}
          // progressComponent={<CustomLoader />}
          pagination
          striped
        />
      </div>
    </div>
  );
};

export default RoomList;
