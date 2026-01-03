let page = 0;
let noCount = 0;
const pages = document.querySelectorAll(".page");
const car = document.getElementById("car");

function next() {
  car.classList.add("move");

  setTimeout(() => {
    car.classList.remove("move");
    pages[page].classList.remove("active");
    page++;
    pages[page].classList.add("active");
  }, 700);
}

function no() {
  const noBtn = document.getElementById("noBtn");
  const text = document.getElementById("noText");
  noCount++;

  if (noCount === 1) {
    text.innerText = "hmm… 🥺";
    noBtn.style.transform = "translateX(-30px)";
  } else if (noCount === 2) {
    text.innerText = "that’s not cute 😔";
    noBtn.style.transform = "translateX(30px)";
  } else if (noCount === 3) {
    text.innerText = "okay stop playing 😭";
    noBtn.style.scale = "0.7";
  } else {
    noBtn.style.display = "none";
    text.innerText = "only YES left 💕";
  }
}

function yes() {
  pages[page].classList.remove("active");
  pages[page + 1].classList.add("active");
}
