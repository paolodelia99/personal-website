import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function AboutMeSection() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col sm="5" md="2" className='text-center'>
              <p className="category">Circle Image</p>
              <img
                  alt="..."
                  className="rounded-circle"
                  src={require("../../assets/img/julie.jpg")}
              ></img>
            </Col>
            <Col lg="8" sm="12">
              <h2 className="title">About me</h2>
              <h5 className="description">
                Hey! My name is Paolo and I'm a self-taught web developer. I'm currently a first year Computer Science student at Unimib.
                I'm apsiring Machine learning Engineer.....(to be continued)
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutMeSection;
