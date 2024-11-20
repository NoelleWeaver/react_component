import './App.css'
import ProfileCard from '../components/ProfileCard'

function App() {
    return (
        <div className="App">
            <ul className="card-list">
                <li className="card-item">
                    <ProfileCard profileImage="https://res.cloudinary.com/dynkv0p8x/image/upload/v1731603743/Animal-Adoption/download%20%283%29.jpg.jpg" firstName="Bean" lastName="Doe" location="Phoenix, AZ" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ad inventore minima numquam dolor neque magnam delectus. Ex, consequatur possimus." email="johndoe@example.com" socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
                    <ProfileCard profileImage="https://res.cloudinary.com/dynkv0p8x/image/upload/v1731604158/Animal-Adoption/images%20%282%29.jpg.jpg" firstName="Bernie" lastName="Doe" location="Phoenix, AZ" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ad inventore minima numquam dolor neque magnam delectus. Ex, consequatur possimus." email="johndoe@example.com" socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
                    <ProfileCard profileImage="https://res.cloudinary.com/dynkv0p8x/image/upload/v1731015918/task_images/dandan.png.png" firstName="The" lastName="idiot" location="Phoenix, AZ" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ad inventore minima numquam dolor neque magnam delectus. Ex, consequatur possimus." email="johndoe@example.com" socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
                </li>
            </ul>
        </div>
    );
}

export default App;