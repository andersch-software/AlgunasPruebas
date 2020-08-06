document.getElementById("home").style.display = "block";
document.getElementById("about").style.display = "none";
document.getElementById("game").style.display = "none";
document.getElementById("contact").style.display = "none";

function home(){
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("contact").style.display = "none";
};

function about(){
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("game").style.display = "none";
  document.getElementById("contact").style.display = "none";
};

function game(){
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("contact").style.display = "none";
};

function contact(){
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("contact").style.display = "block";
};

