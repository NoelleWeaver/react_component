import './App.css'
import ProfileCard from '../components/profileCard/ProfileCard'

function App() {
    return (
        <div className="App">
            <a className="profile-button" href="/profile">Profile</a>
            <a className="footer-button" href="/footer">Footer</a>
        </div>
    );
}

export default App;