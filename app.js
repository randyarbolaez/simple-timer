let minutesText = document.getElementById('minutes-text');
let secondsText = document.getElementById('seconds-text');

function timer(mins, secs, theEnd) {
  let timeInterval = setInterval(() => {
    minutesText.innerHTML = `${mins}m`;
    secondsText.innerHTML = `${secs}s`;

    secs--;

    if (mins == 0 && secs == -1) {
      clearInterval(timeInterval);
      minutesText.innerHTML = 'Timer is';
      secondsText.innerHTML = 'Done';
    }

    if (secs == -1) {
      secs = 59;
      mins--;
    }
  }, 1000);
}

function submitTimer(e) {
  e.preventDefault();
  let minutes = document.getElementById('minutes').value;
  let seconds = document.getElementById('seconds').value;

  timer(minutes, seconds);
}
