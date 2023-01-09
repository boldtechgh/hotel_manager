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
import { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useEffect } from "react";
import { simulateNetworkRequest } from "../checkin-details/checkin-details.component";

const CustomerDetails = ({ onSubmit }) => {
  const [isLoading, setLoading] = useState(false);
  const [customer, setCustomer] = useLocalStorage("hm_customer_details", {});

  //set customer details
  const handleChange = (event) => {
    const { value, name } = event.target;

    setCustomer((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    onSubmit("billing");
  };

  //re-render page to update DOM
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  console.log(customer);

  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "auto", width: "100%" }}
      >
        <FontAwesomeIcon icon={faUser} />
        <p>Provide customer details</p>
        <Form
          className="container-fluid py-3 text-dark"
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                placeholder="Enter customer's surname"
                onChange={handleChange}
                value={customer.surname}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Othernames</Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control
                  id="inlineFormInputGroup"
                  name="othernames"
                  placeholder="Enter customer's other names"
                  onChange={handleChange}
                  value={customer.othernames}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="gender"
                onChange={handleChange}
                value={customer.gender}
              >
                <option>Select customer's gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Nationality</Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control
                  id="inlineFormInputGroup"
                  name="nationality"
                  onChange={handleChange}
                  value={customer.nationality}
                  placeholder="Enter customer's nationality"
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                onChange={handleChange}
                value={customer.email}
                placeholder="Enter customer's email address"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Phone</Form.Label>
              <InputGroup className="mb-2">
                {/* <InputGroup.Text>@</InputGroup.Text> */}
                <Form.Control
                  id="inlineFormInputGroup"
                  name="phone"
                  onChange={handleChange}
                  value={customer.phone}
                  placeholder="Enter customer's phone number"
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address"
              onChange={handleChange}
              value={customer.address}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              name="address2"
              onChange={handleChange}
              value={customer.address2}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="Enter customer's city"
                name="city"
                onChange={handleChange}
                value={customer.city}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Region/State</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="region"
                onChange={handleChange}
                value={customer.region}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="country"
                onChange={handleChange}
                value={customer.country}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                placeholder="Enter zip code"
                name="zip"
                onChange={handleChange}
                value={customer.zip}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Purpose of Visit</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="purpose"
                onChange={handleChange}
                value={customer.purpose}
              >
                <option>Select the purpose of visit</option>
                <option>Business</option>
                <option>Tourism</option>
                <option>Vacation</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Proof of ID</Form.Label>
              <Form.Control type="file" name="proof" onChange={handleChange} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Number of Guest</Form.Label>
              <Form.Control
                placeholder="Enter umber of guest"
                type="number"
                name="guestNumber"
                onChange={handleChange}
                value={customer.guestNumber}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Adults</Form.Label>
              <Form.Control
                placeholder="Enter number of adults"
                type="number"
                name="adultGuests"
                onChange={handleChange}
                value={customer.adultGuests}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Children</Form.Label>
              <Form.Control
                placeholder="Enter number of children"
                type="number"
                name="childGuests"
                onChange={handleChange}
                value={customer.childGuests}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div className="d-flex">
            <CustomButton width="10%">
              {isLoading ? "Loading..." : "Next"}{" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </CustomButton>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CustomerDetails;
