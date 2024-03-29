import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  collection,
  doc,
  getDoc,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import { UserAuth } from "../../components/firebase/AuthContext";
import { db } from "../../components/firebase/firebase.utils";
import Layout from "../../components/layout/layout.component";
import ModalComponent from "../../components/modal/modal.component";
import RoomTypeList from "../../components/rooms-components/room-types";

const RoomType = (props) => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
      const userRef2 = collection(db, `roomTypes/`);
      const createdAt = new Date();
      try {
        await addDoc(userRef2, formData).then(() => {
          console.log("Success");
          setLoading(false);
          document.location.href = "/room-type";
        });
      } catch (error) {
        console.log("error creating user", error.message);
        setLoading(false);
      }
    }

    // setActive("");
  };

  const { typeName, typeRate, shortCode, typeStatus } = formData;
  return (
    <Layout>
      <ComponentTitle>
        <h1>Room Types</h1>
        <div className="add-booking">
          <ModalComponent handleSubmit={handleSubmit}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="typeName"
                  value={typeName}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  type="number"
                  name="typeRate"
                  value={typeRate}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Slug</Form.Label>
                <Form.Control
                  type="text"
                  name="shortCode"
                  value={shortCode}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="typeStatus"
                  value={typeStatus}
                  onChange={handleChange}
                  required
                >
                  <option defaultValue>Active</option>
                  <option>Inactive</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </ModalComponent>
        </div>
      </ComponentTitle>
      <SubTitle>Here is our various room types {user.uid}</SubTitle>
      <RoomTypeList />
    </Layout>
  );
};

export default RoomType;
