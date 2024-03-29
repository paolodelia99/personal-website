import React,{Fragment} from 'react';
//reactstrap components
import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';

const SkillsSection = () => {
    return (
        <Fragment>
            <div className="section" id='skills-section'>
                <Container className="text-center">
                    <Row className="justify-content-md-start">
                        <Col sm={12}>
                            <h2 className="title">Skills</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='items-container text-left'>
                            <div id="dev-icon-big-wrapper">
                                <h3 className='font-weight-bold'>Development</h3>
                                <div className='skill-wrapper'>
                                    <div className='skill-title-container'>
                                        <h4>Programming Languages</h4>
                                    </div>
                                    <div className='skills-icon-container'>
                                        <div>
                                            <i
                                                className="devicon-javascript-plain colored dev-icon-custom-style"
                                                id='js-icon'
                                            ></i>
                                            <UncontrolledTooltip target='#js-icon'>
                                                Javascript
                                            </UncontrolledTooltip>
                                        </div>
                                        <div>
                                            <i
                                                className="devicon-java-plain colored dev-icon-custom-style"
                                                id='java-icon'
                                            ></i>
                                            <UncontrolledTooltip target='#java-icon'>
                                                Java
                                            </UncontrolledTooltip>
                                        </div>
                                        <div>
                                            <span style={{color:'Dodgerblue'}}>
                                                <i
                                                    id='python-icon'
                                                    className="fab fa-python dev-icon-custom-style"
                                                ></i>
                                            </span>
                                            <UncontrolledTooltip target='#python-icon'>
                                                Python
                                            </UncontrolledTooltip>
                                        </div>
                                        <div>
                                            <i
                                                id="php-icon"
                                                className="devicon-php-plain colored dev-icon-custom-style"
                                            ></i>
                                            <UncontrolledTooltip target="php-icon">
                                                php
                                            </UncontrolledTooltip>
                                        </div>
                                    </div>
                                </div>
                                <div className='skill-wrapper'>
                                    <div className="skill-title-container">
                                        <h4>Frameworks</h4>
                                    </div>
                                    <div className='skills-icon-container'>
                                        <div>
                                            <i
                                                id="laravel-icon"
                                                className="devicon-laravel-plain colored dev-icon-custom-style"
                                            ></i>
                                            <UncontrolledTooltip target="laravel-icon">
                                                Laravel
                                            </UncontrolledTooltip>
                                        </div>
                                        <div>
                                            <i
                                                className="devicon-bootstrap-plain-wordmark colored dev-icon-custom-style"
                                                id='bootstrap-icon'
                                            ></i>
                                            <UncontrolledTooltip target='#bootstrap-icon'>
                                                Bootstrap
                                            </UncontrolledTooltip>
                                        </div>
                                        <div>
                                            <i
                                                className="devicon-express-original-wordmark colored dev-icon-custom-style"
                                               id='express-icon'
                                            ></i>
                                            <UncontrolledTooltip target='#express-icon'>
                                                Express
                                            </UncontrolledTooltip>
                                        </div>
                                    </div>
                                </div>
                                <div className='skill-wrapper'>
                                    <div className="skill-title-container">
                                        <h4>Libraries</h4>
                                    </div>
                                    <div className="skills-icon-container">
                                        <div>
                                            <i
                                                className="devicon-react-original colored dev-icon-custom-style"
                                                id='react-icon'
                                            ></i>
                                            <UncontrolledTooltip target='#react-icon'>
                                                React
                                            </UncontrolledTooltip>
                                        </div>
                                        <div>
                                            <Icon icon={reduxIcon} color="purple" id='redux-icon' />
                                            <UncontrolledTooltip target='#redux-icon'>
                                                Redux
                                            </UncontrolledTooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='tools-icon-big-wrapper'>
                                <div className='skill-title-container'>
                                    <h3 className='font-weight-bold'>Tools</h3>
                                </div>
                                <div className='container skills-icon-container'>
                                    <div className='tool-item'>
                                        <i
                                            className='devicon-git-plain colored dev-icon-custom-style'
                                            id='git-icon'
                                        ></i>
                                        <UncontrolledTooltip target='#git-icon'>
                                            Git
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className='tool-item'>
                                        <i
                                            className="devicon-github-plain colored dev-icon-custom-style"
                                            id='github-icon'
                                        ></i>
                                        <UncontrolledTooltip target='#github-icon'>
                                            Github
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className='tool-item'>
                                        <i
                                            className="devicon-heroku-original colored dev-icon-custom-style"
                                            id='heroku-icon'
                                        ></i>
                                        <UncontrolledTooltip target='#heroku-icon'>
                                            Heroku
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className='tool-item'>
                                            <i
                                                id='mysql-icon'
                                                className="devicon-mysql-plain-wordmark colored dev-icon-custom-style"
                                            ></i>
                                        <UncontrolledTooltip target='#mysql-icon'>
                                            MySQL
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className='tool-item'>
                                        <i
                                            id='mongo-db-icon'
                                            className="devicon-mongodb-plain-wordmark colored dev-icon-custom-style"
                                        ></i>
                                        <UncontrolledTooltip target='#mongo-db-icon'>
                                            Mongo Db
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className='tool-item'>
                                        <i
                                            id='nodejs-icon'
                                            className="devicon-nodejs-plain colored dev-icon-custom-style"
                                        ></i>
                                        <UncontrolledTooltip target='#nodejs-icon'>
                                            Node Js
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className='tool-item'>
                                        <span style={{color: 'Tomato'}}>
                                            <i
                                                id='html-icon'
                                                className="fab fa-html5 dev-icon-custom-style"
                                            ></i>
                                        </span>
                                        <UncontrolledTooltip target='#html-icon'>
                                            HTML
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className='tool-item'>
                                        <span  style={{color: 'Dodgerblue'}}>
                                            <i
                                                id='css-icon'
                                                className="fab fa-css3-alt dev-icon-custom-style"
                                            ></i>
                                        </span>
                                        <UncontrolledTooltip target='#css-icon'>
                                            Css
                                        </UncontrolledTooltip>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default SkillsSection;
