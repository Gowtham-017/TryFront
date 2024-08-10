import "../adminstyles/AdminLandingpage.css";
import lp from "../adminasset/lp.png";
import { useState } from "react";
import Signin from "./AdminSignin";
function Landingpage() {
  const [signpage, setSignPage] = useState(false);
  const handlePage = () => {
    setSignPage(true);
  };
  return (
    <div className="landing-page">
      <div className="landing-item">
        <h1>Delightful <br />Events</h1><br />
        <p>starts here</p><br />
        <p>You are an Admin</p><br/>
        <button className="get-start-button" onClick={handlePage}>Get Started</button>
      </div>
      <img src={lp} width={700} height={700} className="page-image" />
      <div>
        {signpage && (
          <div className="over">
            <Signin />
          </div>
        )}
      </div>
    </div>
  );
}
export default Landingpage;