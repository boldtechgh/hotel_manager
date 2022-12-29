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
import { Marginer } from "../../marginer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const CheckInDetails = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;

    setRoom((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);

    setRooms((existingRooms) => {
      return [...existingRooms, room];
    });

    // setLoading(false);
  };

  const deleteRoom = (idx) => {
    setRooms((existingRooms) => {
      return [...existingRooms.splice(idx, 1)];
    });
  };

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
            <Form className="container-fluid py-3 text-dark">
              <Form.Group as={Row} className="mb-4">
                <Col sm="4">
                  <Form.Label>Room Type</Form.Label>
                  <Form.Select
                    size="sm"
                    name="roomType"
                    // onChange={handleChange}
                    onInput={handleChange}
                  >
                    <option value="suite">Suite</option>
                    <option value="deluxe">Deluxe</option>
                  </Form.Select>
                </Col>

                <Col sm="2">
                  <Form.Label>Room No.</Form.Label>

                  <Form.Select
                    size="sm"
                    name="roomNumber"
                    // onChange={handleChange}
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
                    // onChange={handleChange}
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
                    // onChange={handleChange}
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
                    // disabled
                    // onChange={handleChange}
                    onInput={handleChange}
                  />
                </Col>
                <Col sm="2" className="justify-content-center">
                  <br></br>
                  <Button
                    // variant="primary"
                    className="add-btn"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                  >
                    {isLoading ? "Loading…" : " + "}
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group className="mb-5">
                <Container
                  className="bg-light container mb-4 d-flex"
                  style={{
                    margin: "0",
                    padding: "20px",
                    minHeight: "120px",
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
                <Form.Group
                  className="mb-4 "
                  style={{ width: "100%" }}
                  stycontrolId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Note</Form.Label>
                  <Form.Control as="textarea" rows={2} cols={2} />
                </Form.Group>
                <div className="d-flex">
                  {/* <Button variant="success">Next</Button> */}
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
