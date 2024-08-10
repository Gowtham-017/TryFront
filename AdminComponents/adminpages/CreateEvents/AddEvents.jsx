import  { useState } from "react";
import "./AddEvents.css";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function AddEvents({ token }) {
  const customAxios = axios.create({
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    responseType: "json",
    withCredentials: true,
  });

  const [eventsname, setEventName] = useState("");
  const [eventsdesc, setEventDesc] = useState("");
  const [eventsimg, setEventImg] = useState("");
  const [eventstime, setEventTime] = useState("");
  const [eventsdate, setEventDate] = useState("");

  const handleEventName = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDesc = (e) => {
    setEventDesc(e.target.value);
  };

  const handleEventDate = (e) => {
    setEventDate(e.target.value);
  };
  const handleEventTime = (e) => {
    setEventTime(e.target.value);
  };
  const handleEventImg = (e) => {
    setEventImg(e.target.value);
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    const data = {
      eventname: eventsname,
      eventdesc: eventsdesc,
      eventimg: eventsimg,
      eventtime: eventstime,
      eventdate: eventsdate,
    };

    try {
      const response = await customAxios.post(
        "http://localhost:5001/api/v1/admin/rights/postnewevent",
        data
      );

      console.log("Post Response:", response);

      if (response.status === 200) {
        alert("Successfully Added the Data");
      } else {
        console.error("Unexpected response:", response);
        alert("Error occurred while posting data");
      }
    } catch (error) {
      console.error("Error occurred while posting data:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
        console.log("Error response status:", error.response.status);
      }
      alert("Error occurred while posting data");
    }

    setEventDesc("");
    setEventImg("");
    setEventTime("");
    setEventDate("");
    setEventName("");
  };

  return (
    <div className="addpage">
      <form onSubmit={handleSubmitEvent}>
        <fieldset>
          <legend>Events</legend>
          <div className="addevt">
            <input
              type="text"
              placeholder="Event Name"
              value={eventsname}
              onChange={handleEventName}
            />
            <input
              type="text"
              placeholder="Event Desc"
              value={eventsdesc}
              onChange={handleEventDesc}
            />
            <input
              type="text"
              placeholder="Event Img"
              value={eventsimg}
              onChange={handleEventImg}
            />
            <input
              type="date"
              placeholder="Event Date"
              value={eventsdate}
              onChange={handleEventDate}
            />
            <input
              type="time"
              placeholder="Event Time"
              value={eventstime}
              onChange={handleEventTime}
            />
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
export default AddEvents;