var toggle = document.getElementById("theme-toggle");
var tlink = document.getElementById("theme");
var d = "day";
if (document.cookie.includes("theme=night")){
 d = "night";
}

if (d === "night") {
 if(window.location.pathname.includes("index.html")) {
 tlink.setAttribute("href", "styles/night.css");
}
else {
 tlink.setAttribute("href", "../styles/night.css");
}
toggle.innerHTML = "&#9728;"; // Sun icon
}
else {
 if(window.location.pathname.includes("index.html")) {
 tlink.setAttribute("href", "styles/day.css");
}
else {
 tlink.setAttribute("href", "../styles/day.css");
}
toggle.innerHTML = "&#9790;"; // Moon icon
}
toggle.addEventListener("click", () => {
 if (d === "night") {
  if(window.location.pathname.includes("index.html")) {
   tlink.setAttribute("href", "styles/day.css");
   }
  else {
   tlink.setAttribute("href", "../styles/day.css");
   }
   toggle.innerHTML = "&#9790;"; // Moon icon
   document.cookie = "theme=day; path=/; max-age="+10000000;
   d = "day";
   }
   else {
   if(window.location.pathname.includes("index.html")) {
  tlink.setAttribute("href", "styles/night.css");
  }
  else {
    tlink.setAttribute("href", "../styles/night.css");
    }
  toggle.innerHTML = "&#9728;"; // Sun icon
  document.cookie = "theme=night; path=/; max-age="+10000000;
  d = "night";
}
});
