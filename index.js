const projectCounter = document.getElementById("project-counter");
const followersCounter = document.getElementById("followers-counter");
const subscriptionsCounter = document.getElementById("subscriptions-counter");
const repositoriesCounter = document.getElementById("repositories-counter");

// Sidenav
const hamburgerLogo = document.querySelector(".hamburger-logo");
const sidenav = document.querySelector(".side-nav");
const sidenavButton = document.querySelector(".sidenav-close-button");
let sidenavToggle = false;

var cnt = 0,
  followersCnt = 0,
  subsCnt = 0;

setInterval(() => {
  if (cnt <= 100) {
    projectCounter.innerHTML = cnt;
  }
  if (followersCnt <= 50000) {
    followersCounter.innerHTML = followersCnt;
  }
  if (subsCnt <= 2000) {
    subscriptionsCounter.innerHTML = subsCnt;
  }
  if (cnt <= 50) {
    repositoriesCounter.innerHTML = cnt;
  }
  cnt += 2;
  followersCnt += 400;
  subsCnt += 20;
}, 17);

window.addEventListener("scroll", (e) => {
  console.log(window.pageYOffset + " ; " + window.scrollY);
});

hamburgerLogo.addEventListener("click", () => {
  if (sidenavToggle) {
    if (sidenav.classList.contains("open-side-nav")) {
      sidenav.classList.remove("open-side-nav");
    }
    sidenav.classList.add("close-side-nav");
    sidenavToggle = false;
  } else {
    if (sidenav.classList.contains("close-side-nav")) {
      sidenav.classList.remove("close-side-nav");
    }
    sidenav.classList.add("open-side-nav");
    sidenavToggle = true;
  }
});

sidenavButton.addEventListener("click", () => {
  if (sidenavToggle) {
    if (sidenav.classList.contains("open-side-nav")) {
      sidenav.classList.remove("open-side-nav");
    }
    sidenav.classList.add("close-side-nav");
    sidenavToggle = false;
  }
});
