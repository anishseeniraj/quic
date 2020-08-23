const router = require("express").Router();
let Activity = require("../models/activity.model");

// Retrieve all activities
router.route("/").get((req, res) => {
  Activity.find()
    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Submit one activity
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const contact = req.body.contact;
  const activity = req.body.activity;
  const age = req.body.age;
  const location = req.body.location;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  const newActivity = new Activity({
    username,
    contact,
    activity,
    age,
    location,
    latitude,
    longitude,
  });

  console.log(newActivity);

  newActivity
    .save()
    .then(() => res.json("Activity added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Retrieve a specific activity (for final view page)
router.route("/:id").get((req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
