import React from 'react';
import NavBar from '../../components/navbar/nav-bar.component';
import HotelRooms from '../hotel-rooms/hotel-rooms.page';
import "./dashboard.styles.scss";

const Dashboard = () => { 
        return (
            <div className='dashboard'>
                
                <NavBar />
                <HotelRooms />
            </div>
        );
}

export default Dashboard;