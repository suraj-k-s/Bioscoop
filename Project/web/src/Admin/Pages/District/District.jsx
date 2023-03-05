import "./District.css";
import React, { Component } from "react";
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";

export default class District extends Component {
  constructor(props) {
    super(props);
    this.state = {
      District: "",
      districtData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 180,
        },
        {
          field: "district_name",
          headerName: "District",
          width: 300,
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
                    onClick={() => this.districtDelete(params.row.district_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/Bioscoop/Project/api/Admin/District/GetDistrict.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({districtData: data });
      });
  }


  districtDelete = (id) => {
    axios
      .post(
        "http://localhost/Bioscoop/Project/api/Admin/District/DeleteDistrict.php?id="+id
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };


  saveData = (e) => {
    e.preventDefault();

    var dat = {
      district: this.state.district,
    };

    axios
      .post("http://localhost/Bioscoop/Project/api/Admin/District/District.php", dat)
      .then((response) => {
        if (response.data === "Success") {
          alert("District Inserted Succesfuly");
          this.cancelCourse();
          this.componentDidMount();
        } else {
          alert("District Failed Succesfuly");
          this.cancelCourse();
        }
      });
  };

  cancelCourse = () => {
    document.getElementBy("districtFrom").reset();
  };

  render() {
    return (
      <div className="District">
        <div className="containerdt">
          <form id="districtFrom" onSubmit={this.saveData}>
            <span className="h14">District Registration</span>
            <input
              type="name"
              name="district"
              onChange={this.inputSet}
              placeholder="District "
            />
            <button type="submit" className="loginButtondt">
              Roll In
            </button>
          </form>
        </div>
        <div className="widget1">
          <DataGrid
            rows={this.state.districtData}
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
