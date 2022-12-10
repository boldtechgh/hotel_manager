import React from 'react';
import NavBar from '../../components/navbar/nav-bar.component';
import HotelRooms from '../hotel-rooms/hotel-rooms.page';
import "./dashboard.styles.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardContext } from "./context";
import StaffPage from '../../components/table/table.component';

export const Dashboard = () => {
    const initialActive = useParams();
    const [active, setActive] = useState(initialActive ? initialActive : 'dashboard');

    const switchActive = (active) => {
        setTimeout(() => setActive(active), 400)
    }

    const switchToDashboard = () => {
        switchActive('dashboard')
    }

    const switchToRooms = () => {
        switchActive('rooms')
    }

    const switchToStaff = () => {
        switchActive('staff')
    }

    const contextValue = {
        switchToRooms, switchToStaff
    }

   

const Dashboard = () => { 
        return (
            <div className='dashboard'>
                <NavBar />
                <DashboardContext.Provider value={contextValue}>
                    {active.action === 'rooms' && <HotelRooms />}
                    {active.action === 'staff' && <StaffPage /> }
                </DashboardContext.Provider>
            </div>
        );
            <div className=""></div>
        </div>
    )
}

export default Dashboard;