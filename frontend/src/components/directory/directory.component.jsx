import React from 'react';
import HotelCard from '../hotel-cards/hotel-card.component';
import "./directory.styles.scss";
class Directory extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            rooms: [
                {
                    id: '1',
                    name1: 'Room 1',
                    description: 'Description 1'
                },
                {
                    id: '2',
                    name1: 'Room 2',
                    description: 'Description 1'
                },
                {
                    id: '3',
                    name1: 'Room 3',
                    description: 'Description 3',
                },
                {
                    id: '4',
                    name1: 'Room 4',
                    description: 'Description 1'
                }
            ],
            searchFeild:''
        };
    
            
    }

    render() {
        const { rooms, searchFeild } = this.state;
        const filteredRooms = rooms.filter(room =>
            room.name1.toLowerCase().includes(searchFeild.toLowerCase())
        ); 
            return (
                
                <div className='all'>
                    <div className="directory-menu">
                        
                     
                    {filteredRooms.map(({id,name1, description}) => (
                        <HotelCard key={id} name1={name1} description={description}  />
                    ))}
                    </div>  
                    </div>
                    );
}
}

export default Directory;