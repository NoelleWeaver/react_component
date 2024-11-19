import React from "react";
import './ProfileCard.css'
import profilePic from '../components/download (4).jpg'
export default function ProfileCard() {
    
    
    
    return (
        <div className='card'>
            <div className="gradient"></div>
            <div className="profile-down">
                <img src={profilePic} alt="" />
                <div className="profile-title"></div>
                <div className="profile-description">

                </div>
                <div className="profile-button"><a href="mailto:noelle.e.weaver@gmail.com"></a></div>
            </div>            
        </div>
    )
}