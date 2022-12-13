import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import HotelModal from './bookmodal';

function HotelCard({description,name1, imageSrc,bookingStatus}) {
    return (
      <div className='hotelroom'>
        {
          imageSrc &&
          <Card.Img variant="top" src={`${imageSrc}`} />
        }
    <Card style={{ width: '18rem' }}>
      <Card.Body>
              <Card.Title>{ name1 }</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>AC</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body >
            <HotelModal bookingStatus={ bookingStatus } />
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
          
    </Card>
            </div>
  );
}

export default HotelCard;