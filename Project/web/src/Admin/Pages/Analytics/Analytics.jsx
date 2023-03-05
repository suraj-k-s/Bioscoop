import Chart from "../../Components/Chart/Chart";
import "./analytics.css";
import {userData} from "../../dummyData";
export default function Home() {
  return (
  <div className="analytics">
    <span className="heading">
     Monthly Wise Analytics
    </span>
      <Chart data={userData} title="Distribution Analysis" grid dataKey="Active Movies"/>
      </div>
      
    );
}
