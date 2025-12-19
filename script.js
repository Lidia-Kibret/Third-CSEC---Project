const statusText = document.querySelector("#statusText");
const toggleBtn = document.querySelector("#toggleBtn");

/*
  Variable to track ON / OFF state
  We check the current text instead
*/

toggleBtn.addEventListener("dblclick", () => {
  if (statusText.textContent === "OFF") {
    statusText.textContent = "ON";
    statusText.classList.remove("off");
    statusText.classList.add("on");
  } else {
    statusText.textContent = "OFF";
    statusText.classList.remove("on");
    statusText.classList.add("off");
  }
});

/* Initial state class */
statusText.classList.add("off");
