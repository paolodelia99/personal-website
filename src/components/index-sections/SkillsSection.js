import React,{Fragment} from 'react';
//reactstrap components
import { Container, Row, Col } from "reactstrap";

const devIconStyle = {
    fontSize: '100px'
};

const SkillsSection = () => {
    return (
        <Fragment>
            <div className="section">
                <Container className="text-center">
                    <Row className="justify-content-md-start">
                        <Col sm={12}>
                            <h2 className="title">Skills</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='items-container text-left'>
                            <h3 className='font-weight-bold'>Development</h3>
                            <div>
                                <div className='skill-title-container'>
                                    <h4>Programming Languages</h4>
                                </div>
                                <div className='skills-container'>
                                    <div>
                                        <i className="devicon-javascript-plain colored" style={devIconStyle}></i>
                                    </div>
                                    <div>
                                        <i className="devicon-java-plain colored" style={devIconStyle}></i>
                                    </div>
                                    <div>
                                        <i className="devicon-python-plain colored" style={devIconStyle}></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="skill-title-container">
                                    <h4>Frameworks</h4>
                                </div>
                                <div className='skills-container'>
                                    <i className="devicon-react-original colored dev-icon" style={devIconStyle}></i>
                                    <i className="devicon-bootstrap-plain-wordmark colored" style={devIconStyle}></i>
                                    <i className="devicon-express-original-wordmark colored" style={devIconStyle}></i>

                                </div>
                            </div>
                            <div>
                                <h4>Libraries</h4>
                            </div>
                            <h3 className='font-weight-bold'>Tools</h3>

                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default SkillsSection;
