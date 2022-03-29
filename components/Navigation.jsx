import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faLongArrowAltRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import FormModal from "./FormModal";

export default function Navigation() {
  const [display, setDisplay] = useState(false);

  const handleModal = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navshadow").classList.add("navShadow");
    } else {
      document.getElementById("navshadow").classList.remove("navShadow");
    }
  }
  return (
    <Navbar
      bg="none"
      className="position-fixed w-100"
      expand="lg"
      id="navshadow"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Col xs={4} lg={5}>
            <Image src={logo} alt="Killz_Bites" />
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="tel:+234-708-018-8585"
              className="me-4 my-3 my-md-2"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginRight: "5px", fontSize: "12px !important" }}
                size="1x"
              />
              Call Now
            </Nav.Link>
            <Nav.Link
              href="https://www.google.com/maps/dir//'6.5430189,3.373886'/@6.5430123,3.3037696,12z/data=!4m6!4m5!1m0!1m3!2m2!1d3.373886!2d6.5430189"
              className="me-4 my-3 my-md-2"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                style={{ marginRight: "5px", fontSize: "12px !important" }}
                size="1x"
              />
              Get Directions
            </Nav.Link>
            <Nav.Link onClick={handleModal} className="me-4 my-3 my-md-2">
              {" "}
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                style={{ marginRight: "5px", fontSize: "12px !important" }}
                size="1x"
              />
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <FormModal display={display} close={handleModal} />
    </Navbar>
  );
}
