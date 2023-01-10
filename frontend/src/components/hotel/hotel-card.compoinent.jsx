import HotelCard from "../hotel-cards/hotel-card.component";
import ModalComponent from "../modal/modal.component";
import HotelImage from "./download.svg";
import Form from "react-bootstrap/Form";
import { UserAuth } from "../firebase/AuthContext";
import { useState } from "react";
import { db } from "../firebase/firebase.utils";
import { doc, getDoc, setDoc } from "firebase/firestore";
function HotelsCard() {
  const Hotels = [
    {
      id: "1",
      name1: "Hotel  A",
      description: "Description of the hotels",
      imageSrc: HotelImage,
    },
    {
      id: "2",
      name1: "Hotel B",
      description: "Description of the hotels",
      imageSrc: HotelImage,
    },
    {
      id: "3",
      name1: "Hotel C",
      description: "Description of the hotels",
      imageSrc: HotelImage,
    },
  ];
  const HotelModal = {
    id: "3",
    comp: "Hotel Modal",
    title: "Add Hotel",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    HotelName: "",
    HotelContact: "",
    HotelEmail: "",
    HotelPassword: "",
    HotelWebsite: "",
    HotelFloorCount: "",
    HotelCapacity: "",
    HotelCheckInTime: "",
    HotelCheckOutTime: "",
    HotelImageProfile: "",
    HotelDescription: "",
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

  const {
    HotelName,
    HotelContact,
    HotelEmail,
    HotelPassword,
    HotelWebsite,
    HotelFloorCount,
    HotelCapacity,
    HotelCheckInTime,
    HotelCheckOutTime,
    HotelImageProfile,
    HotelDescription,
  } = formData;

  return (
    <>
      <div className="hotelrooms">
        {Hotels.map(({ id, name1, description, imageSrc }) => (
          <div className="cards">
            <HotelCard
              key={id}
              name1={name1}
              description={description}
              imageSrc={imageSrc}
            />
          </div>
        ))}
        <div className="Add-hotel">
          <ModalComponent
            {...HotelModal}
            handleSubmit={handleSubmit}
            loading={loading}
          >
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelName"
                  value={HotelName}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Contact</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelContact"
                  value={HotelContact}
                  onChange={handleChange}
                  required
                />
                <Form.Label>"Hotel E-mail Address</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelEmail"
                  value={HotelEmail}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Password</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelPassword"
                  value={HotelPassword}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Website</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelWebsite"
                  value={HotelWebsite}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Floor Count</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelFloorCount"
                  value={HotelFloorCount}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Room Capacity</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelCapacity"
                  value={HotelCapacity}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Check In Time</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelCheckInTime"
                  value={HotelCheckInTime}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Check Out Time</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="HotelCheckOutTime"
                  value={HotelCheckOutTime}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Image</Form.Label>
                <Form.Control
                  type="file"
                  autoFocus
                  name="HotelImageProfile"
                  value={HotelImageProfile}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Hotel Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="HotelDescription"
                  value={HotelDescription}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
          </ModalComponent>
        </div>
      </div>
    </>
  );
}

export default HotelsCard;
