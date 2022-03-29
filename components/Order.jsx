import { Col, Button } from "react-bootstrap";

import styles from "../styles/About.module.css";

import React from "react";

export default function Order() {
  return (
    <div
      className={`${styles.about} text-center text-lg-start d-flex bg-order col-12 align-items-lg-start align-items-center flex-column flex-lg-row `}
      style={{
        backgroundImage: "url(/image.webp)",
      }}
    >
      <Col
        xs={9}
        className="d-md-block d-none"
        style={{
          fontFamily: "Josefin Sans, sans-serif",
          fontSize: "40px",
        }}
      >
        Ready to make an order?
      </Col>
      <Col
        xs={9}
        className="d-block d-md-none"
        style={{
          fontFamily: "Josefin Sans, sans-serif",
          fontSize: "30px",
        }}
      >
        Ready to make an order?
      </Col>
      <Col xs={3}>
        <Button size="lg" className="btn-burger">
          ORDER
        </Button>
      </Col>
    </div>
  );
}
