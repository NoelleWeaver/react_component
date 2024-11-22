import React from "react";
import './FooterTheme.css';
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";


export default function FooterTHeme({ name, routes, description, logo, location, email, github, instagram, facebook }) {
  
  return (
    <>

    <div className="footer">
    <button className="to-top" onClick={() => window.scrollTo(0, 0)}><FaArrowUp /></button>
      <div className="row">
        <div className="col">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
        <div className="col" id="links">
          <h3>Links</h3>
          <ul>
            <li><a className="home" href={routes.home}>Home</a></li>
            <li><a className="about" href={routes.about}>About</a></li>
            <li><a className="testimonials" href={routes.testimonials}>Testimonials</a></li>
            <li><a className="faq" href={routes.faq}>FAQ</a></li>
          </ul>
        </div>
        <div className="col" id="contact">
            <h3>Contact</h3>
            <div className="footer-location"><FaLocationDot />{location}</div>
            <div className="footer-email">
                <a href={`mailto:${email}`} className="email-link"><HiOutlineMail />{email}</a>
            </div>
            <div className="socials">
                <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <ImGithub />
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="instagram-link">
                    <FaInstagram /> 
                </a>
                <a href={facebook} target="_blank" rel="noopener noreferrer" className="facebook-link">
                    <FaFacebook />
                </a>
            </div>
        </div>
        <div className="col">
           <img className="logo" src={logo} />
        </div>
     
      </div>
    </div>
    </>
  );
}