import "./Dlistitem.css";
import K2 from "../../../../../assets/images/K2.jpg";
import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { useEffect} from "react";
import axios from "axios";
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
 

  return (
    <div
      className="DListItemC"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={K2} alt="" className="DImgLucifer" />
      <div className="DIteminfo">
        <div className="DIcons">
          <PlayArrow className="DButtonAA" />
          <Add className="DButtonAA" />
          <ThumbUpOutlined className="DButtonAA" />
          <ThumbDownOutlined className="DButtonAA" />
        </div>
        <div className="DitemInfoTop">
          <span>2 hour 54 mins</span>
          <span className="Dlimit">+16</span>
          <span>2019</span>
        </div>
        <div className="Ddesc">
          A major power struggle occurs when the leader of a political party
          passes away. In the midst of the chaos, a mysterious man named Stephen
          steps in to ascend the throne.
        </div>
        <div className="Dgenre">Action</div>
      </div>
    </div>
  );
}