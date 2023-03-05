import "./ListItem.css";
import m2 from "../../../../assets/images/m2.jpg";
import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { useState } from "react";
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="ListItemC"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={m2} alt="" className="ImgLucifer" />
      <div className="Iteminfo">
        <div className="Icons">
          <PlayArrow className="ButtonAA" />
          <Add className="ButtonAA" />
          <ThumbUpOutlined className="ButtonAA" />
          <ThumbDownOutlined className="ButtonAA" />
        </div>
        <div className="itemInfoTop">
          <span>2 hour 54 mins</span>
          <span className="limit">+16</span>
          <span>2019</span>
        </div>
        <div className="desc">
          A major power struggle occurs when the leader of a political party
          passes away. In the midst of the chaos, a mysterious man named Stephen
          steps in to ascend the throne.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
}
