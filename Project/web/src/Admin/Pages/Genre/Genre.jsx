import "./Genre.css";
import React, { Component } from "react";
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";

export default class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      genreData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 180,
        },
        {
          field: "genre_name",
          headerName: "Genre",
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
                  onClick={() => this.genreDelete(params.row.genre_id)}
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
        "http://localhost/Bioscoop/Project/api/Admin/Genre/GetGenre.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ genreData: data });
      });
  }

  genreDelete = (id) => {
    axios
      .post(
        "http://localhost/Bioscoop/Project/api/Admin/Genre/DeleteGenre.php?id="+id
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
      genre: this.state.genre,
    };

    axios
      .post("http://localhost/Bioscoop/Project/api/Admin/Genre/Genre.php", dat)
      .then((response) => {
        if (response.data === "Success") {
          alert("Genre Inserted Succesfuly");
          this.cancelCourse();
        } else {
          alert("Genre Failed Succesfuly");
          this.cancelCourse();
        }
      });
  };

  cancelCourse = () => {
    document.getElementBy("genreFrom").reset();
  };

  render() {
    return (
      <div className="Genre">
        <div className="containergt">
          <form id="genreFrom" onSubmit={this.saveData}>
            <span className="h14">Genre Registration</span>
            <input
              type="name"
              name="genre"
              onChange={this.inputSet}
              placeholder="Genre Type"
            />
            <button type="submit" className="loginButtongt">
              Roll In
            </button>
          </form>
        </div>
        <div className="widgetG">
          <DataGrid
            rows={this.state.genreData}
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
