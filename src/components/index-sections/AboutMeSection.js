import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function AboutMeSection() {
  return (
    <>
      <div className="section" id='about-me-section'>
        <Container className="text-center">
          <Row className='about-me-title-container'>
            <Col>
              <h2 className="title">About me</h2>
            </Col>
          </Row>
          <Container className='about-me-big-wrapper'>
            <Row className="justify-content-md-center">
              <Col className='text-center'>
                <img
                    alt="..."
                    className="rounded-circle profile-img"
                    src={require("../../assets/img/ProfilePhoto.jpg")}
                />
              </Col>
              <Col>
                <h5 className="description">
                  Hey! My name is Paolo and I'm a self-taught web developer. I'm currently a first year Computer Science student at Unimib.
                  I'm apsiring Machine learning Engineer.....(to be continued)
                </h5>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default AboutMeSection;
