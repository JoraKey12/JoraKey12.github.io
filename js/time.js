setInterval(updateTime, 1000);
var href = document.getElementById("time");
function updateTime() {
const date = new Date();
href.innerHTML = date.toLocaleTimeString();
}
