import React, { Component } from "react";
import "./Distributorhome.css";
import axios from "axios";
import dcover from "../../../assets/images/dcover.jpg";
import {
  RequestQuote,
  MoreVert,
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
// import DList from "./DHome/DList";
// import DListItem from"../DistributorHome/DHome/DListItem/DListItem";
import K2 from "../../../assets/images/K2.jpg";

export default class DistributorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmData: [],
      perData: [],
      film: "",
      per: "",
      screen: "",
      rate: "",
      date: "",
      data11:[],
      viewImage : "",
      singleImage:"http://localhost/Bioscoop/Project/api/Files/2.jpeg"
    };
  }


 componentDidMount()
 {
  axios
  .get(
    "http://localhost/Bioscoop/Project/api/Producer/GetMovie.php"
  )
  .then((response) => {
    console.log(response);
    var data = response.data;
    this.setState({data11 : data})
    console.log(response);
  });
 }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("film", this.state.film);
    formData.append("per", this.state.per);
    formData.append("screen", this.state.screen);
    formData.append("rate", this.state.rate);
    formData.append("date", this.state.date);
    formData.append("id", sessionStorage.getItem("distributor-id"));
    axios({
      method: "POST",
      url: "http://localhost/Bioscoop/Project/api/Distributore/SendRequest.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      document.getElementById("model-idd").classList.remove("bg-active");
    });
  };

  add = () => {
    document.getElementById("model-idd").classList.add("bg-active");
  };
  close = () => {
    document.getElementById("model-idd").classList.remove("bg-active");


    document.getElementById("model-idd").classList.remove("bg-active");
  };

  funData = (r) =>
  {

  }

  componentDidMount() {
    axios
      .get("http://localhost/Bioscoop/Project/api/Producer/GetMovie.php")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ filmData: data });
      });
    axios
      .get(
        "http://localhost/Bioscoop/Project/api/Admin/Percentage/GetPercentage.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ perData: data });
      });
  }

  render() {
    console.log(this.state.date);
    return (
      <div className="distributedmovies">
        <div className="distributedbackMovie">
          <div className="distributedoverlay">
            <div className="distributedinfo">
              <div className="distributeditemInfoTop5">
                <span>3 hour 15 mins</span>
                <span className="distributedlimit">+16</span>
                <span>2019</span>
              </div>
              <span className="distributedDesc">
                <b>PREMAM:</b>While George's first love turns out to be a
                disappointment, Malar, a college lecturer, rekindles his love
                interest. His romantic journey takes him through several stages,
                helping him find his purpose.Following an official announcement
                in February 2014, the film was launched with a principal
                photography lasting for five months; from July to November 2014.
                Most of the film was shot in an around Aluva and Kochi. Premam
                was released on 28 May 2015 in Kerala and the following day
                across India.
              </span>
              <br />
              <br />
              <div className="distributedbuttons">
                <button
                  onClick={() => {
                    this.add();
                  }}
                  className="distributedPlay"
                >
                  <RequestQuote />
                  <span>Request</span>
                </button>
                <button className="distributedMore">
                  <MoreVert />
                  <span>More</span>
                </button>
              </div>
            </div>
          </div>
          <div className="modal-bgd" id="model-idd">
            <div className="modald">
              <div className="centermodald">
                <h3 className="h3">REQUEST FILM</h3>
                <div className="inputfieldproducer2">
                  <label className="labeldis">Film Name</label>
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <select
                    name="film"
                    onChange={this.inputSet}
                    className="selectdistributor"
                  >
                    <option value="">---Select----</option>
                    {this.state.filmData.map((result) => (
                      <option value={result.film_id}>{result.film_name}</option>
                    ))}{" "}
                  </select>
                </div>

                <div className="inputfieldproducer2">
                  <label className="labeldis">Giving %</label>
                  &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <select
                    name="per"
                    onChange={this.inputSet}
                    className="selectdistributor"
                  >
                    <option value="">---Select----</option>
                    {this.state.perData.map((result) => (
                      <option value={result.percentage_id}>
                        {result.percentage_value}
                      </option>
                    ))}{" "}
                  </select>
                </div>
                <div className="inputfieldproducer2">
                  <label className="labeldis">Offer Screens</label>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                  <input
                    type="text"
                    name="screen"
                    onChange={this.inputSet}
                    className="inputfielddistributor"
                    placeholder="(Theatre Release)"
                  />
                </div>
                <div className="inputfieldproducer2">
                  <label className="labeldis">Offer Rate</label>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    name="rate"
                    onChange={this.inputSet}
                    className="inputfielddistributor"
                    placeholder="(Min Lakhs $)"
                  />
                </div>
                <div className="inputfieldproducer2">
                  <label className="labeldis">Release</label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="Date"
                    name="date"
                    onChange={this.inputSet}
                    className="inputfielddistributor"
                    placeholder="Expected Date"
                  />
                </div>

                <span
                  className="modal-close1"
                  onClick={() => {
                    this.close();
                  }}
                >
                  X
                </span>
                <div className="subcand">
                  <button className="subcand1" onClick={this.saveData}>
                    Submit
                  </button>
                  <button className="subcand2">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div className="distributedPoster">
            <img src={this.state.singleImage} alt="" className="distributedCover" />
          </div>
          <div className="distributedcinema">
            <div className="DListMovie">
              <span className="DListCinemaT">Cinema</span>
              <div className="DWrapperC">
                {/* <ArrowBackIosOutlined
                  className="DsliderArrow left"
                  // onClick={() => handleClick("left")}

                  // style={{ height: "100%", width: "50px" }}
                /> */}
                {this.state.filmData.map((result) => (
                      <div className="DContainer5">
                      <div
                        className="DListItemC"
                        
                      >
                        <img src={result.film_poster1} alt="" className="DImgLucifer" onClick={()=>this.setState({singleImage:result.film_poster1})} />
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
                            A major power struggle occurs when the leader of a
                            political party passes away. In the midst of the chaos,
                            a mysterious man named Stephen steps in to ascend the
                            throne.
                          </div>
                          <div className="Dgenre">Action</div>
                        </div>
                      </div>
                    </div>  
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
