import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { Marginer } from "../marginer";
import './hotel_setup.styles.scss';

export function HotelChain () {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    return (
        <div className="hcmain">
            <h2>Register hotel chain</h2>
            <p>Fill in the form below with details of your umbrella company</p>
            <form action="">
                <FormInput name='name'
                type='text'
                placeholder= 'Company name'
                value={name}
                required />
                <FormInput name='phone'
                type='tel'
                placeholder= 'Phone number'
                value={phone}
                required />
                <FormInput name='email'
                type='email'
                placeholder= 'Email address'
                value={email}
                required />
                <FormInput name='website'
                type='text'
                placeholder= "Company's website"
                value={website}
                required />
                <Marginer direction="vertical" margin={50} />
                <CustomButton type="Submit">Proceed <FontAwesomeIcon icon={faArrowRight} /></CustomButton>
            </form>
        </div>
    )
}