import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const timeLabel = document.getElementById("timeLabel");
const timeLabelBorder = document.getElementById("timeLabelBorder");
const dateLabel = document.getElementById("dateLabel");
const dateLabelBorder = document.getElementById("dateLabelBorder");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  let dayNum = today.getDay();
  var day;
  if (dayNum == 0) {
    day = "Sun";
  } else if (dayNum == 1) {
    day = "Mon";
  } else if (dayNum == 2) {
    day = "Tue";
  } else if (dayNum == 3) {
    day = "Wed";
  } else if (dayNum == 4) {
    day = "Thu";
  } else if (dayNum == 5) {
    day = "Fri";
  } else if (dayNum == 6) {
    day = "Sat";
  }
  let monthNum = today.getMonth();
  var month;
  if (monthNum == 0) {
    month = "January";
  } else if (monthNum == 1) {
    month = "February";
  } else if (monthNum == 2) {
    month = "March";
  } else if (monthNum == 3) {
    month = "April";
  } else if (monthNum == 4) {
    month = "May";
  } else if (monthNum == 5) {
    month = "June";
  } else if (monthNum == 6) {
    month = "July";
  } else if (monthNum == 7) {
    month = "August";
  } else if (monthNum == 8) {
    month = "September";
  } else if (monthNum == 9) {
    month = "October";
  } else if (monthNum == 10) {
    month = "November";
  } else if (monthNum == 11) {
    month = "December";
  }
  let date = today.getDate();
//  timeLabelBorder.text = `${hours}:${mins}`;
  timeLabel.text = `${hours}:${mins}`;
//  dateLabelBorder.text = `${day}, ${month} ${date}`;
  dateLabel.text = `${day}, ${month} ${date}`;
}