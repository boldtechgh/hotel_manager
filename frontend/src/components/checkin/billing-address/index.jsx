import {
  faArrowAltCircleRight,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import CustomButton from "../../custom-button/custom-button.component";

const BillingAddress = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "auto", width: "100%" }}
      >
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
        <p>Provide billing information</p>
        <Form className="container-fluid py-3 text-dark">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" placeholder="Enter company name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label htmlFor="inlineFormInputGroup">
                Reference person
              </Form.Label>
              <InputGroup className="mb-2">
                <Form.Control placeholder="Enter reference person's name" />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Check type="checkbox" label="TIN" />

              <InputGroup className="mb-2">
                <Form.Control placeholder="Enter TIN number" />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Check type="checkbox" label="VAT" />

              <InputGroup className="mb-2">
                <Form.Control placeholder="Enter VAT number" />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email address" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label htmlFor="inlineFormInputGroup">Phone</Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control placeholder="Enter phone number" />
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Enter city" />
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

          <div className="d-flex">
            <CustomButton width="10%">
              Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </CustomButton>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BillingAddress;
