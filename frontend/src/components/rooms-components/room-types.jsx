import React, { useEffect, useMemo, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Form, Table } from "react-bootstrap";
import "./rooms.styles.scss";
import DataTable from "react-data-table-component";
import { db } from "../firebase/firebase.utils";
import { UserAuth } from "../firebase/AuthContext";
import { Export } from "react-data-table-component-extensions/dist/ui";

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

const RoomTypeList = (props) => {
  const [roomData, setRoomData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = roomData.filter(
    (item) =>
      item.typeName &&
      item.typeName.toLowerCase().includes(filterText.toLowerCase())
  );

  const FilterComponent = ({ onFilter, onClear, filterText }) => {
    return (
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            onChange={onFilter}
            // onClear={onClear}
            value={filterText}
            placeholder="Search"
          />
        </Form.Group>
      </Form>
    );
  };

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  const { user } = UserAuth();

  const q = query(
    collection(db, "roomTypes"),
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

  useEffect(async () => {
    await fetchData().then(() => {
      setLoading(false);
    });
    console.log("i run once" + user.uid);
  }, []);

  return (
    <div className="blist">
      <DataTable
        title="Room Types"
        columns={columns}
        data={filteredItems}
        progressPending={isLoading}
        // progressComponent={<CustomLoader />}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        striped
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
      />
    </div>
  );
};

export default RoomTypeList;
