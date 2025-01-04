var button = document.getElementById("calc");
var result = document.getElementById("result");
button.addEventListener("click", () => {
var f = document.getElementById("freq").value;
if(isNaN(f)) {
 result.innerHTML = "Invalid data";
 return;
}
var q_wav = 100*0.95*299792458/4/f/1000000; // quarter-wave (aka 1 dipole leg length) in cm (0.95 is for the end effect)
result.innerHTML = "Result: "+q_wav.toFixed(2)+" cm";
});
