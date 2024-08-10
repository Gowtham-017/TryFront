import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./AllEvents.css";

// eslint-disable-next-line react/prop-types
function AllEvents({ token }) {
  const customAxios = axios.create({
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    responseType: "json",
    withCredentials: true,
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState(0);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.log("No token provided");
          return;
        }

        const response = await customAxios.get(
          "http://localhost:5001/api/v1/admin/rights/getallevent"
        );

        if (response.data) {
          console.log("Data received:", response.data);

          let eventData = Array.isArray(response.data)
            ? response.data
            : [response.data];

          console.log("Data fetched successfully:", eventData);
          setData(eventData);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);

        if (error.response && error.response.status === 401) {
          console.log("Authentication error. Redirecting to login...");
        } else {
          console.log("Full error response:", error.response);
          if (error.response && error.response.data) {
            console.log("Server error details:", error.response.data);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const filteredDataList = data.filter((evt) =>
    evt.eventdesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (event) => {
    setSelectedEvent(event);
    setShowModal(!isDeleteClicked);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setShowModal(false);
    setIsDeleteClicked(false);
  };

  const deleteEvent = (eventid) => {
    setIsDeleteClicked(true);

    customAxios
      .delete(`http://localhost:5001/api/v1/admin/rights/deleteone/${eventid}`)
      .then(() => {
        alert("Deleted Event");
        setData(data.filter((evt) => evt.eventid !== eventid));
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="imagegrid">
        {filteredDataList.map((evt, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => openModal(evt)}
          >
            <img
              src={evt.eventimg}
              style={{ height: "150px", width: "200px" }}
              alt={evt.eventname}
            />
            <p>{evt.eventname}</p>
            <div>
              <FaTrash onClick={() => deleteEvent(evt.eventid)} />
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              <center>{selectedEvent.eventname}</center>
              <br />
              Description : {selectedEvent.eventdesc}
              <br />
              Date : {selectedEvent.eventdate}
              <br />
              Time : {selectedEvent.eventtime}
              <br />
            </p>

            <br />
            <h5>Rate the Event</h5>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <span
                  key={starValue}
                  className={`star ${starValue <= rating ? "filled" : ""}`}
                  onClick={() => handleStarClick(starValue)}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="review">
              <textarea placeholder="Your Review" />
              <br />
              <br />
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllEvents;
