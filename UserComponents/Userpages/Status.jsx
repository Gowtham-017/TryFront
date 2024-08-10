import { useEffect, useState } from "react";
import axios from "axios";
import "../Userstyles/Status.css";
// eslint-disable-next-line react/prop-types
function Status({ token, userid }) {
  const customAxios = axios.create({
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    responseType: "json",
    withCredentials: true,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.log("No token provided");
          return;
        }
        const response = await customAxios.get(
          "http://localhost:5001/api/user/rights/getallbooking"
        );
        if (response.data) {
          console.log("Data received:", response.data);
          let eventData = Array.isArray(response.data)
            ? response.data
            : [response.data];
          console.log("Data fetched successfully:", eventData);
          const filteredData = eventData.filter((booking) => {
            const userProp = String(userid).trim();
            const bookingUserId = String(booking.userid).trim(); 
            return userProp === bookingUserId;
          });
          console.log("Filtered Data:", filteredData);
          setData(filteredData);
          // setData(eventData);
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
      }
    };
    fetchData();
  }, [token]);

  const deletebooking = (bookingid) => {
    customAxios
      .delete(
        `http://localhost:5001/api/user/rights/deleteobooking/${bookingid}`
      )
      .then(() => {
        alert("Deleted Event");
        setData(data.filter((evt) => evt.bookingid !== bookingid));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="container4">
        <h1>Booked Events</h1>
        <br />
        <center>
          <div>
            <table id="customers" border={1}>
              <thead>
                <tr>
                  <th>BookingId</th>
                  <th>UserId</th>
                  <th>Event Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((booking) => (
                  <tr key={booking.bookingId}>
                    <td>{booking.bookingid}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.eventname}</td>
                    <td>
                      {booking.status
                        ? JSON.parse(booking.status).status
                        : null}
                    </td>
                    <td onClick={() => deletebooking(booking.bookingid)}>
                      Remove
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </div>
  );
}
export default Status;
