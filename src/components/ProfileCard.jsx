import React from "react";
import './ProfileCard.css';
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ProfileCard({ profileImage, firstName, lastName, location, description, email, socialLinks }) {
  const { github, instagram, facebook } = socialLinks;

  return (
    <div className="container">
        <div className='card'>
            <div className="img-box">
            <div className="space"></div>
                    <img src={profileImage} />
                </div>                
                <div className="content">
                <div className="bottom">
                    <div className="title">{firstName} {lastName}</div>
                    <div className="location"><FaLocationDot />{location}</div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <div className="button">
                        <a href={`mailto:${email}`} className="email-link">Email Me</a>
                    </div>
                    <div className="links">
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
            </div>
        </div>
    </div>
  );
}