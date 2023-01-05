import {
  faArrowAltCircleRight,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../custom-button/custom-button.component";

const BillingAddress = ({ onSubmit }) => {
  const [isLoading, setLoading] = useState(false);
  const [billingAddress, setBillingAddress] = useLocalStorage(
    "hm_billing_address",
    {}
  );

  //set billing address
  const handleChange = (event) => {
    const { value, name } = event.target;

    setBillingAddress((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setLoading(true);
    onSubmit("summary");
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "auto", width: "100%" }}
      >
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
        <p>Provide billing information</p>
        <Form
          className="container-fluid py-3 text-dark"
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Company name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="companyName"
                onChange={handleChange}
                value={billingAddress.companyName}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label htmlFor="inlineFormInputGroup">
                Reference person
              </Form.Label>
              <InputGroup className="mb-2">
                <Form.Control
                  placeholder="Enter reference person's name"
                  name="refPerson"
                  onChange={handleChange}
                  value={billingAddress.refPerson}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Check type="checkbox" label="TIN" />

              <InputGroup className="mb-2">
                <Form.Control
                  placeholder="Enter TIN number"
                  name="tin"
                  onChange={handleChange}
                  value={billingAddress.tin}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Check type="checkbox" label="VAT" />

              <InputGroup className="mb-2">
                <Form.Control
                  placeholder="Enter VAT number"
                  name="vat"
                  onChange={handleChange}
                  value={billingAddress.vat}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email address"
                name="email"
                onChange={handleChange}
                value={billingAddress.email}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label htmlFor="inlineFormInputGroup">Phone</Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control
                  placeholder="Enter phone number"
                  name="phone"
                  onChange={handleChange}
                  value={billingAddress.phone}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address"
              onChange={handleChange}
              value={billingAddress.address}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="Enter city"
                name="city"
                onChange={handleChange}
                value={billingAddress.city}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Region/State</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="region"
                onChange={handleChange}
                value={billingAddress.region}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="country"
                onChange={handleChange}
                value={billingAddress.country}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                placeholder="Enter zip code"
                name="zip"
                onChange={handleChange}
                value={billingAddress.zip}
              />
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
