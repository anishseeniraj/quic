import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Navbar from "./components/navbar.component";
import ActivitiesList from "./components/activities-list.component";
import CreateActivity from "./components/create-activity.component";
import ViewActivity from "./components/view-activity.component";
 
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ActivitiesList} />
        <Route path="/create" component={CreateActivity} />
        <Route path="/view/:id/:lat/:long" component={ViewActivity} />
      </div>
    </Router>
  );
}
 
export default App; 