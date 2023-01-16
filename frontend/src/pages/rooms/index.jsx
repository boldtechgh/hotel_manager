import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import { UserAuth } from "../../components/firebase/AuthContext";
import { db } from "../../components/firebase/firebase.utils";
import Layout from "../../components/layout/layout.component";
import ModalComponent from "../../components/modal/modal.component";
import RoomList from "../../components/rooms-components/rooms";

const Rooms = (props) => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    RoomNo: "",
    RoomType: "",
    BedCapacity: "",
    Description: "",
    Rate: "",
    Status: "",
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
      const userRef2 = collection(db, "roomList");
      try {
        await addDoc(userRef2, formData).then(() => {
          console.log("Success");
          setLoading(false);
          document.location.href = "/dashboard/room-list";
        });
      } catch (error) {
        console.log("error creating user", error.message);
        setLoading(false);
      }
    }

    // setActive("");
  };

  const {
    RoomNo,
    RoomType,
    BedCapacity,
    Description,
    Rate,
    hotelChainId,
    Status,
  } = formData;
  return (
    <>
      <ComponentTitle>
        <h1>Room List </h1>
        <div className="add-booking">
          <ModalComponent handleSubmit={handleSubmit} title="Add Room" loading>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                  type="text"
                  name="RoomNo"
                  autoFocus
                  value={RoomNo}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Room Type</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="RoomType"
                  onChange={handleChange}
                  value={RoomType}
                >
                  <option disabled>Select Room Type</option>
                  <option>Suite</option>
                  <option>Double</option>
                  <option>Single</option>
                </Form.Select>
                <Form.Label>Bed Capacity</Form.Label>
                <Form.Control
                  type="number"
                  name="BedCapacity"
                  value={BedCapacity}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  value={Description}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  type="text"
                  name="Rate"
                  value={Rate}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Status</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="Status"
                  onChange={handleChange}
                  value={Status}
                >
                  <option disabled>Room Status</option>
                  <option>Available</option>
                  <option>Not Available</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </ModalComponent>
        </div>
      </ComponentTitle>
      <SubTitle>List of all rooms</SubTitle>
      <RoomList />
    </>
  );
};

export default Rooms;
