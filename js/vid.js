var slider_vid = document.getElementById("airband-vid");
var i = 1;
var n = 3;

function prev(){
 if(i <= 1) {
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
slider_vid.setAttribute("src", "../images/airband/"+i+".mp4");
}
