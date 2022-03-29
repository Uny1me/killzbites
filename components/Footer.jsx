import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import styles from "../styles/About.module.css";
import style from "../styles/Gallery.module.css";

export default function Footer() {
  return (
    <div
      className={`${styles.about} ${style.main} d-flex text-center text-lg-start align-items-center align-items-lg-start flex-column flex-lg-row text-uppercase`}
    >
      <Col xs={4} lg={5} className="pb-5">
        <Image src={logo} alt="Killz_Bites" />
      </Col>
      <Col className="pb-5">
        <p>onagoruwa, shomolu Lagos</p>
        <p>+234 708 018 8585</p>
      </Col>
      <Col className="pb-5">
        <p>Business Hours</p>
        <p>MON - SAT: 1O:00AM - 6:00 AM</p>
        <p>SUN: CLOSED</p>
      </Col>
    </div>
  );
}
