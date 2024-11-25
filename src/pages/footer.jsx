import React from 'react';
import FooterTheme from '../components/footer/FooterTheme';
import { FaArrowLeft } from "react-icons/fa";

function Footer() {
    let info = {
         name: "Company Name",
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel commodi, enim atque, animi odio dolore rem, excepturi fugit perferendis a! Ab odit aut quibusdam harum qui rem tempore vel earum aliquam ad unde veniam animi dignissimos voluptate quidem in fuga necessitatibus quo quas ratione dolor, saepe nulla! Est, delectus!',
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
            <a href="/"><FaArrowLeft /></a>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <FooterTheme  description = {info.description} routes = {info.routes} name = {info.name} logo = {info.logo} location = {info.location} email = {info.email} github = {info.github} instagram = {info.instagram} facebook = {info.facebook}/>
            </div>
        </>
    );
}

export default Footer;