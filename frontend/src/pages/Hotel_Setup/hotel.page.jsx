import React from 'react';
import HotelsCard from '../../components/hotel/hotel-card.compoinent';
import "../../components/directory/directory.styles.scss"

const HotelPage = () => {
    return (

        <div className='directory-menu'>
            <HotelsCard></HotelsCard>
        </div>
    );
}
export default HotelPage;