import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import { UserAuth } from "../../components/firebase/AuthContext";
import { db } from "../../components/firebase/firebase.utils";
import Layout from "../../components/layout/layout.component";
import ModalComponent from "../../components/modal/modal.component";
import RoomTypeList from "../../components/rooms-components/room-types";

const RoomType = (props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Rate: "",
    shortCode: "",
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
      console.log("Exist");
      const userRef2 = doc(db, `roomTypes/${user.uid}`);
      const createdAt = new Date();
      try {
        await setDoc(userRef2, formData).then(() => {
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
                  autoFocus
                  name="typeRate"
                  value={typeRate}
                  onChange={handleChange}
                  required
                />
                <Form.Label>shortCode</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="shortCode"
                  value={shortCode}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="typeStatus"
                  value={typeStatus}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
          </ModalComponent>
        </div>
      </ComponentTitle>
      <SubTitle>Here is our various room types</SubTitle>
      <RoomTypeList />
    </Layout>
  );
};

export default RoomType;
