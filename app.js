const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  var today = new Date();
  //for getting the current day number
  var currentDay = today.getDay();
  var day = "";

  //for creating all the week days
  var weekDays = new Array(7);
  weekDays[0] = "Sunday";
  weekDays[1] = "Monday";
  weekDays[2] = "Tuesday";
  weekDays[3] = "Wednesday";
  weekDays[4] = "Thursday";
  weekDays[5] = "Friday";
  weekDays[6] = "Saturday";
  // if (currentDay === 6 || currentDay === 0) {
  //   day = "final year project";

  //   // res.sendFile(__dirname + "/index.html");
  //   // res.write("Hey, you got a work today.");
  //   // res.send();  //we cannot send anything inside send, if we have written write method above it.
  //   //and again, I cannot have a sendFile and send inside same function.
  // } else {
  //   day = "Weekday";
  // }
  res.render("list", { kindOfDay: weekDays[currentDay] });
});

app.listen("3000", function () {
  console.log("server started at port 3000");
});
