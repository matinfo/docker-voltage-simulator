function getDateTimeNow() {
  let date_time = new Date();

  // get current date
  // adjust 0 before single digit date
  let date = ("0" + date_time.getDate()).slice(-2);
  // get current month
  let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
  // get current year
  let year = date_time.getFullYear();
  // get current hours
  let hours = date_time.getHours();
  // get current minutes
  let minutes = date_time.getMinutes();
  // get current seconds
  let seconds = date_time.getSeconds();
  // return date & time in YYYY-MM-DD HH:MM:SS format
  return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}

function generateFakeTensionValues() {
    // Generate random tension values between 0 and 240V
    const L1 = Math.random() * 240;
    const L2 = Math.random() * 240;
    const L3 = Math.random() * 240;

    return { L1, L2, L3 };
}

const refreshTimer = document.getElementById('refresh-date');
const refreshTimerL1 = document.getElementById('refresh-l1');
const refreshTimerL2 = document.getElementById('refresh-l2');
const refreshTimerL3 = document.getElementById('refresh-l3');

let timerInSeconds = 0;

setInterval(() => {
  timerInSeconds += 1;

  const tensionValues = generateFakeTensionValues();

  refreshTimer.innerHTML = getDateTimeNow();
  refreshTimerL1.innerHTML = parseFloat(tensionValues.L1).toFixed(2);
  refreshTimerL2.innerHTML = parseFloat(tensionValues.L2).toFixed(2);
  refreshTimerL3.innerHTML = parseFloat(tensionValues.L3).toFixed(2);

}, 5 * 1000);

