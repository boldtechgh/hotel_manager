import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import CustomButton from "../custom-button/custom-button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const CheckInDetails = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "auto", width: "100%" }}
      >
        <div className="col">
          <div className="row">
            <Form>
              <Form.Group
                as={Row}
                className="mb-4"
                controlId="formPlaintextEmail"
              >
                <Col sm="4">
                  <Form.Label htmlFor="exampleColorInput">Room Type</Form.Label>
                  <Form.Select size="sm">
                    <option>Suite</option>
                    <option>Deluxe</option>
                  </Form.Select>
                </Col>

                <Col sm="2">
                  <Form.Label htmlFor="exampleColorInput">Room No.</Form.Label>

                  <Form.Select size="sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Select>
                </Col>

                <Col sm="2">
                  <Form.Label htmlFor="exampleColorInput">
                    Room Price
                  </Form.Label>

                  <Form.Control
                    type="number"
                    size="sm"
                    placeholder="Room Price"
                  />
                </Col>
                <Col sm="1">
                  <Form.Label htmlFor="exampleColorInput">Discount </Form.Label>

                  <Form.Control type="number" size="sm" placeholder="0.00" />
                </Col>
                <Col sm="1">
                  <Form.Label htmlFor="exampleColorInput">Total</Form.Label>

                  <Form.Control
                    type="number"
                    size="sm"
                    placeholder="0.00"
                    disabled
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
                    <Col>
                      <Badge pill bg="info" className="justify-content-center">
                        <span className="pt-5 align-center">Room 106</span>
                      </Badge>
                    </Col>
                    <Col>
                      <Badge pill bg="info" className="justify-content-center">
                        <span className="pt-5 align-center">Room 100</span>
                      </Badge>
                    </Col>
                    <Col>
                      <Badge pill bg="info" className="justify-content-center">
                        <span className="pt-5 align-center">Room 211</span>
                      </Badge>
                    </Col>
                    <Col>
                      <Badge pill bg="info" className="justify-content-center">
                        <span className="pt-5 align-center">Room 150</span>
                      </Badge>
                    </Col>
                    <Col>
                      <Badge pill bg="info" className="justify-content-center">
                        <span className="pt-5 align-center">Room 10</span>
                      </Badge>
                    </Col>
                  </Row>
                </Container>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
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
                  <Form.Control as="textarea" rows={3} cols={2} />
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
