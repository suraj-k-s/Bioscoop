import "./sidebar.css";
import { Link } from "react-router-dom";
import { Percent,CameraIndoor,Theaters,AddLocation,AddLocationAlt,LineStyle,Timeline,Movie ,AttachMoney,BarChart,PersonAddAlt1,PersonAddAlt,Reviews} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              <Link to="/Admin" className="text1">Home</Link>
            </li>
            <li className="sidebarListItem">
              <Timeline  className="sidebarIcon"/>
              <Link to="/Admin/Analytics" className="text">Analytics</Link>
            </li>
         
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Basic Data</h3>
          <ul className="sidebarList">
          
            <li className="sidebarListItem">
              <AddLocation  className="sidebarIcon"/>
              <Link to="/Admin/District" className="text">District</Link>
              
            </li>
            <li className="sidebarListItem">
              <AddLocationAlt  className="sidebarIcon"/>
              <Link to="/Admin/Place" className="text">Place</Link>
              
            </li>
            <li className="sidebarListItem">
              <Theaters  className="sidebarIcon"/>
              <Link to="/Admin/Genre" className="text">Genre</Link>
              
            </li>
            <li className="sidebarListItem">
              <CameraIndoor  className="sidebarIcon"/>
              <Link to="/Admin/Platform" className="text">Platform</Link>
              
            </li>
            <li className="sidebarListItem">
              <Percent  className="sidebarIcon"/>
              <Link to="/Admin/Percentage" className="text">Percentage</Link>
              
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Movie  className="sidebarIcon"/>
              <Link to="/Admin/Movies" className="text">Movies Now</Link>
            </li>
            <li className="sidebarListItem">
              <AttachMoney  className="sidebarIcon"/>
              <Link to="/Admin/Transactions" className="text">Transactions</Link>
            </li>
            <li className="sidebarListItem">
              <BarChart  className="sidebarIcon"/>
              <Link to="/Admin/Reports" className="text">Report</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          
            <li className="sidebarListItem">
              <PersonAddAlt1  className="sidebarIcon"/>
              <Link to="/Admin/ProducerRequest" className="text">Producer Request</Link>
              
            </li>
            <li className="sidebarListItem">
              <PersonAddAlt  className="sidebarIcon"/>
              <Link to="/Admin/DistributorRequest" className="text">Distributor Request</Link>
              
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Feedback</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Reviews className="sidebarIcon" />
              Reviews
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
