import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Activity = (props) => (
  <tr>
    <td>{props.activity.username}</td>
    <td>{props.activity.contact}</td>
    <td>{props.activity.activity}</td>
    <td>{props.activity.age}</td>
    <td>{props.activity.location}</td>
  </tr>
);

export default class ActivitiesList extends Component {
  constructor(props) {
    super(props);

    this.state = { activities: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/activities/")
      .then((response) => {
        this.setState({ activities: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  activityList() {
    return this.state.activities.map((currentActivity) => {
      return <Activity activity={currentActivity} key={currentActivity._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Current Activities</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Contact</th>
              <th>Activity</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{this.activityList()}</tbody>
        </table>
      </div>
    );
  }
}
