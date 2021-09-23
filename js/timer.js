import refs from "./refs.js";

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }

 onTick({ days, hours, mins, secs }) {
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.mins.textContent = mins;
      refs.secs.textContent = secs;
}
    
  getTime() {
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime =  this.targetDate - currentDate;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);

      // console.log(days, hours, mins, secs);
      this.onTick({ days, hours, mins, secs });

    }, 1000);

  }

  pad(value) {
  return String(value).padStart(2, '0');
}

  getTimeComponents(time) {

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
    return { days, hours, mins, secs };
}
}

const Timer = new CountdownTimer(
  '#timer-1',
  'Nov 10, 2021',
)

Timer.getTime();


function updateTimer({ days, hours, mins, secs }) {
  // refs.timer.textContent = `${days}:${hours}:${mins}:${secs}`;
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;

  console.log(days, hours, mins, secs);
}