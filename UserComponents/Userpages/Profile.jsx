import "../Userstyles/Profile.css";
import { Link } from "react-router-dom";
import UserDetail from "./UserDetail";
// eslint-disable-next-line react/prop-types
function Profile({ useremail }) {
  return (
    <div className="dropdown-profile">
      <div className="profile-items">
        <UserDetail />
        <img
          src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png"
          height={100}
          width={100}
        />
        <span style={{ color: "white" }}>{useremail}</span>
        <Link to="/">
          <button>LogOut</button>
        </Link>
      </div>
    </div>
  );
}
export default Profile;
