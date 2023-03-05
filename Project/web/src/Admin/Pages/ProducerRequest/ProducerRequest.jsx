import "./ProducerRequest.css";
import axios from "axios";
import React, { Component } from "react";

export default class ProducerRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost/Bioscoop/Project/api/Admin/Producer/GetProducer.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ data: data });
      });
  }
  acceptProducer = (id) => {
    axios
    .post(
      "http://localhost/Bioscoop/Project/api/Admin/Producer/AcceptProducer.php?id="+id
    )
    .then((response) => {
      if (response.data === "Success") {
        this.componentDidMount();
      } else {
        alert("Failed");
      }
    });
  };
  rejectProducer = (id) => {
    axios
    .post(
      "http://localhost/Bioscoop/Project/api/Admin/Producer/RejectProducer.php?id="+id
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
        <div className="ProducerRequest">
          <h3 className="widgetLgTitle5">Producer Join Requests</h3>
          <table className="widgetLgTable5">
            <tr className="widgetLgTr5">
              <th className="widgetLgTh5">Name</th>
              <th className="widgetLgTh5">Date Of Request</th>
              <th className="widgetLgTh5">Status</th>
              <th className="widgetLgTh5">Take Action</th>
            </tr>
            {this.state.data.map((result) => (
              <tr className="widgetLgTr5">
                <td className="widgetLgUser5">
                  <img
                    src={result.producer_idproof}
                    alt=""
                    className="widgetLgImg5"
                  />
                  <span className="widgetLgName5">{result.producer_name}</span>
                </td>
                <td className="widgetLgDate5">{result.producer_doj}</td>
                <td className="widgetLgDate5">{result.produ_status}</td>
                <td className="widgetLgStatus5"><button
                    className="widgetLgButton5  Accept"
                    onClick={() => this.acceptProducer(result.producer_id)}
                  >
                    Accept
                  </button>
                  <button
                    className="widgetLgButton5  Reject"
                    onClick={() => this.rejectProducer(result.producer_id)}
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
