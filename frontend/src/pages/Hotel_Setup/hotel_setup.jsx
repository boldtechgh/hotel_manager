import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { HotelChain } from "../../components/hotel_setup/hotel_chain.component";
import { BrandLogo } from "../../components/Logo";
import { SetupContext } from "./context";
import './hotel_setup.styles.scss';


const HotelSetup = () => {
    const initialActive = useParams();
    const [active, setActive] = useState(initialActive ? initialActive : 'hotel_chain');

    const switchActive = (active) => {
        setTimeout(() => setActive(active), 400)
    }

    const switchToChain = () => {
        switchActive('hotel_chain')
    }

    const switchToHotel = () => {
        switchActive('hotel')
    }

    const contextValue = {
        switchToChain, switchToHotel
    }

    return (
        <div className="hsmain">
             <BrandLogo hideLogo />
            <div className="hsform">
               
                <SetupContext.Provider value={contextValue}>
                    {active.action === 'hotel_chain' && <HotelChain />}
                </SetupContext.Provider>
            </div>
            <div className="hsimage"></div>
        </div>
    )
}
export default HotelSetup;