import "./App.css";
import AdminLandingpage from "./AdminComponents/adminpages/AdminLandingpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllAdminpages from "./AdminComponents/adminpages/AllAdminpages";
import AdminHome from "./AdminComponents/adminpages/AdminHome";
import Landingpage from "./UserComponents/Userpages/Landingpage";
import AllPages from "./UserComponents/Userpages/AllPages";
import { useState } from "react";
import Signin from "./UserComponents/Userpages/Signin";
function App() {
  const [openadmin, setAdmin] = useState(false);
  const [openuser, setUser] = useState(false);
  const handleAdmin = () => {
    setAdmin(true);
    setUser(false);
  };
  const handleUser = () => {
    setUser(true);
    setAdmin(false);
  };
  return (
    <div className="starts">
      <Router>
        <div className="start-page">
          {!openadmin && !openuser && (
            <>
              <button className="start-button" onClick={handleAdmin}>
                Admin
              </button>
              <button className="start-button" onClick={handleUser}>
                User
              </button>
            </>
          )}
        </div>
        <Switch>
          <Route path="/" exact>
            {openadmin && <AdminLandingpage />}
            {openuser && <Landingpage />}
          </Route>
          <Route path="/alladmin" exact component={AllAdminpages} />
          <Route path="/all" exact component={AllPages} />
          <Route path="/adminhome" exact component={AdminHome} />
          <Route path="/signup" exact component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;