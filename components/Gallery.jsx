import React from "react";
import Image from "next/image";
import chicken from "../public/assets/about/gallery/chicken.jpeg";
import ham from "../public/assets/about/gallery/ham.jpeg";
import cheese from "../public/assets/about/gallery/cheese.jpeg";
import { Row, Col } from "react-bootstrap";

import style from "../styles/About.module.css";
import styles from "../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <div className={`${style.about} ${styles.main} text-center text-lg-start`}>
      <Row className="align-items-center align-items-md-start flex-column flex-lg-row">
        <Col xs={12} md={6}>
          <hr className="col-2 d-none d-lg-block" />
          <h5>
            A few highlights <br /> from our menu
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, minus!
            Dolores, rem quaerat natus perspiciatis delectus alias
            exercitationem adipisci hic dicta ea illo vel tempore tenetur vero
            qui doloremque id repellendus fugiat asperiores. !
          </p>
        </Col>
        <Col className={style.imgabs}>
          <Row className="flex-column align-items-center align-items-md-start col-md-8 col-sm-10 col-12 col-lg-auto mx-auto">
            <Row className="py-2 flex-column align-items-center align-items-md-start">
              <Col xs={12} sm={8} md={2} lg={2}>
                <Image src={chicken} alt="one" />
              </Col>
              <Col>
                <h6>Chicken</h6>
                <p>
                  Iste sequi quo velit odio, facere quidem nihil dolorem vero
                  dolor ex?
                </p>
              </Col>
            </Row>
            <Row className="py-2 flex-column align-items-center align-items-md-start ">
              <Col xs={12} sm={8} md={2} lg={2}>
                <Image src={cheese} alt="one" />
              </Col>
              <Col>
                <h6>Cheese Burger</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
                  error!
                </p>
              </Col>
            </Row>
            <Row className="py-2 flex-column align-items-center align-items-md-start ">
              <Col xs={12} sm={8} md={2} lg={2}>
                <Image src={ham} alt="one" />
              </Col>
              <Col>
                <h6>Ham Burger</h6>
                <p>
                  Expedita quia sapiente voluptatem repellendus perspiciatis
                  quas inventore ab a, obcaecati aut. Nemo vero atque architecto
                  hic?
                </p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <br />
    </div>
  );
}
