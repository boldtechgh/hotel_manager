import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Logo from "./download.svg"
import ListGroup from 'react-bootstrap/ListGroup';
import HotelModal from './bookmodal';

function HotelCard({description,name1, imageSrc}) {
    return (
      <div className='hotelroom'>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Logo} />
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
      <Button variant="success" as={HotelModal}>Book!</Button>
      </Card.Body>
    </Card>
            </div>
  );
}

export default HotelCard;