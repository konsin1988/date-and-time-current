let mode = "full";
const output_date = document.getElementById("output_date");
const output_time = document.getElementById("output_time");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

let time_options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formatDate = new Intl.DateTimeFormat("ru-Ru");
const formatTime = new Intl.DateTimeFormat("ru-Ru", time_options);

function createDate(now) {
  this.date = formatDate.format(now);
  this.time = formatTime.format(now);
  this.setDateTime = function () {
    output_time.textContent = this.time;
    output_date.textContent = this.date;
  };
}

fullBtn.onclick = function () {
  refreshClasses();
  mode = "full";
  format(mode);
  fullBtn.classList.add("activated");
};
dateBtn.onclick = function () {
  refreshClasses();
  mode = "date";
  format(mode);
  dateBtn.classList.add("activated");
};
timeBtn.onclick = function () {
  refreshClasses();
  mode = "time";
  format(mode);
  timeBtn.classList.add("activated");
};

function refreshClasses() {
  fullBtn.classList.remove("activated");
  dateBtn.classList.remove("activated");
  timeBtn.classList.remove("activated");
}

format(mode);

setInterval(() => {
  format(mode);
}, 1000);

function format(formatMode) {
  const now = new createDate(new Date());
  switch (formatMode) {
    case "time":
      now.date = "";
      break;
    case "date":
      now.time = "";
      break;
  }
  now.setDateTime();
}
