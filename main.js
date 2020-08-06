//Configuración
var firebaseConfig = {
  apiKey: "AIzaSyBnm4PkKjwAvL49T7Hu_9vqOtUvN5Ydc8U",
  authDomain: "foro-nysl.firebaseapp.com",
  databaseURL: "https://foro-nysl.firebaseio.com",
  projectId: "foro-nysl",
  storageBucket: "foro-nysl.appspot.com",
  messagingSenderId: "999512813095",
  appId: "1:999512813095:web:4eb944146682b149a0a802",
  measurementId: "G-80B8CZ7FT6"
};

//Inicializador
firebase.initializeApp(firebaseConfig);

//Mostra u Ocultar
document.getElementById("foro").style.display = "none";
document.getElementById("sesion").style.display = "block";

function sesion(){
  document.getElementById("foro").style.display = "none";
  document.getElementById("sesion").style.display = "block";
};

function foro(){
  document.getElementById("sesion").style.display = "none";
  document.getElementById("foro").style.display = "block";
};
///////////////////////////////////////////////////////////////

//////////////VUE//////////////
///////////////////////////////
var mivue = new Vue({
el: '#mivue',
data: {
  datos:[]
},

methods: {

}
})
///////////////////////////////  

////Msj a la Base de datos

function enviar(){
var nombre = document.getElementById("nombre").value;
var mensaje = document.getElementById("mensaje").value;
firebase.database().ref("/datos/nombre").push(nombre + ": " + mensaje);
console.log('Va todo bien');
mensaje = document.getElementById("mensaje").value = null;
}

function borrar(){
firebase.database().ref("/datos").remove();
console.log('Se borro');
mivue.datos = [];
}

/////Msj a la vista

firebase.database().ref("/datos/nombre").on('child_added',leer)
function leer(childAdded){
mivue.datos.push(childAdded.val());
}

function logout(){
firebase.auth().signOut();
};

function checkUser(user){
if(user = null){
  console.log("not logged");
  alert("No Ingreso Usuario");
}else{
  console.log("logged");
  alert("Usuario Ingresado");
  foro();
}
};

function loginGoogle(){
let proveedor = new firebase.auth.GoogleAuthProvider();         
firebase.auth().signInWithPopup(proveedor)   
};