const input = document.querySelector("input[type='datetime-local']");

const cardYears = document.querySelector(".card-years");
const cardDays = document.querySelector(".card-days");
const cardMonths = document.querySelector(".card-months");
const cardHours = document.querySelector(".card-hours");
const cardMinutes = document.querySelector(".card-minutes");
const cardSeconds = document.querySelector(".card-seconds");

const yourAgeElement = document.querySelector(".your-age");

function diff() {
  const a = moment(input.value);
  const b = moment();

  const diffDuration = moment.duration(b.diff(a));

  const seconds = b.diff(a, "seconds");
  const minutes = b.diff(a, "minutes");
  const hours = b.diff(a, "hours");
  const days = b.diff(a, "days");
  const months = b.diff(a, "months");
  const years = b.diff(a, "years");

  cardYears.innerHTML = diffDuration.years();
  cardMonths.innerHTML = diffDuration.months();
  cardDays.innerHTML = diffDuration.days();
  cardHours.innerHTML = diffDuration.hours();
  cardMinutes.innerHTML = diffDuration.minutes();
  cardSeconds.innerHTML = diffDuration.seconds();

  yourAgeElement.innerHTML = `
    <p>you are ${years} years old</p>
    <p>you are ${months} months old</p>
    <p>you are ${Math.floor(days / 7)} weeks old</p>
    <p>you are ${days} days old</p>
    <p>you are ${hours} hours old</p>
    <p>you are ${minutes} minutes old</p>
    <p>you are ${seconds} seconds old</p>`;
}

input.addEventListener("input", function () {
  setInterval(diff, 1000);
});