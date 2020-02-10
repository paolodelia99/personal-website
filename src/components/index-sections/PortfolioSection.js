import React, {Fragment} from 'react';
import {Container, Row} from "reactstrap";

const PortfolioSection = () => {
    return (
        <Fragment>
            <div className="section" id="portfolio-section">
                <Container className="text-center projects-big-container">
                    <div className='project-wrapper img-left'>
                        <div className='project-image-container'>
                            <img
                                src={require('../../assets/img/google-keep-project.png')}
                            />
                        </div>
                        <div className='project-description-container'>

                        </div>
                    </div>
                    <div className='project-wrapper img-right'>

                    </div>
                    <div className='project-wrapper img-left'>

                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default PortfolioSection;