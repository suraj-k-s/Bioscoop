import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ListItem from "../ListItem/ListItem";
import "./List.css";
import { useRef } from "react";


export default function List() {

  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" ) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" ) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="ListMovie">
      <span className="ListCinemaT">Cinema</span>
      <div className="WrapperC">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}

          style={{ height: "100%", width: "50px" }}
        
        />
        <div className="Container5" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ height: "100%", width: "50px" }}
        />
      </div>
    </div>
  );
}
