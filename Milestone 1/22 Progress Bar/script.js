window.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
  var progressBar = document.getElementById("progress-bar");
  var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  var progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + "%";
}
