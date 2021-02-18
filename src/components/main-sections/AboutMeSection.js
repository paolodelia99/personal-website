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
            <Row className="justify-content-md-center main-description-wrapper">
              <div className='oval'>
                <img
                    alt="..."
                    id='profile-img'
                    className="rounded-circle profile-img"
                    src={require("../../assets/img/ProfilePhoto.jpg")}
                />
              </div>
                <h5 className="description text-black" id='main-description'>
                  Hey! My name is Paolo, I'm 21 years old and I'm currently a second year Computer Science student at Unimib.
                  I am really passionate about the world of coding, AI and everything related to computer science and tech.
                </h5>
            </Row>
          </Container>
          <Row className="justify-content-md-center other-description-container">
            <Col sm={12} md={10}>
              <h5 className="description text-black">
                I'm also a really sporty guy, I'm going to the gym between 4 and 5 times a week.
                <br/>
                What's sport taught me is <b>discipline</b> and <b>determination</b>, that allows me to getting done faster the "boring stuff" and have time to dedicate the to things that I've love to do!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutMeSection;
