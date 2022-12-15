import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';

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
        <div className='container-fluid text-light' style={{height:'500px',width:'auto'}}>
            <div className="col">
                <div className="row">
                <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm='2'>
                <Form.Label htmlFor="exampleColorInput" className='text-light'>Select Room</Form.Label>

                <Form.Select size="sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                
                </Form.Select>    
                </Col>
               
                <Col sm='2'>
                <Form.Label htmlFor="exampleColorInput" className='text-light'>Room Type</Form.Label>
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
                <Form.Group>
                    <Container className='bg-light d-flex' style={{margin:'0', height: '120px', width: '900px' }}>
                        <Row xs="sm" className='text-center'>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                            <Col><Badge  bg="primary"  className='justify-content-center' style={{width:'70px',justifyContent:'center', paddingtop:'200px',height:'30px'}}><span className='pt-5 align-center'>Room 1</span></Badge></Col>
                        </Row>
                    </Container>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
                </Form.Group>
                </Form>
                </div>
            </div>
        </div>
        </>
    );
}

export default CheckInDetails;