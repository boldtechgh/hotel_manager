import React from 'react';
import './hotel-rooms.styles.scss';
import HotelsCard from '../../components/hotel/hotel-card.compoinent';
// import ModalComponent from '../../components/modal/modal.component';

const HotelRooms = (props) => (
    <div className='hotelrooms'>
        <div className='rooms-page'>
            <div className='Add-form'>
                {/* <ModalComponent /> */}
                </div>
                    <HotelsCard />
            </div>
        </div>
);

export default HotelRooms;