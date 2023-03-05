import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Movies</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">18</span>
          <span className="featuredMoneyRate">-4<ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Joined Producers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25</span>
          <span className="featuredMoneyRate">+6<ArrowUpward className="featuredIcon"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Joined Distributors</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">22</span>
          <span className="featuredMoneyRate">+5<ArrowUpward className="featuredIcon"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
