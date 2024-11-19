import React from 'react';
import ProfileCard from '../components/ProfileCard';

function Profile() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Profile Page</h1>
            <p>This is the profile page. You should see the profile card below.</p>
            <ProfileCard />
        </div>
    );
}

export default Profile;