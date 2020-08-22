import React, { Component } from 'react';
import axios from 'axios';

export default class CreateActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      contact: "",
      activity: "",
      age: "",
      location: "",
    }

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeActivity = this.onChangeActivity.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    })
  }

  onChangeActivity(e) {
    this.setState({
      activity: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      contact: this.state.contact,
      activity: this.state.activity,
      age: this.state.age,
      location: this.state.location
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Activity</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Username: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>

        <div className="form-group"> 
          <label>Contact: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.contact}
              onChange={this.onChangeContact}
              />
        </div>

        <div className="form-group">
          <label>Activity: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.activity}
              onChange={this.onChangeActivity}
              />
        </div>

        <div className="form-group">
          <label>Age </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
              />
        </div>

        <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create New Activity" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
