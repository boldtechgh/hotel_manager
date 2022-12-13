import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart } from '../charts';
import ComponentTitle from '../component-title';
import InfoCard from '../info-card';
import RoomInfo from '../room-info';
import './dashboard.styles.scss';

const DashComponent = () => {
    return (
        <>
        <ComponentTitle>Dashboard</ComponentTitle>
        <div className='info-section'>
            <InfoCard icon={<FontAwesomeIcon icon={faBuilding} />} name="Rooms" value="200" />
            <InfoCard bgColor="red" icon={<FontAwesomeIcon icon={faBuilding} />} name="Occupied" value="200" />
            <InfoCard bgColor="green" icon={<FontAwesomeIcon icon={faBuilding} />} name="Booked" value="200" />
            <InfoCard bgColor="black" icon={<FontAwesomeIcon icon={faBuilding} />} name="Available" value="200" />
        </div>
        <div className='chart-section'>
            <div className='reservation-chart'>
                <div className='chart-title'>
                    <h2>Reservations</h2>
                    <Link to="/">View</Link>
                </div>
                <BarChart labels={['Reserved', 'Occupied', 'Available','Maintenance']} label="Rooms" values={[20, 50, 125,5]} colors={['red', 'blue', 'green','black']} />
            </div>
            <div className='room-info'>
                 <div className='chart-title'>
                    <h2>Rooms</h2>
                    <Link to="/">View</Link>
                </div>
                <div className='room-info-table'>
                    <RoomInfo />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default DashComponent;