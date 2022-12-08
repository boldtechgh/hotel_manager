import { faArrowRight, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { Marginer } from "../marginer";
import './hotel_setup.styles.scss';

export function HotelChain () {
    const [active, setActive] = useState('register')
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [digitalAddress, setDigitalAddress] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleChange = (event) => {
        const { value, name } = event.target;

        {name === 'name' && setName(value)}
        {name === 'phone' && setPhone(value)}
        {name === 'email' && setEmail(value)}
        {name === 'website' && setWebsite(value)}    
    };
    console.log(name, phone, email, website, active);

    const handleProceed = (event) => {
        event.preventDefault();

        setActive('address');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setActive('');
    }

    return (
        <div className="hcmain">
            {active === 'register' && 
            <>
            <h2>Register hotel chain</h2>
            <p>Fill in the form below with details of your umbrella company</p>
            <form onSubmit={handleProceed}>
                <FormInput name='name'
                type='text'
                placeholder= 'Company name'
                value={name}
                onChange={handleChange}
                required />
                <FormInput name='phone'
                type='tel'
                placeholder= 'Phone number'
                value={phone}
                onChange={handleChange}
                required />
                <FormInput name='email'
                type='email'
                placeholder= 'Email address'
                value={email}
                onChange={handleChange}
                required />
                <FormInput name='website'
                type='text'
                placeholder= "Company's website"
                value={website}
                onChange={handleChange}
                required />
                <Marginer direction="vertical" margin={50} />
                <CustomButton type="Submit">Proceed <FontAwesomeIcon icon={faArrowRight} /></CustomButton>
            </form>
            </>
            }

            {active === 'address' && 
            <>
            <h2>Hotel chain address</h2>
            <p>Please provide information about the location of your company</p>
            <form onSubmit={handleSubmit}>
                <FormInput name='address'
                type='text'
                placeholder= 'Address'
                value={address}
                onChange={handleChange}
                required />
                <FormInput name='digitalAddress'
                type='tel'
                placeholder= 'Digital Address'
                value={digitalAddress}
                onChange={handleChange}
                required />
                <FormInput name='city'
                type='City'
                placeholder= 'City'
                value={city}
                onChange={handleChange}
                required />
                <FormInput name='region'
                type='text'
                placeholder= "Region/State"
                value={region}
                onChange={handleChange}
                required />
                <FormInput name='country'
                type='text'
                placeholder= "Country"
                value={country}
                onChange={handleChange}
                required />
                <FormInput name='zipCode'
                type='text'
                placeholder= "Zip_Code"
                value={zipCode}
                onChange={handleChange}
                required />
                <Marginer direction="vertical" margin={50} />
                <CustomButton type="Submit">Submit <FontAwesomeIcon icon={faFloppyDisk} /></CustomButton>
            </form>
            </>
            }
        </div>
    )
}