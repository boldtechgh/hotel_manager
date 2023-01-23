import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../custom-button/custom-button.component";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import { UserAuth } from "../../firebase/AuthContext";
import RoomList from "../../rooms-components/rooms";

export function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const CheckInDetails = ({ onSubmit }) => {
  const { user } = UserAuth();
  const [roomTypeList, setRoomTypeList] = useState([]);
  const [roomListData, setRoomListData] = useState([]);
  const [roomListId, setRoomListId] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [rooms, setRooms] = useLocalStorage("hm_booking_room_details", []);
  const [note, setNote] = useLocalStorage("hm_booking_note", null);
  const [room, setRoom] = useState({});
  const [sameDate, setSameDate] = useState(true);
  const [RoomType, setRoomType] = useState();

  //set room properties
  const handleChange = (event) => {
    const { value, name } = event.target;
    setRoomType(() => {
      return {
        roomType: value,
      };
    });
    setRoom((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const { roomType } = room;
  console.log(RoomType);
  const q = query(
    collection(db, "roomList"),
    where("hotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`),
    where("RoomType", "==", `${RoomType}`)
  );
  const q1 = query(
    collection(db, "roomTypes"),
    where("hotelChainId", "==", `QDl07LW72pQqzSowmF65YgbPL292`),
    where("typeStatus", "==", `Active`)
  );
  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(q);
    const querySnapshot1 = await getDocs(q1);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      var data = doc.data();
      setRoomListData((arr) => [...arr, data]);
      console.log(doc.id, " => ", doc.data());
    });
    querySnapshot1.forEach((doc1) => {
      // doc.data() is never undefined for query doc snapshots
      var data1 = doc1.data();
      setRoomTypeList((arr) => [...arr, data1]);
      console.log(doc1.id, " => ", doc1.data());
    });
    console.log(user.uid);
    console.log("Data Successfully Retrieved");
  };

  useEffect(() => {
    fetchData();
    console.log("i run once" + user.uid);
    setLoading(false);
  }, [room]);
  //set same/different arrival/departure dates
  const handleChecked = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setLoading(true);

      setSameDate(value === "true");
    }
  };

  //add room to rooms list
  const handleClick = () => {
    setLoading(true);

    setRooms((existingRooms) => {
      return [...existingRooms, room];
    });

    setRoom({});
  };

  const deleteRoom = (idx) => {
    setLoading(true);
    rooms.splice(idx, 1);
    setRooms([...rooms]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    onSubmit("profile");
  };

  //re-render page to update DOM
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  console.log(room);
  console.log(rooms);

  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "auto", width: "100%" }}
      >
        <FontAwesomeIcon icon={faHome} />
        <p>Select rooms and set arrival and departure dates</p>
        <div className="col">
          <div className="row">
            <Form
              className="container-fluid py-3 text-dark"
              onSubmit={handleSubmit}
            >
              <Form.Group as={Row} className="mb-4">
                <Col sm="4">
                  <Form.Label>Room Type</Form.Label>
                  <Form.Select size="sm" name="roomType" onInput={handleChange}>
                    <option disabled>Select Room Type</option>
                    {roomTypeList.map(({ typeName, index }) => (
                      <option value={typeName} key={index}>
                        {typeName}
                      </option>
                    ))}
                  </Form.Select>
                </Col>

                <Col sm="2">
                  <Form.Label>Room No.</Form.Label>

                  <Form.Select
                    size="sm"
                    name="roomNumber"
                    onInput={handleChange}
                  >
                    <option disabled>Select Room</option>
                    {roomListData.map(({ RoomNo, index }) => (
                      <option value={RoomNo} key={index}>
                        {RoomNo}
                      </option>
                    ))}
                  </Form.Select>
                </Col>

                <Col sm="2">
                  <Form.Label>Room Price</Form.Label>

                  <Form.Control
                    type="number"
                    name="rate"
                    size="sm"
                    placeholder="Room Price"
                    onInput={handleChange}
                  />
                </Col>
                <Col sm="1">
                  <Form.Label>Discount </Form.Label>

                  <Form.Control
                    type="number"
                    name="discount"
                    size="sm"
                    placeholder="0.00"
                    onInput={handleChange}
                  />
                </Col>
                <Col sm="1">
                  <Form.Label>Total</Form.Label>

                  <Form.Control
                    type="number"
                    name="total"
                    size="sm"
                    placeholder="0.00"
                    onInput={handleChange}
                  />
                </Col>
                <Col sm="1" className="justify-content-center">
                  {/* <br /> */}
                  <Button
                    className="add-btn"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                  >
                    +
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group className="mb-2">
                <Container
                  className="bg-light container mb-4 d-flex"
                  style={{
                    margin: "0",
                    padding: "20px",
                    minHeight: "80px",
                    width: "100%",
                  }}
                >
                  <Row xs="sm" className="text-center">
                    {rooms.map((room, idx) => (
                      <Col>
                        <Button className="btn btn-info">
                          <span className="pt-5 align-center">
                            Room {room.roomNumber}
                          </span>{" "}
                          <Badge
                            pill
                            bg="danger"
                            title="delete room"
                            onClick={() => deleteRoom(idx)}
                          >
                            x
                          </Badge>
                        </Button>
                      </Col>
                    ))}
                  </Row>
                </Container>
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Check
                      className="checkbox"
                      type="checkbox"
                      label="Same Arrival/Departure dates"
                      value={true}
                      checked={sameDate}
                      onChange={handleChecked}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Check
                      className="checkbox"
                      type="checkbox"
                      label="Different Arrival/Departure dates"
                      value={false}
                      checked={sameDate === false}
                      onChange={handleChecked}
                    />
                  </Form.Group>
                </Row>
                {sameDate && (
                  <Form.Group className="mb-4">
                    <Row>
                      <Col sm="6">
                        <Form.Label>Arrival</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          onChange={(e) => {
                            rooms.map(
                              (room) => (
                                (room.arrival = e.target.value),
                                setRooms([...rooms])
                              )
                            );
                          }}
                        />
                      </Col>
                      <Col sm="6">
                        <Form.Label>Departure</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          onChange={(e) => {
                            rooms.map(
                              (room) => (
                                (room.departure = e.target.value),
                                setRooms([...rooms])
                              )
                            );
                          }}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                )}
                {!sameDate &&
                  rooms.map((room, idx) => (
                    <Form.Group className="mb-4">
                      <Row>
                        <Form.Label className="roomDate">
                          Room {room.roomNumber}
                        </Form.Label>
                      </Row>
                      <Row>
                        <Col sm="6">
                          <Form.Label>Arrival</Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="arrival"
                            value={room.arrival}
                            onChange={(e) => {
                              room.arrival = e.target.value;
                              setRooms([...rooms]);
                            }}
                          />
                        </Col>
                        <Col sm="6">
                          <Form.Label>Departure</Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="departure"
                            value={room.departure}
                            onChange={(e) => {
                              room.departure = e.target.value;
                              setRooms([...rooms]);
                            }}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  ))}
                <Form.Group
                  className="mb-4 "
                  style={{ width: "100%" }}
                  stycontrolId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    cols={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex">
                  <CustomButton width="10%">
                    Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </CustomButton>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckInDetails;
