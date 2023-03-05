 import "./Place.css";
import React, { Component } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtData: [],
      placeData: [],
      districtId: "",
      placeName: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "district_name",
          headerName: "District",
          width: 260,
        },
        {
          field: "place_name",
          headerName: "Place",
          width: 260,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="categoryListDelete"
                  onClick={() => this.placeDelete(params.row.place_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }
  placeDelete = (id) => {
    axios
      .post(
        "http://localhost/Bioscoop/Project/api/Admin/Place/DeletePlace.php?id="+id
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      districtId: this.state.districtId,
      placeName: this.state.placeName,
    };

    axios
      .post(
        "http://localhost/Bioscoop/Project/api/Admin/Place/InsertPlace.php",
        dat
      )
      .then((response) => {
        if (response.data === "Success") {
          
          this.componentDidMount();
          this.cancelCourse();
        } else {
          alert("Failed");
        }
      });
  };


  cancelCourse = () => {
    document.getElementById("placeForm").reset();
  };


  componentDidMount() {
    axios
      .get(
        "http://localhost/Bioscoop/Project/api/Admin/District/GetDistrict.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ districtData: data });
      });
      axios
      .get(
        "http://localhost/Bioscoop/Project/api/Admin/Place/GetPlace.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ placeData: data });
      });
  }
  render() {
    return (
      <div className="Place">
        <div className="containerpt">
          <form onSubmit={this.saveData} method="post" id="placeForm">
            <span className="h12">Location Registration</span>
            <label className="boldplace"><b>Choose Place:</b></label>
            <select onChange={this.inputSet} className="selectp" name="districtId">
            <option value="">-----Select District------</option>
              {this.state.districtData.map((result) => (
                <option value={result.district_id}>
                  {result.district_name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="placeName"
              onChange={this.inputSet}
              placeholder="Location"
            />
            <button className="loginButtonpt">Roll In</button>
          </form>
        </div>
        <div className="widgetq">
          <DataGrid
            rows={this.state.placeData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    );
  }
}
