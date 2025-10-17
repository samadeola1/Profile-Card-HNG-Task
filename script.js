function updateTime() {
  document.getElementById("user-time").textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);
