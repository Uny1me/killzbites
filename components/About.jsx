import React from "react";
import Image from "next/image";
import one from "../public/assets/about/one.jpg";
import two from "../public/assets/about/two.jpeg";
import { Row, Col } from "react-bootstrap";

import style from "../styles/About.module.css";

export default function About() {
  return (
    <div className={`${style.about} text-lg-start text-center`}>
      <Row className="align-items-center flex-column flex-md-row">
        <Col className={style.imgabs}>
          <Image src={one} alt="one" />
        </Col>

        <Col>
          <hr className="col-2 d-none d-lg-block" />
          <h5 className="mt-3 mt-lg-0">
            You can never go wrong <br /> with old country burger
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusantium sapiente provident eum sed. Obcaecati expedita voluptate
            rem rerum sapiente.s
          </p>
        </Col>
      </Row>
      <br />
      <Row className="align-items-center flex-column flex-md-row">
        <Col className="order-1 order-md-0">
          <hr className="col-2 d-none d-lg-block" />
          <h5 className="mt-3 mt-lg-0">Next Level Packaging</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsum
            possimus quidem veritatis placeat id assumenda harum, tempora
            architecto eveniet, soluta perferendis facilis aspernatur cupiditate
            iure adipisci magni ut veniam reiciendis unde numquam provident.
            Sequi sint dignissimos adipisci itaque distinctio et aspernatur
            tenetur ex inventore. Beatae vero assumenda dignissimos ea aliquam,
            cumque quia eveniet ab tenetur laudantium. Reprehenderit excepturi
            libero, maxime ad vero impedit ullam recusandae eaque dignissimos
            optio perferendis.
          </p>
        </Col>
        <Col className={`${style.imgabs} order-0 order-md-1`}>
          <Image src={two} alt="one" />
        </Col>
      </Row>
    </div>
  );
}
