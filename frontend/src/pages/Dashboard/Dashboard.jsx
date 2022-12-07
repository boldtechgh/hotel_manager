import React from 'react';
import NavBar from '../../components/navbar/nav-bar.component';
import HotelSideBar from '../../components/sidebar/sidebar.component';
import HotelRooms from '../hotel-rooms/hotel-rooms.page';
class Dashboard extends React.Component { 
 

    render() { 
        return (
            <div>
                <NavBar />
                <HotelSideBar />
                <HotelRooms />
                
            </div>
        );
    }
}

export default Dashboard;