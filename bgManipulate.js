//this website was made by Harrison

window.addEventListener("scroll", function() {
  scrollBG();
});
function scrollBG() {
  console.log("scroll");
  const scrollPosition = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = (scrollPosition / maxScroll) * 100;
  const hue = (percentage / 100) * 360; // Map percentage to hue (0-360)

  document.body.style.backgroundColor = `hsl(${hue / 2}, 50%, 50%)`;
}
function showDescription(title, description) {
  if (document.getElementById("image-title").textContent == title) {
    document.getElementById("image-title").textContent = "";
    document.getElementById("image-description").innerHTML = "";
    return;
  }
  document.getElementById("image-title").textContent = title;
  document.getElementById("image-description").innerHTML = description;
  document.getElementById("description-box").style.display = "block";
}

function scrollToId(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}