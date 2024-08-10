import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../Userstyles/Signin.css";
const Signin = () => {
  const history = useHistory();

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitSignin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/userLogin",
        {
          name: name,
          password: password,
          email: email,
        }
      );

      console.log(response.data);
      console.log("User ID from response:", response.data.student.id);
      console.log("Token from response:", response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userid", response.data.student.id);
      localStorage.setItem("useremail", response.data.student.email);


      history.push({
        pathname: "/all",
        state: { token: response.data.token, userId: response.data.student.id, useremail: response.data.student.email,},
      });

      alert("Login Successful.");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="sign-page">
      <div>
        <form className="box" onSubmit={handleSubmitSignin}>
          <h2>Event_Manager</h2>
          <p>Get your events managed...</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <button className="signin-button">SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
