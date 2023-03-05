import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } 
  from "@mui/icons-material";
  import DListItem from "../DHome/DListItem/DListItem";
  import "./Dlist.css";
  import { useRef } from "react";
  
import { useState } from "react";
import { useEffect} from "react";
import axios from "axios";


  const [filimData, setFilimData] = useState([]);

  const fetchData = () =>{
    axios
    .get(
      "http://localhost/Bioscoop/Project/api/Distributore/GetFilm.php"
    )
    .then((response) => {
      var data = response.data;
      setFilimData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  
  
  export default function DList() {
  
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
      <div className="DListMovie">
        <span className="DListCinemaT">Cinema</span>
        <div className="DWrapperC">
          <ArrowBackIosOutlined
            className="DsliderArrow left"
            onClick={() => handleClick("left")}
  
            style={{ height: "100%", width: "50px" }}
          
          />
          <div className="DContainer5" ref={listRef}>
            <DListItem />
            <DListItem />
            <DListItem />
            <DListItem />
            <DListItem />
            <DListItem />
            <DListItem />
            <DListItem />
            <DListItem />
            <DListItem />
          </div>
          <ArrowForwardIosOutlined
            className="DsliderArrow right"
            onClick={() => handleClick("right")}
            style={{ height: "100%", width: "50px" }}
          />
        </div>
      </div>
    );
  }