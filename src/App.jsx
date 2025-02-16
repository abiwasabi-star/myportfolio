import { useState } from 'react'
import './App.css'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import Footer from './components/footer'
import Projects from './components/projects'
import Services from './components/services'
import profilePic from '../src/assets/meme.png'
import techStack from '../src/assets/congrats.png'
import contact from '../src/assets/concat.png'



function App() {
  
  return (
    <Container className="bg" style={{maxWidth:"500px", margin:"0 auto", padding:"20px"}}>
       <h1 style={{marginBottom:"-15px"}} className="indie-flower-regular">Portfolio</h1>
      <h5 className="indie-flower-regular-2">
        <span>Full Stack Software Developer</span>
        <span class="material-symbols-outlined">favorite</span>
        <span>Android App Developer</span>
      </h5>
      <Row>
        <Col>
          <img className='pp' style={{transform: 'rotate(-20deg)', // Tilting
              transition: 'transform 0.5s ease-in-out',
              // height:'400px',
              mixBlendMode: 'multiply'}} // Blends image with the background}}
            src={profilePic} alt="ProfilePic"/>
        </Col>
        <Col className="text-center indie-flower-regular-2">

        <b className="walter-turncoat-regular">HELLO THERE!</b><br></br>
            <b className="walter-turncoat-regular">WASABI ABIGAEL</b><br></br>
Passionate about coding and software development. I enjoy the ultimate portability of a tech career, since with the right skill you can work for any company worldwide.
I'm keen on detail and love learning new things, therefore I adapt easily to unfamiliar tasks.
        </Col>
     <Row className="text-center indie-flower-regular-2">
Absolutely! Coding and software development skills empower me to create solutions that can have a positive impact on humanity.
Skating and playing chess are my hobbies, while staying current with the latest tech trends keeps me engaged.
        </Row>
      
      </Row>
      
      <Row>
        <Col>
          <Projects/>
        </Col>
        <Col className="text-center walter-turncoat-regular">CONTACT
        <img style={{mixBlendMode: 'multiply', // Blends image with the background}}
                       width:'120px', height:'120px'}} src={contact} alt="abigael"></img>
            <div>
              <a style={{marginRight:"10px"}}
              target="_blank" href="https://www.linkedin.com/in/abigael-wanjala-96a7b5265/" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="1x" /></a>

              <a style={{marginRight:"10px"}}
              target='_blank' href="https://github.com/Abigael-Wasabi" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="1x" /></a>

              <a style={{marginRight:"10px"}}
              target="_blank" href="tel:+254111583196" rel="noreferrer">
              <FontAwesomeIcon icon={faPhone} size="1x" /></a>

              <a target="_blank" href="mailto:abiwasabi03@gmail.com" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} /></a>
                
            </div>
        </Col>
        
        <Col className="text-center walter-turncoat-regular">TECH STACK
          <img style={{mixBlendMode: 'multiply', // Blends image with the background}}
                       width:'100px', height:'100px'}} src={techStack} alt="abigael"></img>
        <br></br>
        <div className="indie-flower-regular-2">
          <span>HTML, CSS, BOOTSTRAP, TAILWIND</span><br></br>
          <span>JavaScript, REACT, VUE</span><br></br>
          <span>Node.js, Express</span><br></br>
          <span>MongoDB, MySQL</span><br></br>
          <span>PHP, LARAVEL</span><br></br>
          <span>KOTLIN</span>
        </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Services/>
        </Col>
      </Row>
      <Footer/>
    </Container>
  )
}

export default App
