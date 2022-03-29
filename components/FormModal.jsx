import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function FormModal({ display, close }) {
  return (
    <Modal.Dialog
      className={`${display ? "d-block" : "d-none"} w-100`}
      style={{
        position: "absolute",
        top: "0",
        left: "-2%",
        fontFamily: "Poppins",
        right: "0%",
        width: "auto",
        zIndex: "99",
      }}
    >
      <Modal.Header closeButton onClick={close}>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>

      <Form>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>How Can we help?</Form.Label>
            <Form.Control
              placeholder="I was wondering about availability and rates. I need help with the following:"
              as="textarea"
              rows={3}
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={close}>
            Close
          </Button>
          <Button className="btn-burger">Submit</Button>
        </Modal.Footer>
      </Form>
    </Modal.Dialog>
  );
}
