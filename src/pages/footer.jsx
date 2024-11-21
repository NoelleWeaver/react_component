import React from 'react';
import FooterTheme from '../components/FooterTheme';
import './css/footer.css';

function Footer() {
    let info = {
         name: "Company Name",
         logo: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/logo.png", 
         location: 'Phoenix, AZ',
         routes: {
             home: '/',
             about: '/about',
             faq: '/faq',
             testimonials: '/testimonials',
         },
         email: "johndoe@example.com",
         github: "https://github.com/johndoe",
         instagram: "https://instagram.com/johndoe", 
         facebook: "https://facebook.com/johndoe"
    }    

    return (
        <>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <FooterTheme  routes = {info.routes} name = {info.name} logo = {info.logo} location = {info.location} email = {info.email} github = {info.github} instagram = {info.instagram} facebook = {info.facebook}/>
            </div>
        </>
    );
}

export default Footer;