var slider_vid = document.getElementById("airband-vid");
var vids = ["P7620JwsmHI", "rjgSTyDUEOo", "6xueSga-PYc "];
var i = 0;
var n = 2;

function prev(){
 if(i <= 0) {
 i = n+1;
}
i--;
setVid();
}

function next(){
 if(i >= n){
 i = 0;
}
i++;
setVid();
}

function setVid(){
slider_vid.setAttribute("src", "https://www.youtube.com/embed/"+vids[i]);
}
