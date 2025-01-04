var slider_img = document.getElementById("satrx-img");
var i = 1;
var n = 8;

function prev(){
 if(i <= 1) {
 i = n+1;
}
i--;
setImg();
}

function next(){
 if(i >= n){
 i = 0;
}
i++;
setImg();
}

function setImg(){
slider_img.setAttribute("src", "../images/satrx/"+i+".jpg");
}
