const endDate = "19 Nov 2023 12:00 AM";
// const endDate = "16 feb 2024 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(diff);

  // input jab html mai use hota hai toh hum .value hi use kar sakte hai innertext-html nahi kar sakte .. !

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff) % 60;
};
clock();

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(() => {
  clock();
}, 1000);
