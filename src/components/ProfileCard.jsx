import React from "react";
import './ProfileCard.css'
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function ProfileCard({ profileImage, firstName, lastName, description, email, github, instagram, facebook }) {
    
    return (
        <div className='card'>
            <div className="gradient"></div>
            <div className="profile-down">
                <img src={profileImage} alt="" />
                <div className="profile-title">{firstName} {lastName}</div>
                <div className="profile-description">
                    <p>{description}</p>
                </div>
                <div className="profile-button"><a href={email}>Email Me</a></div>
                <div className="github"><ImGithub /><a href={github}></a></div>
                <div className="instagram"><FaInstagram /><a href={instagram}></a></div>
                <div className="facebook"><FaFacebook /><a href={facebook}></a></div>
            </div>            
        </div>
    )
}