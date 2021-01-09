const projectCounter = document.getElementById("project-counter");
const followersCounter = document.getElementById("followers-counter");
const subscriptionsCounter = document.getElementById("subscriptions-counter");
const repositoriesCounter = document.getElementById("repositories-counter");
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
