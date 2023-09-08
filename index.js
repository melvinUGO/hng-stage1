const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const date = new Date();
const daysOfTheWeek = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const obj = {
  slack_name: "Melvin Ugochukwu",
  current_day: daysOfTheWeek[date.getDay()],
  utc_time: date.toISOString().split(".")[0] + "Z",
  track: "backend",
  github_file_url: "",
  github_repo_url: "",
  status_code: 200,
};

const item = new Date().getDay();
console.log(date.toISOString().split(".")[0] + "Z");

app.get("/", async (req, res) => {
  res.send("HNG stage 1");
});

app.get("/api", async (req, res) => {
  const { slack_name, track } = req.query;
  res.send("HNG stage 1");
});

app.listen(5000, () => console.log("server started"));
