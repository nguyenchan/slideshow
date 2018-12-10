let countDown;
const target = new Date("Dec 15, 2018 17:00:00");
let maintimer = document.querySelector("#maintimer");

function timer(destination) {
  const now = Date.now();
  const then = destination - now;
  console.log(displayTimeLeft(then / 1000));

  countDown = setInterval(() => {
    const secondsLeft = Math.round((destination - Date.now()) / 1000);
    let display = displayTimeLeft(secondsLeft);
    //console.log(secondsLeft)
    if (secondsLeft < 0) {
      maintimer.textContent = "done";
      clearInterval(countDown);
      return;
    }
    document.title = display;
    maintimer.textContent = display;
  }, 1000);
}

function displayTimeLeft(seconds) {
  const days = Math.floor(seconds / 86400);
  const remainderDays = seconds % 86400;
  const hours = Math.floor(remainderDays / 3600);
  const remainderHours = remainderDays % 3600;
  const mins = Math.floor(remainderHours / 60);
  const remainderSeconds = remainderHours % 60;
  //const display = `${mins}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;

  const display = `${days < 10 ? "0" : ""}${days}d ${
    hours < 10 ? "0" : ""
  }${hours}h ${mins < 10 ? "0" : ""}${mins}m ${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}s`;
  //timerDisplay.textContent = display;
  //console.log(display);
  return display;
}
timer(target);

//---------------------

// const panel = document.querySelectorAll(".panel");
// function toggleOpen() {
//   this.classList.toggle("open");
// }

// panel.forEach(panel => panel.addEventListener("click", toggleOpen));

const panel1 = document.querySelector(".panel1"),
  panel2 = document.querySelector(".panel2"),
  panel3 = document.querySelector(".panel3"),
  cap1 = document.querySelector(".panel_cap1"),
  cap2 = document.querySelector(".panel_cap2"),
  cap3 = document.querySelector(".panel_cap3");
panel1.addEventListener("click", () => {
  panel1.classList.add("open");
  panel2.classList.remove("open");
  panel3.classList.remove("open");
  cap1.classList.add("hidden");
  cap2.classList.remove("hidden");
  cap3.classList.remove("hidden");
});
panel2.addEventListener("click", () => {
  panel2.classList.add("open");
  panel1.classList.remove("open");
  panel3.classList.remove("open");
  cap2.classList.add("hidden");
  cap1.classList.remove("hidden");
  cap3.classList.remove("hidden");
});
panel3.addEventListener("click", () => {
  panel3.classList.add("open");
  panel2.classList.remove("open");
  panel1.classList.remove("open");
  cap3.classList.add("hidden");
  cap2.classList.remove("hidden");
  cap1.classList.remove("hidden");
});

maintimer.addEventListener("click", () => {
  panel1.classList.remove("open");
  panel2.classList.remove("open");
  panel3.classList.remove("open");
  cap1.classList.remove("hidden");
  cap2.classList.remove("hidden");
  cap3.classList.remove("hidden");
});
