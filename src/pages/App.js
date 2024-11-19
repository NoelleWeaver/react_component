import './App.css'
import ProfileCard from '../components/ProfileCard'

function App() {
    return (
        <div className="App">
            <h1>Home Page</h1>
            <ProfileCard profileImage="https://cloudinary.com/150" firstName="John" lastName="Doe" email="johndoe@example.com" socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
        </div>
    );
}

export default App;