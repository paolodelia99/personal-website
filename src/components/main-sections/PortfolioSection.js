import React, {Fragment} from 'react';
import { Col, Container, Row, UncontrolledTooltip} from "reactstrap";

const PortfolioSection = () => {

    return (
        <Fragment>
            <div className="section" id="portfolio-section">
                <Row className='about-me-title-container'>
                    <Col>
                        <h2 className="title">Projects</h2>
                        <h4>Here's something that I've done in my free time</h4>
                    </Col>
                </Row>
                <Container className="text-center projects-big-container">
                    <div className='project-wrapper img-left'>
                        <div>
                            <h3 className='title-small-viewport'>MERN Boilerplate</h3>
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid'
                                src={require('../../assets/img/mern.jfif')}
                            />
                        </div>
                        <div className='project-description-container'>
                            <div>
                                <h3 className='project-title'>MERN Boilerplate</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        I made a simple MERN web app in <b>Javascript</b> that can be used
                                        for kick starting you web application idea!
                                        <br/>
                                        With more than 70 stars and 20 forks on github.
                                        <br/>
                                        Check it out!
                                    </p>
                                    <br/>
                                </h5>
                            </div>
                            <div className='links-container'>
                                <a href="https://github.com/paolodelia99/MERN-Boilerplate">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'
                                    />
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='project-wrapper'>
                        <div>
                            <h3 className='title-small-viewport'>Mario Maker</h3>
                        </div>
                        <div className='project-description-container' id='weather-app-description'>
                            <div>
                                <h3 className='project-title'>Mario Maker</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        Since I've always been a Super Mario fan, I've always wanted to
                                        rebuilt from scratch. And now I finnaly I've done it!
                                        Here's my minimalist version of Mario Maker built with
                                        <b>C++</b> and <b>Raylib</b>.
                                    </p>
                                </h5>
                            </div>
                            <div className='links-container-left'>
                                <a href="https://github.com/paolodelia99/mario-maker">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'
                                    />
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                            </div>
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid'
                                src={require('../../assets/img/mario-maker-preview.gif')}
                            />
                        </div>
                    </div>
                    <div className='project-wrapper img-left'>
                        <div>
                            <h3 className='title-small-viewport'>Py-Pacman</h3>
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid'
                                src={require('../../assets/img/pacman-example.gif')}
                            />
                        </div>
                        <div className='project-description-container'>
                            <div>
                                <h3 className='project-title'>Py-Pacman</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        In Py-Pacman I've implemented the game of Pacman with <b>Python</b> and <b>Pygame</b>,
                                        and I've also provided it with a reinforcement learning environment,
                                        so you can train Pacman using your favorite Reinforcement learning algorithm.
                                    </p>
                                </h5>
                            </div>
                            <div className='links-container'>
                                <a href="https://github.com/paolodelia99/py-pacman">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'/>
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default PortfolioSection;
