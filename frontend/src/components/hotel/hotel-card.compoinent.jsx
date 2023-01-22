import HotelCard from "../hotel-cards/hotel-card.component";
import ModalComponent from "../modal/modal.component";
import HotelImage from "./download.svg";
import Form from "react-bootstrap/Form";
import { UserAuth } from "../firebase/AuthContext";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase.utils";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
function HotelsCard() {
  const [hotelsData, setHotelsData] = useState([]);
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

  const q = query(
    collection(db, "hotels"),
    where("HotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`)
  );

  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      var data = doc.data();
      setHotelsData((arr) => [...arr, data]);
      console.log(doc.id, " => ", doc.data());
    });
    console.log(user.uid);
    console.log("Data Successfully Retrievedd");
  };

  useEffect(() => {
    fetchData();
    console.log("i run once" + user.uid);
    setLoading(false);
  }, []);

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
    HotelChainId: "QDl07LW72pQqzSowmF65YgbPL292",
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
      const userRef2 = collection(db, "hotels");
      const createdAt = new Date();
      try {
        await addDoc(userRef2, formData).then(() => {
          console.log("Success");
          setLoading(false);
          document.location.href = "/hotels";
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
    HotelChainId,
  } = formData;

  return (
    <>
      <div className="hotelrooms">
        {hotelsData.map(
          ({
            index,
            HotelName,
            HotelDescription,
            HotelFloorCount,
            HotelCheckInTime,
            HotelCheckOutTime,
            HotelEmail,
            HotelContact,
          }) => (
            <div className="cards">
              <HotelCard
                key={index}
                name1={HotelName}
                description={HotelDescription}
                HotelFloorCount={HotelFloorCount}
                HotelCheckInTime={HotelCheckInTime}
                HotelCheckOutTime={HotelCheckOutTime}
                HotelContact={HotelContact}
                HotelEmail={HotelEmail}
              />
            </div>
          )
        )}
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
                  placeholder="Hotel"
                  name="HotelName"
                  value={HotelName}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="024 000 00000"
                  name="HotelContact"
                  value={HotelContact}
                  onChange={handleChange}
                  required
                />
                <Form.Label>"Hotel E-mail Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="hotel@mail.com"
                  name="HotelEmail"
                  value={HotelEmail}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="********"
                  name="HotelPassword"
                  value={HotelPassword}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Website</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="example.com"
                  name="HotelWebsite"
                  value={HotelWebsite}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Floor Count</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="HotelFloorCount"
                  value={HotelFloorCount}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Room Capacity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="HotelCapacity"
                  value={HotelCapacity}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Check In Time</Form.Label>
                <Form.Control
                  type="time"
                  autoFocus
                  name="HotelCheckInTime"
                  value={HotelCheckInTime}
                  onChange={handleChange}
                  required
                />
                <Form.Label>Hotel Check Out Time</Form.Label>
                <Form.Control
                  type="time"
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
