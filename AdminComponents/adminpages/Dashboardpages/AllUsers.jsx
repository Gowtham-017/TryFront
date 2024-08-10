import { useEffect, useState } from "react";
import "./AllUsers.css";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function AllUsers({ token }) {
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
  //get
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.log("No token provided");
          return;
        }

        const response = await customAxios.get(
          "http://localhost:5001/api/v1/admin/rights/getallusers"
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
      }
    };

    fetchData();
  }, [token]);
  //delete
  const deleteUser = (id) => {
    customAxios
      .delete(`http://localhost:5001/api/v1/admin/rights/deleteoneuser/${id}`)
      .then(() => {
        alert("Deleted User");
        setData(data.filter((evt) => evt.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="container2">
        <center>
          <div>
            <table id="customers" className="tables" border={1}>
              <thead>
                <tr>
                  <th className="thh">UserId</th>
                  <th className="thh">Email</th>
                  <th className="thh">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td className="tdd">{user.id}</td>
                    <td className="tdd">{user.email}</td>
                    <td className="tdd">
                      <div>
                        <button className="remove-user" onClick={() => deleteUser(user.id)}>
                          Remove User
                        </button>
                      </div>
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
export default AllUsers;
