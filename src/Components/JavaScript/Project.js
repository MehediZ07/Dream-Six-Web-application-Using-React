function navbar() {
  const hideStyle = document.getElementById("hide-style");
  if (window.innerWidth >= 768) {
    hideStyle.style.display = "block";
  } else {
    hideStyle.style.display = "none";
  }
}
