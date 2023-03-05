import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import p1 from "../../../assets/images/p1.jpg";
import p2 from "../../../assets/images/p2.jpg";
import p3 from "../../../assets/images/p3.jpg";
import p4 from "../../../assets/images/p4.jpg";
import p5 from "../../../assets/images/p5.jpg";
import p6 from "../../../assets/images/p6.jpg";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmlistItems">
          <img src={p1} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Vijay Babu</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmlistItems">
          <img src={p2} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anwar Rasheed</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmlistItems">
          <img src={p3} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dulquer Salman</span>
            <span className="widgetSmUserTitle">Distributor</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmlistItems">
          <img src={p4} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Manniyanpilla Raju</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmlistItems">
          <img src={p5} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nivin Pauly</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmlistItems">
          <img src={p6} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aamir Khan</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
