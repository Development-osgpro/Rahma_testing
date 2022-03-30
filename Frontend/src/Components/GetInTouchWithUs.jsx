import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import navbar and footer
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Contactform from '../Components/Contactform'


const GetInTouchWithUs = () => {


    return (
        <>
            <Container >
                <div className="firstTDiv">
                    <h2 className="firstT" >GET IN TOUCH WITH US</h2>
                </div>
                <Row>
                    <div className="secondT">
                        <h3>WE BRING A PERSONAL AND EFFECTIVE
                            APPROACH TO EVERY PROJECT WE WORK
                            ON.
                        </h3>
                    </div>
                </Row>
                <Row>
                    <div className='contactTow'>
                        <br />
                        <a className="contactLinke" href="mailto:info@rahmaww.org" rel='noopener noreferrer'>
                            <i className="fa-solid fa-envelope"></i> info@rahmaww.org</a>
                        <br />
                        <a className="contactLinke" href="tel:+2485663111" rel='noopener noreferrer'>
                            <i className="fa-solid fa-phone-volume"></i> +(248) 566 3111</a>

                        <br />
                        <a className="contactLinke" href="https://www.google.ru/maps/place/Google+Building+41,+Mountain+View,+CA+94043,+USA/@37.4224082,-122.0877973,17z/data=!3m1!4b1!4m5!3m4!1s0x808fba02f3d60bc5:0x6bc3b76cb42de9de!8m2!3d37.4224082!4d-122.0856086" rel='noopener noreferrer'>
                            <i className="fa-solid fa-location-dot"></i> 31333 Southfield Rd. STE 100
                            Beverly Hills, MI 48025
                        </a>

                    </div>
                </Row>
                <br />
                <Row className="thirdT">
                    <h6 className="weL">WE’D LOVE TO HEAR FROM YOU.
                        JUST CHOOSE THE MOST CONVENIENT METHOD
                        AND WE’LL GET BACK TO YOU AS SOON AS WE
                        CAN
                    </h6>
                </Row>
            </Container>
        </>
    );
};

export default GetInTouchWithUs;