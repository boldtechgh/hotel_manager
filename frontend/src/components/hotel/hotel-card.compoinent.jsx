import HotelCard from '../hotel-cards/hotel-card.component';
import ModalComponent from '../modal/modal.component';
import HotelImage from './download.svg';

function HotelsCard() {
    const Hotels = [
        {
            id: '1',
            name1: 'Hotel  A',
            description: 'Description of the hotels',
            imageSrc: HotelImage
        },
        {
            id: '2',
            name1: 'Hotel B',
            description: 'Description of the hotels',
            imageSrc: HotelImage
        },
        {
            id: '3',
            name1: 'Hotel C',
            description: 'Description of the hotels',
            imageSrc: HotelImage
        }
    ];
    const HotelModal = {
        id: '3',
        comp:'Hotel Modal',
        title: 'Add Hotel',
        label1: 'Hotel Name',
        label2: 'Hotel Contact',
        label3: 'Hotel E-mail Address',
        label4: 'Hotel Password',
        label5: 'Hotel Website',
        textArea: 'Hotel Description',
        label7: 'Hotel Floor Count',
        label8: 'Hotel Room Capacity',
        label9: 'Hotel Check In Time',
        file:'Hotel Image',
        label10: 'Hotel Check Out Time'     
    }
    return (
        <>
        
            <div className="hotelrooms">
            
            {Hotels.map(({id,name1, description,imageSrc}) => (
                <div className="cards">
                    <HotelCard key={id} name1={name1} description={description} imageSrc={imageSrc} />
                        </div>
            ))}
                <div className='Add-hotel'>
                 <ModalComponent {...HotelModal}  />
                </div>
            </div>
            </>
  );
}

export default HotelsCard;