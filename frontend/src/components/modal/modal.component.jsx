import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.styles.scss";

function ModalComponent(props) {
  const [show, setShow] = useState(false);
  const { children, handleSubmit, loading } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {props.comp === "Hotel Modal" ? (
        <div className="hoteladd" onClick={handleShow}>
          <span className="plus-btn">+</span>
          <br />
          <span> Add Hotel </span>
        </div>
      ) : (
        <Button
          className="btn btn-success"
          title="Add room"
          onClick={handleShow}
          as="span"
        >
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleSubmit}>
            {loading ? "loading..." : "Save"}{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
