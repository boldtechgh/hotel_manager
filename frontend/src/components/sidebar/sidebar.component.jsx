import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import { UserAuth } from '../firebase/AuthContext';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';


const options = [
//   {
//     name: 'Enable backdrop (default)',
//     scroll: false,
//     backdrop: true,
//   },
//   {
//     name: 'Disable backdrop',
//     scroll: false,
//     backdrop: false,
//   },
//   {
//     name: 'Enable body scrolling',
//     scroll: true,
//     backdrop: false,
//   },
  {
    name: 'Manager',
    scroll: true,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const {logOut,user} = UserAuth();
const handleSignOut = async () => {
  try {
          alert('Are You Sure You Want to Log-Out');
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
      <Button variant="light" onClick={toggleShow} as= "span" className="me-2">
      {name}
      <Navbar.Toggle aria-controls="navbarScroll" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin/User</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> 
    <ListGroup className='px-2' variant='warning' defaultActiveKey="#link1">
    <ListGroup.Item  action  href="rooms">
        Rooms
      </ListGroup.Item>
      <ListGroup.Item action href="staff">
       Staff
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
        Hotel Department
      </ListGroup.Item>
      <ListGroup.Item action href="#link4">
        Hotel Bookings
      </ListGroup.Item>
      <ListGroup.Item action href="#link5">
        Hotel Chain
      </ListGroup.Item>
      <ListGroup.Item action href="#link6">
        Hotel Services
      </ListGroup.Item>
      <ListGroup.Item action href="#link7">
        Reports/ Statistics
      </ListGroup.Item>
    </ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className='mt-5'></ListGroup>
    <ListGroup className=''>
            <ListGroupItem>
            <p>{user?.displayName}  </p>
        </ListGroupItem>
      <ListGroup.Item action variant='danger' onClick={handleSignOut}>
        Logout
      </ListGroup.Item>
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function HotelSideBar() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default HotelSideBar;