var toggle = document.getElementById("modeCS");
const contact = document.querySelectorAll(".contactCS");
const inputbox = document.querySelectorAll(".inputboxCS");
const button = document.querySelectorAll(".custombtnCS");
const nav = document.getElementById("navbar");
const prj = document.querySelectorAll(".prjcard");

toggle.addEventListener("click", () => {
  document.getElementById("body").classList.toggle("darkmode");
  contact.forEach((e) => {
    e.classList.toggle("darkmode");
  });
  inputbox.forEach((i) => {
    i.classList.toggle("darkmode");
  });

  button.forEach((b) => {
    b.classList.toggle("darkmodebtn");
  });

  nav.classList.toggle("darkmode");

  prj.forEach((p) => {
    p.classList.toggle("darkmode");
  });
});

const autoyear = document.getElementById("autoyear");
const getyear = new Date().getUTCFullYear();
autoyear.textContent = getyear;
