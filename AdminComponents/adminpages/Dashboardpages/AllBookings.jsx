import { useEffect, useState } from "react";
import "./AllBookings.css";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function AllBookings({ token }) {
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
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.log("No token provided");
          return;
        }

        const response = await customAxios.get(
          "http://localhost:5001/api/v1/admin/rights/getallbooking"
        );

        if (response.data) {
          console.log("Data received:", response.data);

          let eventData = Array.isArray(response.data)
            ? response.data
            : [response.data];

          console.log("Data fetched successfully:", eventData);
          setData(eventData);
          setFilteredDataList(eventData);
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
        `http://localhost:5001/api/v1/admin/rights/deleteonebooking/${bookingid}`
      )
      .then(() => {
        alert("Deleted Event");
        setData(data.filter((evt) => evt.bookingid !== bookingid));
        setFilteredDataList(
          filteredDataList.filter((evt) => evt.bookingid !== bookingid)
        );
      })
      .catch((error) => console.log(error));
  };

  const handleStatusChange = (bookingid, status) => {
    customAxios
      .put(
        `http://localhost:5001/api/v1/admin/rights/updatebookStatus/${bookingid}`,
        {
          status,
        }
      )
      .then(() => {
        alert("Status updated successfully");
        setData((prevData) =>
          prevData.map((booking) =>
            booking.bookingid === bookingid ? { ...booking, status } : booking
          )
        );
        setFilteredDataList((prevData) =>
          prevData.map((booking) =>
            booking.bookingid === bookingid ? { ...booking, status } : booking
          )
        );
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (search) => {
    const filteredList = data.filter((booking) =>
      booking.organisername.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDataList(filteredList);
  };

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

      <div className="container1">
        <center>
          <div>
            <table id="customers" border={1}>
              <thead>
                <tr>
                  <th>OrgName</th>
                  <th>Event Name</th>
                  <th>BookingId</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDataList.map((booking) => (
                  <tr key={booking.bookingId}>
                    <td>{booking.organisername}</td>
                    <td>{booking.eventname}</td>
                    <td>{booking.bookingid}</td>
                    <td>{booking.location}</td>
                    <td>
                      <select
                        value={booking.status || "Status"}
                        onChange={(e) =>
                          handleStatusChange(booking.bookingid, e.target.value)
                        }
                      >
                        <option>Status</option>
                        <option>Confirmed</option>
                        <option>Pending</option>
                      </select>
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
export default AllBookings;
