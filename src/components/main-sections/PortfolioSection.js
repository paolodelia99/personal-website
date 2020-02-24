import React, {Fragment} from 'react';
import { Col, Container, Row, UncontrolledTooltip} from "reactstrap";
import {BsBoxArrowUpRight} from 'react-icons/bs'

const PortfolioSection = () => {

    return (
        <Fragment>
            <div className="section" id="portfolio-section">
                <Row className='about-me-title-container'>
                    <Col>
                        <h2 className="title">My Portfolio</h2>
                    </Col>
                </Row>
                <Container className="text-center projects-big-container">
                    <div className='project-wrapper img-left'>
                        <div>
                            <h3 className='title-small-viewport'>Google Keep clone</h3>
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid'
                                src={require('../../assets/img/google-keep-project.png')}
                            />
                        </div>
                        <div className='project-description-container'>
                            <div>
                                <h3 className='project-title'>Google Keep clone</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        Since I'm an organized guy and junior software engineer,
                                        I thought, why don't build an productivity app that I use a lot?
                                        So I did it!
                                    </p>
                                    <br/>
                                    Here's a google keep clone ( at least it tries to replicate it),
                                    build with <b>node.js</b>, <b>express</b>, <b>mongodb</b>, <b>React</b> and <b>redux</b>.
                                </h5>
                            </div>
                            <div className='links-container'>
                                <a href="https://github.com/paolodelia99/GKeep">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'
                                    ></i>
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                                <a href="https://damp-fjord-04834.herokuapp.com/" id='box-arrow-up-right-icon'>
                                    <BsBoxArrowUpRight
                                        color='black'
                                        size='40px'
                                    />
                                </a>
                                <UncontrolledTooltip target='#box-arrow-up-right-icon'>
                                    Check it out!
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                    <div className='project-wrapper'>
                        <div>
                            <h3 className='title-small-viewport'>Weather App</h3>
                        </div>
                        <div className='project-description-container' id='weather-app-description'>
                            <div>
                                <h3 className='project-title'>Weather App</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        Are you wondering what the weather will be in the next few days?
                                        Check it out with my react-meteo-app! Six-day weather forecast!
                                        You can also save your favourite cities!
                                    </p>
                                    <br/>
                                    Build with <b>React</b>, <b>Redux</b> and <b>Open Weather API</b> for getting the weather!
                                </h5>
                            </div>
                            <div className='links-container'>
                                <a href="https://github.com/paolodelia99/react-meteo-app">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'
                                    ></i>
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                                <a href="https://paolodelia99.github.io/react-meteo-app/#/" id='box-arrow-up-right-icon'>
                                    <BsBoxArrowUpRight
                                        color='black'
                                        size='40px'
                                    />
                                </a>
                                <UncontrolledTooltip target='#box-arrow-up-right-icon'>
                                    Check it out!
                                </UncontrolledTooltip>
                            </div>
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid'
                                src={require('../../assets/img/weather-app.png')}
                            />
                        </div>
                    </div>
                    <div className='project-wrapper img-left'>
                        <div>
                            <h3 className='title-small-viewport'>Price Tracker</h3>
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid'
                                src={require('../../assets/img/price-tracker-app.png')}
                            />
                        </div>
                        <div className='project-description-container'>
                            <div>
                                <h3 className='project-title'>Price Tracker</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        Do you want to keep track of your favourite stocks?
                                        Do you want to be update with the latest BTC price?
                                        This web app is for you!
                                    </p>
                                    <br/>
                                    <p>
                                        Build with <b>Node.js</b>, <b>Express</b>, <b>Mongodb</b>, <b>React</b> and <b>Material UI</b>.
                                        <br/>
                                        Apis used: <b>Alpha Vantage</b>, <b>Crypto Compare</b> and <b>World Trading Data</b>
                                    </p>
                                </h5>
                            </div>
                            <div className='links-container'>
                                <a href="https://github.com/paolodelia99/price-tracker-web-app">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'
                                    ></i>
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                                <a href="https://pacific-scrubland-73313.herokuapp.com/" id='box-arrow-up-right-icon'>
                                    <BsBoxArrowUpRight
                                        color='black'
                                        size='40px'
                                    />
                                </a>
                                <UncontrolledTooltip target='#box-arrow-up-right-icon'>
                                    Check it out!
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default PortfolioSection;