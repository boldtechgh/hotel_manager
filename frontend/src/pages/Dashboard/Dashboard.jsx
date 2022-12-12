import React,{useState} from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout.component";
import HotelRooms from "../hotel-rooms/hotel-rooms.page";
import { DashboardContext } from "./context";
import StaffPage from "../../components/table/table.component";
import HotelPage from "../Hotel_Setup/hotel.page";

const Dashboard = () => {
    const initialActive = useParams();
    const [active, setActive] = useState(initialActive ? initialActive : 'dashboard');

    const switchActive = (active) => {
        setTimeout(() => setActive(active), 400)
    }
    // const switchToDashboard = () => {
    //     switchActive('dashboard')
    // }

    const switchToCheckIn = () => {
        switchActive('checkin')
    }
    const switchToHotels = () => {
        switchActive('hotels')
    }

    const switchToStaff = () => {
        switchActive('staff')
    }

    const contextValue = {
        switchToCheckIn, switchToStaff, switchToHotels
    }
    return (
        <Layout>
            <DashboardContext.Provider value={contextValue}>
             {active.action === 'checkin' && <HotelRooms />} 
             {active.action === 'hotels' && <HotelPage/>} 
             {active.action === 'staff' && <StaffPage />} 
            </DashboardContext.Provider>
        </Layout>
    )
}

export default Dashboard;