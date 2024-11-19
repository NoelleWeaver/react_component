import './App.css'
import ProfileCard from '../components/ProfileCard'
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1>Home Page</h1>
            <Link to="/profile">Go to Profile</Link>
            <ProfileCard />
        </div>
    );
}

export default App;