import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import {IoIosPaperPlane} from 'react-icons/io'
// core components

function ContactMeSection() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="contact-me-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <IoIosPaperPlane size='40px'/>
              <h3 className="title">Get in touch!</h3>
              <h5 className="description">
                Whether you have an idea for a project or just want to chat,
                feel free to shoot me an email!
              </h5>
              <form action="mailto:paolo.delia99@gmail.com">
                <Button
                    className="btn-round mr-1"
                    color="info"
                    type='submit'
                    role="button"
                    size="lg"
                >
                  Send me an Email
                </Button>
              </form>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Check out my social media</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://twitter.com/Delia99Paolo"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/in/paolo-d-elia/"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Connect with me on Linkedin
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                id="tooltip331904895"
                size="lg"
                target="_blank"
            >
              <i className="fab fa-github"></i>
            </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Check out my Github
              </UncontrolledTooltip>
              <Button
                  className="btn-neutral btn-icon btn-round"
                  color="github"
                  href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                  id="tooltip331904895"
                  size="lg"
                  target="_blank"
              >
                <i className="fab fa-dev" title="paolodelia99's DEV Profile"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Check out my Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactMeSection;
