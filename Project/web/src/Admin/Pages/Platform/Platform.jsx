import "./Platform.css";
import React, { Component } from 'react'
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";

export default class Platform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      platformData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 180,
        },
        {
          field: "platform_name",
          headerName: "Platform",
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
                  onClick={() => this.platformDelete(params.row.platform_id)}
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
        "http://localhost/Bioscoop/Project/api/Admin/Platform/GetPlatform.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({platformData: data });
      });
  }

  platformDelete = (id) => {
    axios
      .post(
        "http://localhost/Bioscoop/Project/api/Admin/Platform/DeletePlatform.php?id="+id
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
      platform: this.state.platform,
    };
    axios
      .post("http://localhost/Bioscoop/Project/api/Admin/Platform/Platform.php", dat)
      .then((response) => {
        console.log(response);
        if (response.data === "Success") {
          alert("Platform Inserted Succesfuly");
          this.cancelCourse();
        } else {
          alert("Platform Failed Succesfuly");
          this.cancelCourse();
        }
      });
  };

  cancelCourse = () => {
    document.getElementBy("platformFrom").reset();
  };

  render() {
    return (
      <div className="Platform">
        <div className="containerppt">
          <form id="platformFrom" onSubmit={this.saveData}>
            <span className="h14">Platform Registration</span>
            <input
              type="name"
              name="platform"
              onChange={this.inputSet}
              placeholder="Platform "
            />
            <button type="submit" className="loginButtonppt">
              Roll In
            </button>
          </form>
        </div>
        <div className="widgetPL">
          <DataGrid
            rows={this.state.platformData}
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
