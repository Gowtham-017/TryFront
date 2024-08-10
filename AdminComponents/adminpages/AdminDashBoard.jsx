import StatusCheck from "../adminpages/CreateEvents/StatusCheck";
function DashBoard() {
  return (
    <div className="'vbody'">
      <div className="dashb-img">
        <h1 className="dash-text">DashBoard</h1>
      </div>
      <div className="graph">
        <StatusCheck />
      </div>
    </div>
  );
}
export default DashBoard;
