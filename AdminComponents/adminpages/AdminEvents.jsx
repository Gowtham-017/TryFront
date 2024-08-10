import "../adminstyles/AdminEvents.css";
import { useEffect, useState } from "react";
import noevent from "../adminasset/noevent.png";
import tech from "../adminasset/tech2.jpg";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import AdminCreateEvent from "./AdminCreateEvent";

function AdminEvents() {
  const [openEventbox, setOpenEventBox] = useState(false);
  const [selectButton, setSelectButton] = useState("upcoming");
  const [formsData, setFormsData] = useState(null);
  const [data, setData] = useState([]);

  const handleOpenEventBox = () => {
    setOpenEventBox(true);
  };

  const handleCloseEventBox = () => {
    setOpenEventBox(false);
  };

  const handleTabClick = (tab) => {
    setSelectButton(tab);
  };

  const handleEventCreate = (data) => {
    setFormsData(data);
    setData([...data, data]);
    setOpenEventBox(false);
  };

  const deleteEvent = (typeid) => {
    axios
      .delete(`http://localhost:8080/events/book/deletetype/${typeid}`)
      .then(() => {
        alert("Deleted Event");
        setData(data.filter((event) => event.typeid !== typeid));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/events/book/gettype")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formsData]);

  const UpcomingEvents = () => (
    <div className="events">
      {data && data.length > 0 ? (
        <>
          {data.map((event) => (
            <div key={event.typeid} className="created-events-box">
              <div>
                <img src={tech} height={200} width={200} alt="Event" />
              </div>
              <div className="created-events">
                <h1>{event.eventtype}</h1>
              </div>
              <div>
                <FaTrash
                  style={{
                    color: "black",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  onClick={() => deleteEvent(event.typeid)}
                />
              </div>
            </div>
          ))}
          <button className="create-event" onClick={handleOpenEventBox}>
            Create New Event
          </button>
        </>
      ) : (
        <>
          <div className="events">
            <img src={noevent} height={300} alt="No Upcoming Events" />
            <h2>No Upcoming Events</h2>
            <p>You have no upcoming events. Why not host one?</p>
            <button className="create-event" onClick={handleOpenEventBox}>
              Create Event
            </button>
          </div>
        </>
      )}
    </div>
  );

  const PastEvents = () => (
    <div className="events">
      <img src={noevent} height={300} />
      <h2>No Past Events</h2>
      <p>You have no past events. Why not host one?</p>
    </div>
  );

  return (
    <div id="event">
      <div className="event-page">
        <div className="event-items">
          <h1>Events</h1>
          <div>
            {["upcoming", "past"].map((tab) => (
              <button
                key={tab}
                className={`event-toggle ${
                  selectButton === tab ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {openEventbox && (
          <div>
            <div className="modal-container">
              <div className="modal-content">
                <AdminCreateEvent
                  onEventCreate={handleEventCreate}
                  onCloseBox={handleCloseEventBox}
                />
              </div>
            </div>
          </div>
        )}
        <div className="event-list">
          {selectButton === "upcoming" ? <UpcomingEvents /> : <PastEvents />}
        </div>
      </div>
    </div>
  );
}
export default AdminEvents;