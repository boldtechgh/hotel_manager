import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ComponentTitle from '../component-title';
import InfoCard from '../info-card';
import './dashboard.styles.scss';

const DashComponent = () => {
    return (
        <>
        <ComponentTitle>Dashboard</ComponentTitle>
        <div className='info-section'>
            <InfoCard icon={<FontAwesomeIcon icon={faBuilding} />} name="Rooms" value="200" />
            <InfoCard bgColor="red" icon={<FontAwesomeIcon icon={faBuilding} />} name="Rooms" value="200" />
            <InfoCard bgColor="green" icon={<FontAwesomeIcon icon={faBuilding} />} name="Rooms" value="200" />
            <InfoCard bgColor="black" icon={<FontAwesomeIcon icon={faBuilding} />} name="Rooms" value="200" />
        </div>
        </>
    )
}

export default DashComponent;