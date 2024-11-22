import React from 'react';
import ProfileCard from '../components/profileCard/ProfileCard';
import './css/profile.css';

function Profile() {
    let info = {
         profileImage: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1731603743/Animal-Adoption/download%20%283%29.jpg.jpg", 
         firstName: "John",
         lastName: "Doe",
         location: 'Phoenix, AZ',
         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ad inventore minima numquam dolor neque magnam delectus. Ex, consequatur possimus.',
         email: "johndoe@example.com",
         github: "https://github.com/johndoe",
         instagram: "https://instagram.com/johndoe", 
         facebook: "https://facebook.com/johndoe"
    }    
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <ProfileCard  profileImage = {info.profileImage} firstName = {info.firstName} lastName = {info.lastName} location = {info.location} description = {info.description} email = {info.email} github = {info.github} instagram = {info.instagram} facebook = {info.facebook}/>
        </div>
    );
}

export default Profile;