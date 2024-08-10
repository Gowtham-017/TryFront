import { useState } from "react";
import "../adminstyles/AllAdminPage.css";
import { FaUser } from "react-icons/fa";
import AdminProfile from "./AdminProfile";
import AdminHome from "./AdminHome";
import AdminEvents from "./AdminEvents";
import AdminDashBoard from "./AdminDashBoard";
import AdminDisplay from "./AdminDisplay";

// eslint-disable-next-line react/prop-types
function AllAdminpages({ location }) {
  const [activePage, setActivePage] = useState("home");
  const [adminProfile, setAdminProfile] = useState(false);

  const adminName = localStorage.getItem("adminname");

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  // eslint-disable-next-line react/prop-types
  const token = location.state && location.state.token;

  return (
    <div className="allpage">
      <div className="navbars">
        <h2 style={{ color: "white", padding: "20px" }}>Events Manager</h2>
        <div className="nav-item">
          <button onClick={() => handlePageChange("home")}>Home</button>
          <button onClick={() => handlePageChange("events")}>Events</button>
          <button onClick={() => handlePageChange("dashboard")}>
            DashBoard
          </button>
          <button onClick={() => handlePageChange("display")}>Display</button>
          <div>
            <FaUser
              style={{ color: "white", cursor: "pointer" }}
              size={30}
              onClick={() => setAdminProfile((prev) => !prev)}
            />
            {adminProfile && <AdminProfile adminName={adminName} />}
          </div>
        </div>
      </div>
      {activePage === "home" && <AdminHome token={token} />}
      {activePage === "events" && <AdminEvents token={token} />}
      {activePage === "dashboard" && <AdminDashBoard token={token} />}
      {activePage === "display" && <AdminDisplay token={token} />}
    </div>
  );
}
export default AllAdminpages;