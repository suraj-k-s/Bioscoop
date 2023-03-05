import React from "react";
import "./Movies.css";
import Cover from "../../../assets/images/m11.jpg";
import m2 from "../../../assets/images/m2.jpg";
// import ListItem from "../../Pages/Home/ListItem/ListItem";
// import { useRef } from "react";
import {
  AddTask,
  MoreVert,
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
// import List from "../Home/List/List";
export default function ({ type }) {
  return (
    <div className="Movies">
      <div className="backgroundMovie">
        <div className="overlay">
          {type && (
            <div className="category">
              <span>{type === "movie" ? "MOVIES" : "Series"} </span>
              <select name="genre" className="MovieSelect" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="thriller">Thriller</option>
                <option value="comedy">Comedy</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="romantic">Romantic</option>
              </select>
            </div>
          )}
          <div className="info">
            <div className="itemInfoTop5">
              <span>3 hour 15 mins</span>
              <span className="limit">+16</span>
              <span>2019</span>
            </div>
            <span className="Desc">
              Avengers: Endgame is a 2019 American superhero film based on the
              Marvel Comics superhero team the Avengers. Produced by Marvel
              Studios and distributed by Walt Disney Studios Motion Pictures, it
              is the direct sequel to Avengers: Infinity War (2018) and the 22nd
              film in the Marvel Cinematic Universe (MCU). Directed by Anthony
              and Joe Russo and written by Christopher Markus and Stephen
              McFeely, the film features an ensemble cast including Robert
              Downey Jr.
            </span>
            <br />
            <br />
            <div className="buttons">
              <button className="Play">
                <AddTask />
                <span>Publish</span>
              </button>
              <button className="More">
                <MoreVert />
                <span>More</span>
              </button>
            </div>
          </div>
        </div>
        <div className="Poster">
          <img src={Cover} alt="" className="Cover" />
        </div>
        <div className="cinema">
          <div className="ListMovie">
            <span className="ListCinemaT">Cinema</span>
            <div className="WrapperC">
              <div className="Container5">
                <div
                  className="ListItemC"
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
                      A major power struggle occurs when the leader of a
                      political party passes away. In the midst of the chaos, a
                      mysterious man named Stephen steps in to ascend the
                      throne.
                    </div>
                    <div className="genre">Action</div>
                  </div>
                </div>
              </div>

              <div className="Container5">
                <div
                  className="ListItemC"
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
                      A major power struggle occurs when the leader of a
                      political party passes away. In the midst of the chaos, a
                      mysterious man named Stephen steps in to ascend the
                      throne.
                    </div>
                    <div className="genre">Action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
