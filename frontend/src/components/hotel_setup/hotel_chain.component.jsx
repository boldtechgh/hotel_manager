import {
  faArrowLeft,
  faArrowRight,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { Marginer } from "../marginer";
import "./hotel_setup.styles.scss";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.utils";
import { UserAuth } from "../firebase/AuthContext";

export function HotelChain() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    digitalAddress: "",
    city: "",
    region: "",
    country: "Ghana",
    zipCode: "00233",
  });
  const [active, setActive] = useState("register");

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
  const handleProceed = (event) => {
    event.preventDefault();

    setActive("address");
  };

  const handlePrevious = (event) => {
    event.preventDefault();

    setActive("register");
  };
  const { user } = UserAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userRef = doc(db, `users/${user.uid}`);
    const snapShot = await getDoc(userRef);

    if (snapShot.exists()) {
      const userRef2 = doc(db, `users/${user.uid}/hotelchain/${user.uid}`);
      const createdAt = new Date();
      try {
        await setDoc(userRef2, formData);
        console.log("Success");
        document.location.href = "/dashboard/dashboard";
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }

    // setActive("");
  };

  const {
    name,
    phone,
    email,
    website,
    address,
    digitalAddress,
    city,
    region,
    country,
    zipCode,
  } = formData;

  return (
    <div className="hcmain">
      <form onSubmit={handleSubmit}>
        {active === "register" && (
          <>
            <h2>Register hotel chain</h2>
            <p>Fill in the form below with details of your umbrella company</p>

            <FormInput
              name="name"
              inputType="input"
              type="text"
              placeholder="Enter hotel chain name"
              value={name}
              handleChange={handleChange}
              label="Name"
              required
            />
            <FormInput
              name="phone"
              inputType="input"
              type="tel"
              placeholder="Enter company contact number"
              value={phone}
              onChange={handleChange}
              label="Contact"
              required
            />
            <FormInput
              name="email"
              inputType="input"
              type="email"
              placeholder="Enter the company's Email address"
              value={email}
              onChange={handleChange}
              label="Email"
              required
            />
            <FormInput
              name="website"
              inputType="input"
              type="text"
              placeholder="Enter the URL to the company website (If any)"
              value={website}
              onChange={handleChange}
              label="Website"
              required
            />
            <Marginer direction="vertical" margin={80} />
            <CustomButton onClick={handleProceed}>
              Next <FontAwesomeIcon icon={faArrowRight} />
            </CustomButton>
          </>
        )}
        {active === "address" && (
          <>
            <CustomButton width="20%" height="40px" onClick={handlePrevious}>
              <FontAwesomeIcon icon={faArrowLeft} /> Previous
            </CustomButton>

            <h2>Hotel chain address</h2>
            <p>Please provide information about the location of your company</p>
            <FormInput
              name="address"
              inputType="input"
              type="text"
              placeholder="Residential Address"
              value={address}
              onChange={handleChange}
              label="Address"
              required
            />
            <FormInput
              name="digitalAddress"
              inputType="input"
              type="tel"
              placeholder="Digital Address"
              value={digitalAddress}
              onChange={handleChange}
              label="Digital Address"
              required
            />
            <FormInput
              name="city"
              inputType="input"
              type="City"
              placeholder="City"
              value={city}
              onChange={handleChange}
              label="City"
              required
            />
            <FormInput
              name="region"
              inputType="select"
              type="text"
              placeholder="Enter Region/State/Province"
              value={region}
              onChange={handleChange}
              label="Region/State/Province"
              required
            >
              <option>Select region</option>
              <option>Ahafo</option>
              <option>Ashanti</option>
              <option>Bono East</option>
              <option>Brong Ahafo</option>
              <option>Central</option>
              <option>Eastern</option>
              <option>Greater Accra</option>
              <option>North East</option>
              <option>Northern</option>
              <option>Oti</option>
              <option>Savannah</option>
              <option>Upper East</option>
              <option>Upper West</option>
              <option>Western</option>
              <option>Western North</option>
              <option>Volta</option>
            </FormInput>
            <div className="merge-input">
              <FormInput
                name="country"
                inputType="input"
                type="text"
                placeholder="Enter country"
                value={country}
                onChange={handleChange}
                label="Country"
                required
              />
              <FormInput
                name="zipCode"
                type="text"
                placeholder="Enter Zip Code"
                inputType="input"
                value={zipCode}
                onChange={handleChange}
                label="Zip Code"
                required
              />
            </div>

            <Marginer direction="vertical" margin={50} />
            <CustomButton type="Submit">
              Save <FontAwesomeIcon icon={faFloppyDisk} />
            </CustomButton>
          </>
        )}
      </form>
    </div>
  );
}
