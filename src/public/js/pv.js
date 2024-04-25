
const refreshEverySecond = 1;

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

function generateFakeValuesV() {
    // Generate random tension values between 0 and 240V
    const L1 = Math.random() * 240;
    const L2 = Math.random() * 240;
    const L3 = Math.random() * 240;

    return { L1, L2, L3 };
}

function generateFakeValuesA() {
  // Generate random ampere values between 0 and 240V
  const L1 = Math.random() * 24;
  const L2 = Math.random() * 24;
  const L3 = Math.random() * 24;

  return { L1, L2, L3 };
}

const refreshTimer = document.getElementById('refresh-date');

const valuePowerACW = document.querySelectorAll('[width="70"][align="right"]')[0];
const valueTotalEnergy = document.querySelectorAll('[width="70"][align="right"]')[1];
const valueTotalEnergyByDay = document.querySelectorAll('[width="70"][align="right"]')[3];

// L1
const valuePVGeneratorV1 = document.querySelectorAll('[width="70"][align="right"]')[4];
const valueOutputPowerV1 = document.querySelectorAll('[width="70"][align="right"]')[5];
const valuePVGeneratorA1 = document.querySelectorAll('[width="70"][align="right"]')[6];
const valueOutputPowerW1 = document.querySelectorAll('[width="70"][align="right"]')[7];

// L2
const valuePVGeneratorV2 = document.querySelectorAll('[width="70"][align="right"]')[8];
const valueOutputPowerV2 = document.querySelectorAll('[width="70"][align="right"]')[9];
const valuePVGeneratorA2 = document.querySelectorAll('[width="70"][align="right"]')[10];
const valueOutputPowerW2 = document.querySelectorAll('[width="70"][align="right"]')[11];

// L3
const valuePVGeneratorV3 = document.querySelectorAll('[width="70"][align="right"]')[12];
const valueOutputPowerV3 = document.querySelectorAll('[width="70"][align="right"]')[13];
const valuePVGeneratorA3 = document.querySelectorAll('[width="70"][align="right"]')[14];
const valueOutputPowerW3 = document.querySelectorAll('[width="70"][align="right"]')[15];

let timerInSeconds = 0;

setInterval(() => {
  timerInSeconds += 1;

  const tensionValues = generateFakeValuesV();
  const ampereValues = generateFakeValuesA();

  refreshTimer.innerHTML = getDateTimeNow();

  // actual power
  valuePowerACW.innerHTML = parseFloat(tensionValues.L1 * ampereValues.L1+tensionValues.L2 * ampereValues.L2+tensionValues.L3 * ampereValues.L3).toFixed(2);
  // L1
  valuePVGeneratorV1.innerHTML = parseFloat(tensionValues.L1).toFixed(2);
  valueOutputPowerV1.innerHTML = parseFloat(tensionValues.L1).toFixed(2);
  valuePVGeneratorA1.innerHTML = parseFloat(ampereValues.L1).toFixed(2);
  valueOutputPowerW1.innerHTML = parseFloat(tensionValues.L1 * ampereValues.L1).toFixed(2);

  // L2
  valuePVGeneratorV2.innerHTML = parseFloat(tensionValues.L2).toFixed(2);
  valueOutputPowerV2.innerHTML = parseFloat(tensionValues.L2).toFixed(2);
  valuePVGeneratorA2.innerHTML = parseFloat(ampereValues.L2).toFixed(2);
  valueOutputPowerW2.innerHTML = parseFloat(tensionValues.L2 * ampereValues.L2).toFixed(2);

  // L3
  valuePVGeneratorV3.innerHTML = parseFloat(tensionValues.L3).toFixed(2);
  valueOutputPowerV3.innerHTML = parseFloat(tensionValues.L3).toFixed(2);
  valuePVGeneratorA3.innerHTML = parseFloat(ampereValues.L3).toFixed(2);
  valueOutputPowerW3.innerHTML = parseFloat(tensionValues.L3 * ampereValues.L3).toFixed(2);

}, refreshEverySecond * 1000);

