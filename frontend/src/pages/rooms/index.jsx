import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import { UserAuth } from "../../components/firebase/AuthContext";
import { db } from "../../components/firebase/firebase.utils";
import Layout from "../../components/layout/layout.component";
import ModalComponent from "../../components/modal/modal.component";
import RoomList from "../../components/rooms-components/rooms";

const Rooms = (props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    RoomType: "",
    AC: "",
    Meal: "",
    BedCapacity: "",
    Rate: "",
    Status: "",
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

  const { user } = UserAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    console.log("Submitting");
    console.log(formData);
    setLoading(true);
    const userRef = doc(db, `users/${user.uid}`);
    const snapShot = await getDoc(userRef);

    if (snapShot.exists()) {
      console.log("Submitting");
      const userRef2 = doc(
        db,
        `users/${user.uid}/hotelchain/${user.uid}/hotels/${user.uid}`
      );
      const createdAt = new Date();
      try {
        await setDoc(userRef2, formData).then(() => {
          console.log("Success");
          setLoading(false);
          document.location.href = "/dashboard/hotels";
        });
      } catch (error) {
        console.log("error creating user", error.message);
        setLoading(false);
      }
    }

    // setActive("");
  };

  const { RoomType, AC, Meal, BedCapacity, Rate, Status } = formData;
  return (
    <Layout>
      <ComponentTitle>
        <h1>Room List</h1>
        <div className="add-booking">
          <ModalComponent handleSubmit={handleSubmit}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Room Type</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="RoomType"
                  value={RoomType}
                  onChange={handleChange}
                  required
                />
                <Form.Label>AC</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="AC"
                  value={AC}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Meal</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="Meal"
                  value={Meal}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Bed Capacity</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="BedCapacity"
                  value={BedCapacity}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
          </ModalComponent>
        </div>
      </ComponentTitle>
      <SubTitle>List of all rooms</SubTitle>
      <RoomList />
    </Layout>
  );
};

export default Rooms;
