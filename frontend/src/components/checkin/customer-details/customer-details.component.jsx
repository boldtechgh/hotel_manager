import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormRange from "react-bootstrap/esm/FormRange";
import InputGroup from "react-bootstrap/InputGroup";
import CustomButton from "../../custom-button/custom-button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const CustomerDetails = () => {
  return (
    //Customer details form
    <>
      <div
        className="container-fluid"
        style={{ height: "auto", width: "100%" }}
      >
        <FontAwesomeIcon icon={faUser} />
        <p>Provide customer details</p>
        <Form className="container-fluid py-3 text-dark">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter customer's surname"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label htmlFor="inlineFormInputGroup">Othernames</Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Enter customer's other names"
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select customer's gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label htmlFor="inlineFormInputGroup">
                Nationality
              </Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Enter customer's nationality"
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter customer's email address"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label htmlFor="inlineFormInputGroup">Phone</Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Enter customer's phone number"
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Enter customer's city" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Region/State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control placeholder="Enter zip code" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Purpose of Visit</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select the purpose of visit</option>
                <option>Business</option>
                <option>Tourism</option>
                <option>Vacation</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Proof of ID</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
          <div className="d-flex">
            {/* <Button variant="success">Next</Button> */}
            <CustomButton width="10%">
              Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </CustomButton>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CustomerDetails;
