import { useState } from "react";
import "../adminstyles/AdminCreateEvent.css";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import event from "../adminasset/logo.jpg";
// eslint-disable-next-line react/prop-types
function AdminCreateEvent({ onEventCreate, onCloseBox }) {
  const [type, setType] = useState("");
  const handleType = (e) => {
    setType(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      eventtype: type,
    };
    try {
        await axios.post('http://localhost:8080/events/book/posttype', data);
        alert("Successfully Added the Data");
      } catch (error) {
        console.log(error);
        alert("Error occurred while posting data");
      }
    onEventCreate(data);
    onCloseBox();
    setType("");
  };
  return (
    <div className="">
      <div>
        <FaTrash className="close-icon" onClick={onCloseBox} />
      </div>
      <div className="evntcreatebox">
        <div className="createboxleft">
          <img src={event} alt="event" height={300} width={300} />
        </div>
        <div className="createboxright">
          <form onSubmit={handleSubmit} className="eventdetails">
            <h1>Content</h1>
            <input
              type="text"
              placeholder="Event Type"
              value={type}
              onChange={handleType}
            />
            <button className="createbutton" onClick={''}>
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AdminCreateEvent;