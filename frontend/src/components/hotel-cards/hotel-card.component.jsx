import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HotelModal from "./bookmodal";

function HotelCard({
  description,
  name1,
  imageSrc,
  HotelFloorCount,
  HotelCheckInTime,
  HotelCheckOutTime,
  HotelEmail,
  HotelContact,
}) {
  return (
    <div className="hotelroom">
      {imageSrc && <Card.Img variant="top" src={`${imageSrc}`} />}
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name1}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{HotelContact}</ListGroup.Item>
          <ListGroup.Item>{HotelEmail}</ListGroup.Item>
          <ListGroup.Item>
            Check-In-Out: {HotelCheckInTime} - {HotelCheckOutTime}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <HotelModal bookingStatus={HotelEmail} />
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}

export default HotelCard;
