import "../adminstyles/AdminProfile.css";
import { Link } from "react-router-dom";
import UserDetail from "./AdminUserDetail";
// eslint-disable-next-line react/prop-types
function Profile({ adminName }) {
  return (
    <div className="dropdown-profile">
      <div className="profile-items">
        <UserDetail />
        <img
          src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png"
          height={100}
          width={100}
        />
        {adminName && <h2 style={{ color: "black" }}>{adminName}</h2>}
        <Link to="/">
          <button>LogOut</button>
        </Link>
      </div>
    </div>
  );
}
export default Profile;
