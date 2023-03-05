import "./DistributorRequest.css";
import axios from "axios";
import React, { Component } from "react";

export default class DistributorRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost/Bioscoop/Project/api/Admin/Distributor/GetDistributor.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ data: data });
      });
  }
  acceptDistributor = (id) => {
    axios
    .post(
      "http://localhost/Bioscoop/Project/api/Admin/Distributor/AcceptDistributor.php?id="+id
    )
    .then((response) => {
      if (response.data === "Success") {
        this.componentDidMount();
      } else {
        alert("Failed");
      }
    });
  };
  rejectDistributor = (id) => {
    axios
    .post(
      "http://localhost/Bioscoop/Project/api/Admin/Distributor/RejectDistributor.php?id="+id
    )
    .then((response) => {
      if (response.data === "Success") {
        this.componentDidMount();
      } else {
        alert("Failed");
      }
    });
  };
  render() {
    return (
      <div>
        <div className="DistributorRequest">
          <h3 className="widgetLgTitle8">Distributor Join Requests</h3>
          <table className="widgetLgTable8">
            <tr className="widgetLgTr8">
              <th className="widgetLgTh8">Name</th>
              <th className="widgetLgTh8">Date Of Request</th>
              <th className="widgetLgTh8">Status</th>
              <th className="widgetLgTh8">Take Action</th>
            </tr>
            {this.state.data.map((result) => (
              <tr className="widgetLgTr8">
                <td className="widgetLgUser8">
                  <img
                    src={result.distributor_idproof}
                    alt=""
                    className="widgetLgImg8"
                  />
                  <span className="widgetLgName8">{result.distributor_name}</span>
                </td>
                <td className="widgetLgDate8">{result.distributor_doj}</td>
                <td className="widgetLgDate8">{result.dis_status}</td>
                <td className="widgetLgStatus8"><button
                    className="widgetLgButton8  Accept"
                    onClick={() => this.acceptDistributor(result.distributor_id)}
                  >
                    Accept
                  </button>
                  <button
                    className="widgetLgButton8  Reject"
                    onClick={() => this.rejectDistributor(result.distributor_id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
