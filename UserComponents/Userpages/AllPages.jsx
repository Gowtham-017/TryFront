import Catalogue from "./Catalogue";
import Footer from "./Footer";
import Home from "./Home";
import MoreInfo from "./MoreInfo";
import Profile from "./Profile";
import BookEvent from "./BookEvent";
import Status from "./Status";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import "../Userstyles/AllPages.css";

const AllPages = () => {
  const [profile, setProfile] = useState(false);
  const [home, setHome] = useState(true);
  const [catalogue, setCatalogue] = useState(false);
  const [moreinfo, setMoreinfo] = useState(false);
  const [contact, setContact] = useState(false);
  const [book, setBook] = useState(false);
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState("");
  const [userid, setUserId] = useState("");
  const [useremail, setUserEmail] = useState("");

  const handlehome = () => {
    setHome(true);
    setCatalogue(false);
    setContact(false);
    setMoreinfo(false);
    setStatus(false);
    setBook(false);
  };

  const handlecatalogue = () => {
    setCatalogue(true);
    setContact(false);
    setMoreinfo(false);
    setStatus(false);
    setHome(false);
    setBook(false);
  };

  const handlemoreinfo = () => {
    setMoreinfo(true);
    setCatalogue(false);
    setContact(false);
    setStatus(false);
    setHome(false);
    setBook(false);
    const userToken = localStorage.getItem("token");
    setToken(userToken);
    const userId = localStorage.getItem("userid");
    setUserId(userId);
    const userEmail = localStorage.getItem("useremail");
    setUserEmail(userEmail);
  };

  const handlecontact = () => {
    setContact(true);
    setCatalogue(false);
    setHome(false);
    setStatus(false);
    setMoreinfo(false);
    setBook(false);
  };

  const handleBook = () => {
    setBook(true);
    setContact(false);
    setCatalogue(false);
    setHome(false);
    setStatus(false);
    setMoreinfo(false);
  };

  const handleStatus = () => {
    setStatus(true);
    setBook(false);
    setContact(false);
    setCatalogue(false);
    setHome(false);
    setMoreinfo(false);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className="allpage">
      <div className="nav-bars">
        <h2 style={{ color: "white", padding: "20px" }}>Events Manager</h2>
        <div className="nav-item">
          <button onClick={handlehome}>Home</button>
          <button onClick={handlecatalogue}>About</button>
          <button onClick={handleBook}>Profile</button>
          <button onClick={handlemoreinfo}>Events</button>
          <button onClick={handleStatus}>Status</button>
          <button onClick={handlecontact}>Contact</button>
          <div>
            <FaUser
              style={{ color: "white", cursor: "pointer" }}
              size={30}
              onClick={() => setProfile((prev) => !prev)}
            />
            {profile && <Profile useremail={useremail} />}
          </div>
        </div>
      </div>
      {home && (
        <div>
          <Home />
          <Catalogue />
          <Footer />
        </div>
      )}
      {catalogue && <Catalogue />}
      {moreinfo && <MoreInfo token={token} userid={userid} />}
      {contact && <Footer />}
      {book && <BookEvent />}
      {status && <Status token={token} userid={userid} />}
    </div>
  );
};

export default AllPages;