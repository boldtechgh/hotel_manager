import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { Marginer } from "../marginer";
import './hotel_setup.styles.scss';

export function HotelChain () {
    return (
        <div className="hcmain">
            <h2>Register hotel chain</h2>
            <p>Fill in the form below with details of your umbrella company</p>
            <form action="">
                <FormInput name='name'
                type='name'
                placeholder= 'Company name'
                required />
                <FormInput name='phone'
                type='phone'
                placeholder= 'Phone number'
                required />
                <FormInput name='email'
                type='email'
                placeholder= 'Email address'
                required />
                <FormInput name='website'
                type='website'
                placeholder= "Company's website"
                required />
                <Marginer direction="vertical" margin={50} />
                <CustomButton type="Submit">Proceed <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></CustomButton>
            </form>
        </div>
    )
}