import Chart from "../../Components/Chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";

export default function Home() {
  return (
  <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="Distribution Analysis" grid dataKey="Active Movies"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      </div>
    );
}
