import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function HotelModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <div className="add-btn">
      <Button variant="success" onClick={handleShow}>
        Book
              </Button>
            </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Guest Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Guest Name"
                autoFocus
              />
              <Form.Label>From</Form.Label>
              <Form.Control
                type="date"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>To</Form.Label>
              <Form.Control
                type="date"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="outline-success" onClick={handleClose}>
            Save Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HotelModal;