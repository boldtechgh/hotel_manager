import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./modal.styles.scss";

function ModalComponent(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {props.comp === 'Hotel Modal' ? (
        <div className="hoteladd" onClick={handleShow}>
          <span className='plus-btn'>+</span>
          <br />
          <span> Add Hotel </span>
        </div>) : <Button as='span' onClick={handleShow} >Add Staff</Button>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {props.label1 && ( <>
              <Form.Label>{props.label1}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /> </>)}
              {props.label2 && ( <>
              <Form.Label>{props.label2}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
                
              {props.label3 &&  ( <>
              <Form.Label>{props.label3}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
              {props.label4 && ( <>
              <Form.Label>{props.label4}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
              {props.label5 && ( <>
              <Form.Label>{props.label5}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
              {props.label6 && ( <>
              <Form.Label>{props.label6}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
              {props.label7 && ( <>
              <Form.Label>{props.label7}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
              {props.label8 && ( <>
              <Form.Label>{props.label8}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
              {props.label9 && ( <>
              <Form.Label>{props.label9}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}{props.label9 && ( <>
              <Form.Label>{props.label10}</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              /></>)}
              {props.file && (<>
                <Form.Label>{props.file}</Form.Label>
                <Form.Control
                  type="file"
                  autoFocus
                />
              </>)}
            </Form.Group>
            {props.textArea && ( <>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Room Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
                </>)}
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