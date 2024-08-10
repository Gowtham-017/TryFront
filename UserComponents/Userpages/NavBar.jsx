import '../Userstyles/NavBar.css'
import logo1  from '../Userasset/lll.png'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import pro from '../Userasset/lp.png'
import { useState } from 'react'
const Home = () => {
    const[profile,setProfile] = useState(false);
    return (
        <div id="">
            <div className='nav-bar'>
                <img src={logo1} alt='logo' height={60} width={80} />
                <div className='nav-items'>
                    <Link to="/home"><h5>Home</h5></Link>
                    <Link to="/about"><h5>About</h5></Link>
                    <Link to="/catalogue"><h5>Catalogue</h5></Link>
                    <Link to="/book"><h5>Book Event</h5></Link>
                    <Link to="/status"><h5>Status</h5></Link>
                    <div>
                    <img src={pro} height={50} width={70}  onClick = {() => setProfile((prev) => !prev)}/>
                    {profile && (
                        <Profile/>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home