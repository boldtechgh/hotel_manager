import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Table } from "react-bootstrap";
import "./rooms.styles.scss";
import DataTable from "react-data-table-component";
import { db } from "../firebase/firebase.utils";
import { UserAuth } from "../firebase/AuthContext";

const columns = [
  { name: "Name", selector: (row) => row.typeName, sortable: true },
  {
    name: "Slug",
    selector: (row) => row.shortCode,
    sortable: true,
  },
  {
    name: "Rate",
    selector: (row) => row.typeRate,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.typeStatus,
  },
];

const RoomTypeList = () => {
  const [roomData, setRoomData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = UserAuth();
  const idRoom = user?.uid;

  const q = query(
    collection(db, "roomTypes"),
    where("hotelchainId", "==", `${idRoom}`)
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
    console.log(user);
    console.log("id" + idRoom);
    console.log(user.uid);
    console.log("Data Successfully Retrieved");
  };

  useEffect(() => {
    fetchData();
    console.log("i run once");
    setLoading(false);
  }, []);

  return (
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
  );
};

export default RoomTypeList;
