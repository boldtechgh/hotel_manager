import React from 'react';
import HotelCard from '../hotel-cards/hotel-card.component';
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();
    
        this.state = {
            rooms: [
                {
                    id: '1',
                    name1: 'Room 1',
                    description: 'Description 1',
                    imageSrc: 'https://placekitten.com/320/320'
                },
                {
                    id: '2',
                    name1: 'Room 2',
                    description: 'Description 1',
                    imageSrc: 'https://placekitten.com/320/320'
                },
                {
                    id: '3',
                    name1: 'Room 3',
                    description: 'Description 3',
                    imageSrc: 'https://placekitten.com/320/320'
                },
                {
                    id: '4',
                    name1: 'Room 4',
                    description: 'Description 1',
                    imageSrc: 'https://placekitten.com/320/320'
                }
            ]
        };
    
            
    }

    render() {
            return (
                
                <div className="directory-menu">
                    {this.state.rooms.map(({id,name1, description,imageSrc}) => (
                        <HotelCard key={id} name1={name1} description={description} imageSrc = {imageSrc} />
                    ))}
                    </div>  
                    );
}
}

export default Directory;