import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

const CheckInDetails = (props) => {
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  
    return(
        <>
        <div className='container-fluid' style={{height:'auto',width:'100%'}}>
            <div className="col">
                <div className="row">
                <Form>
                <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
                <Col sm='2'>
                <Form.Label htmlFor="exampleColorInput">Select Room</Form.Label>

                <Form.Select size="sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                
                </Form.Select>    
                </Col>
               
                <Col sm='2'>
                <Form.Label htmlFor="exampleColorInput">Room Type</Form.Label>
                <Form.Select size="sm">
                <option>Suite</option>
                <option>Deluxe</option>
                
                </Form.Select>    
                </Col>
                <Col sm='2'>
                <Form.Label htmlFor="exampleColorInput">Room Price</Form.Label>

            <Form.Control type="number" size='sm' placeholder="Room Price" />   
</Col>
                <Col sm='2'>
                <Form.Label htmlFor="exampleColorInput">Discount % </Form.Label>

            <Form.Control type="number" size='sm' placeholder="Discount" />   
</Col>
                <Col sm='2'>
                <Form.Label htmlFor="exampleColorInput">Discount Rent</Form.Label>

            <Form.Control type="number" size='sm' placeholder="2000" disabled/>   
</Col>
<Col sm='2' className='justify-content-center'>
<br></br>   
<Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : ' + ' }
    </Button>
</Col>
                </Form.Group>
                <Form.Group className="mb-5">
                    <Container className='bg-secondary mb-4 d-flex' style={{margin:'0', height: '120px', width: '100%' }}>
                        <Row xs="sm" className='text-center'>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                        </Row>
                    </Container>
                <Form.Group   className="mb-4" controlId="exampleForm.ControlInput1">
                    <Col sm='4'>
        <Form.Label>Check In Date and Time</Form.Label>
        <Form.Control type="datetime-local"  />
        </Col>
                    <Col sm='4'>
        <Form.Label>Check Out Date and Time</Form.Label>
        <Form.Control type="datetime-local"  />
        </Col>
        
      </Form.Group>
      <Form.Group   className="mb-3 " style={{width:'750px'}} stycontrolId="exampleForm.ControlTextarea1">
        <Form.Label>Check In Notes</Form.Label>
        <Form.Control as="textarea" rows={2} cols={2}  />
      </Form.Group>
      <div className="d-flex">
      <Button variant="success">Next</Button>
      </div>
                </Form.Group>
                </Form>
                </div>
            </div>
        </div>
        </>
    );
}

export default CheckInDetails;