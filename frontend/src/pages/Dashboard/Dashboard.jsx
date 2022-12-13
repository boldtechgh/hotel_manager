import React,{useState} from "react";
import { useParams } from "react-router-dom";
import DashComponent from "../../components/dashboard/dashboard.component";
import Layout from "../../components/layout/layout.component";
import HotelRooms from "../hotel-rooms/hotel-rooms.page";
import { DashboardContext } from "./context";


const Dashboard = (props) => {
    const initialActive = useParams();
    const [active, setActive] = useState(initialActive ? initialActive : 'dashboard');

    const switchActive = (active) => {
        setTimeout(() => setActive(active), 400)
    }

    const switchToDashboard = () => {
        switchActive('dashboard')
    }

    const switchToCheckIn = () => {
        switchActive('checkin')
    }

    const switchToStaff = () => {
        switchActive('staff')
    }

    const contextValue = {
        switchToCheckIn, switchToStaff, switchToDashboard
    }
    return (
        <Layout>
            <DashboardContext.Provider value={contextValue}>
                {active.action === 'dashboard' && <DashComponent />}
             {active.action === 'checkin' && <HotelRooms />} 
            </DashboardContext.Provider>
        </Layout>
    )
}

export default Dashboard;