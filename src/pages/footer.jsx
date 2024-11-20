import React from 'react';
import FooterTheme from '../components/FooterTheme';
import './css/footer.css';

function Footer() {
    let info = {
         logo: "Logo", 
         location: 'Phoenix, AZ',
         email: "johndoe@example.com",
         github: "https://github.com/johndoe",
         instagram: "https://instagram.com/johndoe", 
         facebook: "https://facebook.com/johndoe"
    }    
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <FooterTheme  logo = {info.logo} location = {info.location} email = {info.email} github = {info.github} instagram = {info.instagram} facebook = {info.facebook}/>
        </div>
    );
}

export default Footer;