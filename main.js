document.getElementById("contactanos").style.display = "none";
document.getElementById("contenido").style.display = "none";
document.getElementById("inicio").style.display = "block";


function contenido(){
document.getElementById("contenido").style.display = "block";
document.getElementById("inicio").style.display = "none";
document.getElementById("contactanos").style.display = "none";
};

function inicio(){
document.getElementById("contactanos").style.display = "none";
document.getElementById("contenido").style.display = "none";
document.getElementById("inicio").style.display = "block";
};

function contactanos(){
  document.getElementById("contenido").style.display = "none";
  document.getElementById("inicio").style.display = "none";
  document.getElementById("contactanos").style.display = "block";
};

function saludo(){
  alert('Tranquila Doña Emilse, Falta todavía')
};