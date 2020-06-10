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
                            <h3 className='title-small-viewport'>PyPerceptron</h3>
                        </div>
                        <div className='project-image-container'>
                            <img
                                className='img-fluid'
                                src={require('../../assets/img/pyPerceptron.png')}
                            />
                        </div>
                        <div className='project-description-container'>
                            <div>
                                <h3 className='project-title'>PyPerceptron</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        So currently, I'm learning
                                        stuff about machine learning, and I found really interesting the
                                        idea of the perceptron. So since i'm a coder, a good way to learning new
                                        stuff is to implemented it!

                                        That is just my implementation on the perceptron algorithm,
                                        a very simple idea, but it represent the build block of
                                        a neural net
                                    </p>
                                    <br/>
                                    <p>
                                        Build with <b>Python</b> and <b>Numpy</b>.
                                    </p>
                                </h5>
                            </div>
                            <div className='links-container'>
                                <a href="https://github.com/paolodelia99/Python-Perceptron">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'
                                    ></i>
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                                <a href="https://pypi.org/project/PyPerceptron/" id='box-arrow-up-right-icon'>
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
                            <h3 className='title-small-viewport'>Expense Tracker</h3>
                        </div>
                        <div className='project-description-container' id='weather-app-description'>
                            <div>
                                <h3 className='project-title'>Expense Tracker</h3>
                                <h5 className="description">
                                    <p className='brief-intro'>
                                        Are you looking for a app that tracks all your expenses?
                                        That's the app for you! Expense Tracker is a simple and intuitive application
                                        meant to keep track of your finances!
                                    </p>
                                    <br/>
                                    <p>
                                        Build with <b>Node.js</b>, <b>Express</b>, <b>Mongodb</b> and <b>React</b>
                                    </p>
                                </h5>
                            </div>
                            <div className='links-container'>
                                <a href="https://github.com/paolodelia99/mern-expense-tracker">
                                    <i
                                        className="devicon-github-plain colored git-hub-link-icon"
                                        id='github-code-icon'
                                    ></i>
                                    <UncontrolledTooltip target='#github-code-icon'>
                                        Source Code
                                    </UncontrolledTooltip>
                                </a>
                                <a href="https://paolown-expense-tracker.herokuapp.com/" id='box-arrow-up-right-icon'>
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
                                src={require('../../assets/img/expense_tracker.png')}
                            />
                        </div>
                    </div>
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
                </Container>
            </div>
        </Fragment>
    );
};

export default PortfolioSection;