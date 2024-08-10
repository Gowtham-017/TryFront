import "../adminstyles/AdminNavBar.css";
import logo from "../adminasset/logo.jpg";
import { Link } from "react-router-dom";
import Profile from "./AdminProfile";
import pro from "../adminasset/lp.png";
import { useState } from "react";
const Home = () => {
  const [profile, setProfile] = useState(false);
  return (
    <div id="nav">
      <div className="nav-bar">
        <img src={logo} alt="logo" height={60} width={80} />
        <div className="nav-items">
          <Link to="/home"><h5>Home</h5></Link>
          <Link to="/events"><h5>Events</h5></Link>
          <Link to="/dashboard"><h5>DashBoard</h5></Link>
          <Link to="/display"><h5>Display</h5></Link>
          <div>
            <img src={pro} height={50} width={70} onClick={() => setProfile((prev) => !prev)}/>
            {profile && <Profile />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;