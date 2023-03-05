import "./Percentage.css";
import React, { Component } from 'react'
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
export default class Percentage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: "",
      percentageData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 180,
        },
        {
          field: "percentage_value",
          headerName: "Percentage",
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
                    onClick={() => this.percentageDelete(params.row.percentage_id)}
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
        "http://localhost/Bioscoop/Project/api/Admin/Percentage/GetPercentage.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({percentageData: data });
      });
  }

  percentageDelete = (id) => {
    axios
      .post(
        "http://localhost/Bioscoop/Project/api/Admin/Percentage/DeletePercentage.php?id="+id
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
      percentage: this.state.percentage,
    };
    axios
      .post("http://localhost/Bioscoop/Project/api/Admin/Percentage/Percentage.php", dat)
      .then((response) => {
        console.log(response);
        if (response.data === "Success") {
          alert("Percentage Inserted Succesfuly");
          this.cancelCourse();
        } else {
          alert("Percentage Failed Succesfuly");
          this.cancelCourse();
        }
      });
  };

  cancelCourse = () => {
    document.getElementBy("percentageFrom").reset();
  };

  render() {
    return (
      <div className="Percentage">
        <div className="containerqqt">
          <form id="percentageFrom" onSubmit={this.saveData}>
            <span className="h14">Percentage Registration</span>
            <input
              type="name"
              name="percentage"
              onChange={this.inputSet}
              placeholder="Percentage "
            />
            <button type="submit" className="loginButtonqqt">
              Roll In
            </button>
          </form>
        </div>
        <div className="widgetq">
          <DataGrid
            rows={this.state.percentageData}
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
