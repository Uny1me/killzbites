import React from "react";
import { Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="main text-lg-start text-center">
      <h1>
        We make <br /> Amazing Burgers{" "}
      </h1>
      <p className="py-3">
        Delivery and pick ups available from Mondays to Saturdays
      </p>
      <Button className="btn-burger" size="lg">
        Order Now
      </Button>
    </div>
  );
}
