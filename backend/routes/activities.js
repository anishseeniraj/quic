const router = require("express").Router();
let Activity = require("../models/activity.model");

router.route("/").get((req, res) => {
  Activity.find()
    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const contact = req.body.contact;
  const activity = req.body.activity;
  const age = req.body.age;
  const location = req.body.location;

  const newActivity = new Activity({
    username,
    contact,
    activity,
    age,
    location,
  });

  newActivity
    .save()
    .then(() => res.json("Activity added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
