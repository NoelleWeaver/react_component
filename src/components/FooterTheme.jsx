import React from "react";
import './FooterTheme.css';
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";


export default function FooterTHeme({ name, routes, logo, location, email, github, instagram, facebook }) {
  
  return (
    <>

    <button className="to-top" onClick={() => window.scrollTo(0, 0)}><FaArrowUp /></button>
    <div className="footer">
      <div className="name">{name}</div>
      <div className="line"></div>
      <div className="location"><FaLocationDot />{location}</div>
      <div className="email">
          <a href={`mailto:${email}`} className="email-link"><HiOutlineMail />{email}</a>
      </div>
      <div className="link">
        <a href={routes.home}>Home</a>
        <a href={routes.about}>About</a>
        <a href={routes.testimonials}>Testimonials</a>
        <a href={routes.faq}>FAQ</a>
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
      <img src={logo} />
    </div>
    </>
  );
}