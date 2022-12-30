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

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const CheckInDetails = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [rooms, setRooms] = useLocalStorage("hm_booking_room_details", []);
  const [note, setNote] = useLocalStorage("hm_booking_note", null);
  // const [activeTab, setActiveTab] = useLocalStorage(
  //   "hm_booking_active_tab",
  //   null
  // );
  const [room, setRoom] = useState({});
  const [sameDate, setSameDate] = useState(true);

  //set room properties
  const handleChange = (event) => {
    const { value, name } = event.target;

    setRoom((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

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

  //delete a room from rooms list
  const deleteRoom = (idx) => {
    setLoading(true);
    rooms.splice(idx, 1);
    setRooms([...rooms]);
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    props.onSubmit("profile");
  };

  //rerender page to update DOM
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
                    <option value="suite">Suite</option>
                    <option value="deluxe">Deluxe</option>
                  </Form.Select>
                </Col>

                <Col sm="2">
                  <Form.Label>Room No.</Form.Label>

                  <Form.Select
                    size="sm"
                    name="roomNumber"
                    onInput={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
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
              <Form.Group className="mb-5">
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
                        <Form.Control type="datetime-local" />
                      </Col>
                      <Col sm="6">
                        <Form.Label>Departure</Form.Label>
                        <Form.Control type="datetime-local" />
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
