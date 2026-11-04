document.addEventListener("DOMContentLoaded", () => {
  const followBtn = document.getElementById("followBtn");
  const text = followBtn.querySelector(".follow-text");
  const icon = document.getElementById("followIcon");

  followBtn.addEventListener("click", () => {
    followBtn.classList.toggle("following");

    if (followBtn.classList.contains("following")) {
      text.textContent = "팔로잉";
      icon.src = "./images/following.svg";
    } else {
      text.textContent = "팔로우";
      icon.src = "./images/follow.svg";
    }
  });
});