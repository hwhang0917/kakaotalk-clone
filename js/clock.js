const jsClock = document.getElementById("jsClock");

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  jsClock.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 60000);
}

init();
