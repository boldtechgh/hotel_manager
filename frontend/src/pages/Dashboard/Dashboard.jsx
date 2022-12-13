import React,{useState} from "react";
import { useParams } from "react-router-dom";
import DashComponent from "../../components/dashboard/dashboard.component";
import Layout from "../../components/layout/layout.component";
import { DashboardContext } from "./context";
import StaffPage from "../../components/table/table.component";
import CheckIn from "../../components/checkin/checkin.component";
import HotelsCard from "../../components/hotel/hotel-card.compoinent";
import CheckOut from "../../components/checkout/checkout.component";


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

    const switchToCheckOut = () => {
        switchActive('checkout')
    }
    const switchToHotels = () => {
        switchActive('hotels')
    }

    const contextValue = {
        switchToCheckIn, switchToStaff, switchToHotels,switchToCheckOut,switchToDashboard
    }
    return (
        <Layout>
            <DashboardContext.Provider value={contextValue}>
            {active.action === 'checkout' && <CheckOut />} 
             {active.action === 'checkin' && <CheckIn />} 
             {active.action === 'hotels' && <HotelsCard />} 
             {active.action === 'staff' && <StaffPage />}
            {active.action === 'dashboard' && <DashComponent />}
            </DashboardContext.Provider>
        </Layout>
    )
}

export default Dashboard;