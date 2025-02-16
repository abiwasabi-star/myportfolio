import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';
import imgsrc from '../assets/webdev.jpg'
import srcimg from '../assets/andrdev.png'
import imgs from '../assets/designweb.png'


function Services() {

  return (
    <div>
     <Row>
     <b className="walter-turncoat-regular">SERVICE REPERTOIRE</b><br></br>
        <Col>
          <div>
            <img style={{borderRadius:'50%', width:'30px', height:'30px'}} src={imgsrc} alt="web dvlpmt"></img>
          </div>
        <b className="walter-turncoat-regular">WEB DEVELOPMENT</b><br></br>
          <b className="indie-flower-regular-2">I craft dynamic and responsive web applications tailored to meet your needs. Using a diverse range of techstacks,
             I bring your vision to life with functionality and style</b>
        </Col>

        <Col>
          <div>
          <img style={{borderRadius:'50%', width:'30px', height:'30px'}} src={imgs} alt="web design"></img>
          </div>
        <b className="walter-turncoat-regular">WEB DESIGN</b><br></br>
        <b className="indie-flower-regular-2">I create visually appealing interfaces that engage your audience. Leveraging tools 
          like Figma, I design user-friendly layouts that effectively communicate your brand's 
          identity</b>
        </Col>

        
        <Col>
          <div>
          <img style={{borderRadius:'50%', width:'30px', height:'30px'}} src={srcimg} alt="andr dvlpmt"></img>
          </div>
          <b className="walter-turncoat-regular">ANDROID DEVELOPMENT</b><br></br>
          <b className="indie-flower-regular-2">Whether you need a sleek mobile app for your
          business or a feature-rich solution for your users, I develop custom Android apps 
          that combine innovation and performance</b>
        </Col>
     </Row>
    </div>
  );
}

export default Services;
