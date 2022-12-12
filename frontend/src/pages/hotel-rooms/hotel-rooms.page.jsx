import React from 'react';
import './hotel-rooms.styles.scss';
import Directory from '../../components/directory/directory.component';
// import ModalComponent from '../../components/modal/modal.component';

const HotelRooms = () => (
    <div className='hotelrooms'>
        <div className='rooms-page'>
            <div className='Add-form'>
                {/* <ModalComponent /> */}
                </div>
            <Directory />
            </div>
        </div>
);

export default HotelRooms;