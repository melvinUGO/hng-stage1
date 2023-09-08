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
  slack_name: "",
  current_day: daysOfTheWeek[date.getDay()],
  utc_time: date.toISOString().split(".")[0] + "Z",
  track: "",
  github_file_url: "https://github.com/melvinUGO/hng-stage1/blob/main/index.js",
  github_repo_url: "https://github.com/melvinUGO/hng-stage1",
  status_code: 200,
};

const item = new Date().getDay();
console.log(date.toISOString().split(".")[0] + "Z");

app.get("/", async (req, res) => {
  res.send("HNG stage 1");
});

app.get("/api", async (req, res) => {
  const { slack_name, track } = req.query;
  if (slack_name || track) {
    res.status(200).json({ ...obj, slack_name, track });
  } else {
    res.status(400).json({ message: "Provide query fields" });
  }
});

app.listen(5000, () => console.log("server started"));
