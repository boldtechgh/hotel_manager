import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormInput from '../form-input/form-input.component';
import HotelSideBar from '../sidebar/sidebar.component';
import { UserAuth } from '../firebase/AuthContext';


function NavBar() {
  const {logOut,user} = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Navbar bg="light" variant='light' expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand as={HotelSideBar} >Hotel Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;