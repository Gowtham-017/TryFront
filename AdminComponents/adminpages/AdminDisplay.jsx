import { useState } from "react";
import "../adminstyles/AdminDisplay.css";
import Settings from "./Dashboardpages/Settings";
import AllEvents from "./Dashboardpages/AllEvents";
import AllBookings from "./Dashboardpages/AllBookings";
import AllUsers from "./Dashboardpages/AllUsers";
import AddEvents from "./CreateEvents/AddEvents";
// eslint-disable-next-line react/prop-types
function DashBoard({ token }) {
  const [feed, SetFeed] = useState(false);
  const [event, SetEvent] = useState(true);
  const [pay, SetPay] = useState(false);
  const [settings, SetSettings] = useState(false);
  const [add, SetAdd] = useState(false);
  const handleEvent = () => {
    SetPay(false);
    SetFeed(false);
    SetEvent(true);
    SetSettings(false);
    SetAdd(false);
  };
  const handlePay = () => {
    SetPay(true);
    SetFeed(false);
    SetAdd(false);
    SetSettings(false);
    SetEvent(false);
  };
  const handleFeed = () => {
    SetFeed(true);
    SetPay(false);
    SetAdd(false);
    SetSettings(false);
    SetEvent(false);
  };
  const handleSettings = () => {
    SetFeed(false);
    SetPay(false);
    SetAdd(false);
    SetEvent(false);
    SetSettings(true);
  };
  const handleAdd = () => {
    SetFeed(false);
    SetPay(false);
    SetAdd(true);
    SetEvent(false);
    SetSettings(false);
  };
  return (
    <div id="verify">
      <div className="vbody">
        <div className="leftbar">
          <h2 style={{ color: "black" }}>DashBoard</h2>
          <div className="leftbar-tabs">
            <button className="leftbarbtn" onClick={handleEvent}>
              All Events
            </button>
            <button className="leftbarbtn" onClick={handleFeed}>
              Booked Details
            </button>
            <button className="leftbarbtn" onClick={handlePay}>
              Users
            </button>
            <button className="leftbarbtn" onClick={handleAdd}>
              Add Events
            </button>
            <button className="leftbarbtn" onClick={handleSettings}>
              Settings
            </button>
          </div>
        </div>

        {event && (
          <>
            <div className="dashboard-nav">
              <h1>All Events</h1>
            </div>
            <AllEvents token={token} />
          </>
        )}
        {feed && (
          <div className="dashboard-nav">
            <h1>Booked Details</h1>
            <AllBookings token={token} />
          </div>
        )}
        {pay && (
          <div className="dashboard-nav">
            <h1>Users</h1>
            <AllUsers token={token} />
          </div>
        )}
        {settings && (
          <>
            <div className="dashboard-nav">
              <h1>Settings</h1>
            </div>
            <Settings />
          </>
        )}
        {add && (
          <>
            <div className="dashboard-nav">
              <h1>Add New Events</h1>
            </div>
            <AddEvents token={token} />
          </>
        )}
      </div>
    </div>
  );
}
export default DashBoard;
