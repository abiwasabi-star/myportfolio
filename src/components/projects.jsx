import React from 'react'
import { Row } from 'react-bootstrap';
import '../App.css'
import techStack from '../assets/congrats.png'

function Projects() {
  return (
    <>
      <div className="indie-flower-regular-2">
          <b className="walter-turncoat-regular">MY BLUEPRINTS
            </b>
            <img style={{mixBlendMode: 'multiply', // Blends image with the background}}
                                   width:'100px', height:'100px'}} src={techStack} alt="abigael"></img>
            <br></br>
          <><a target='_blank' href="https://techbizprogrammers.co.ke/" rel="noreferrer">TECHBIZ PROGRAMMERS WEBSITE</a></><br></br>
          <><a target='_blank' href="https://www.dialadrinkkenya.com/contact-us" rel="noreferrer">DIAL A DRINK WEBSITE</a></><br></br>
          <><a target='_blank' href="https://www.shopartisanduka.com/" rel="noreferrer">ARTISAN DUKA</a></><br></br>
          <><a target='_blank' href="https://kicksemporium.netlify.app" rel="noreferrer">COOL KICKS (sneaker shop)</a></><br></br>
          <><a target='_blank' href="https://swiftpark-u-imain.vercel.app/" rel="noreferrer">VEHICLE PARKING MANAGEMENT SYSTEM</a></><br></br>
          <><a target='_blank' href="https://whtanetworks.com/" rel="noreferrer">WHTA NETWORKS WEBSITE</a><br></br>
          </>
          
        </div>
    </>
  )
};

export default Projects;