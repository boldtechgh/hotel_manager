import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import DataTable from "react-data-table-component";
import { UserAuth } from "../firebase/AuthContext";
import { db } from "../firebase/firebase.utils";
import ModalComponent from "../modal/modal.component";
import PaginationComponent from "./pagination.component";
import "./table.styles.scss";

const columns = [
  { name: "Staff Id.", selector: (row) => row.StaffId, sortable: true },
  {
    name: "First Name",
    selector: (row) => row.FirstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.LastName,
    sortable: true,
  },
  {
    name: "Designation",
    selector: (row) => row.Designation,
    sortable: true,
  },
  {
    name: "Email Address",
    selector: (row) => row.Email,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.Department,
  },
  {
    name: "Hotel",
    selector: (row) => row.Hotel,
  },
];

function StaffPage() {
  const { user } = UserAuth();
  const [staffData, setStaffData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    StaffId: "",
    FirstName: "",
    LastName: "",
    Designation: "",
    Email: "",
    Department: "",
    Hotel: "",
    CreatedAt: "",
    hotelChainId: "QDl07LW72pQqzSowmF65YgbPL292",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    console.log("Submitting");
    console.log(formData);
    setLoading(true);
    const userRef = doc(db, `users/${user.uid}`);
    const snapShot = await getDoc(userRef);

    if (snapShot.exists()) {
      console.log("Exist");
      const userRef2 = collection(db, "staffList");
      try {
        await addDoc(userRef2, formData).then(() => {
          console.log("Success");
          setLoading(false);
          document.location.href = "/staff";
        });
      } catch (error) {
        console.log("error creating user", error.message);
        setLoading(false);
      }
    }

    // setActive("");
  };
  const q = query(
    collection(db, "staffList"),
    where("hotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`)
  );

  const q1 = query(
    collection(db, "hotels"),
    where("HotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`)
  );
  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      var data = doc.data();
      setStaffData((arr) => [...arr, data]);
      console.log(doc.id, " => ", doc.data());
    });
    const querySnapshot1 = await getDocs(q1);
    querySnapshot1.forEach((doc1) => {
      // doc.data() is never undefined for query doc snapshots
      var data1 = doc1.data();
      setHotelData((arr) => [...arr, data1]);
      console.log(doc1.id, " => ", doc1.data());
    });
    console.log(user.uid);
    console.log("Data Successfully Retrieved");
  };

  useEffect(() => {
    fetchData();
    console.log("i run once" + user.uid);
    setLoading(false);
  }, []);

  const { FirstName, LastName, Email, Designation, Department, Hotel, Status } =
    formData;
  return (
    <div className="tablestyle">
      <div className="">
        <div className="add-booking">
          <ModalComponent handleSubmit={handleSubmit} title="Add Staff" loading>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="FirstName"
                  autoFocus
                  value={FirstName}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="LastName"
                  value={LastName}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={Email}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="Designation"
                  value={Designation}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="Hotel"
                  onChange={handleChange}
                  value={Hotel}
                >
                  <option disabled>Select Hotel</option>
                  {hotelData.map(({ HotelName, index }) => (
                    <option value={HotelName} key={index}>
                      {HotelName}
                    </option>
                  ))}
                </Form.Select>
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  name="Department"
                  value={Department}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
          </ModalComponent>
        </div>
      </div>
      <div className="tables">
        <DataTable
          columns={columns}
          data={staffData}
          progressPending={isLoading}
          // progressComponent={<CustomLoader />}
          pagination
          striped
        />
      </div>
    </div>
  );
}

export default StaffPage;
