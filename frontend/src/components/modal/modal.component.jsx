import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./modal.styles.scss";

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <div className="add-btn">
      <Button variant="success" onClick={handleShow}>
        Add New Rooms
              </Button>
            </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Room Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Room Name"
                autoFocus
              />
              <Form.Label>Room Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Room Type"
                autoFocus
              />
              <Form.Label>Room Price</Form.Label>
              <Form.Control
                type="Price"
                placeholder="Price"
                autoFocus
              />
              <Form.Control
                type="file"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Room Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="outline-success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;