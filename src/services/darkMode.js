const toggleBall = document.getElementById("toggle-ball");
const toggleSwitch = document.getElementById("toggle");
const body = document.body

if (localStorage) {
  if (localStorage.getItem("mode") === "dark") {
    body.classList.remove("light");
    body.classList.add("dark-mode");
    toggleBall.classList.replace("off", "on");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light");
    toggleBall.classList.replace("on", "off");
  }
}

toggleSwitch.addEventListener("click", (e) => {
  if (toggleBall.classList.contains("off")) {
    toggleBall.classList.replace("off", "on");
    body.classList.replace("light", "dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    toggleBall.classList.replace("on", "off");
    body.classList.replace("dark-mode", "light");
    localStorage.setItem("mode", "light");
  }
});