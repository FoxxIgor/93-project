const firebaseConfig = {
    apiKey: "AIzaSyD8kjMGMCb8dtiwS4QSWWtloPO0nyOcwCI",
    authDomain: "project93-df98f.firebaseapp.com",
    databaseURL: "https://project93-df98f-default-rtdb.firebaseio.com",
    projectId: "project93-df98f",
    storageBucket: "project93-df98f.appspot.com",
    messagingSenderId: "453418213369",
    appId: "1:453418213369:web:1b82438e6ceb318a2e6728"
  };
var userName = localStorage.getItem("name");
document.getElementById("boasVindas").innerHTML="Bem Vindo "+userName+"!!"
firebase.initializeApp(firebaseConfig); 


function adicionar(){
    roomName = document.getElementById("adicionarSalasInput").value;
    firebase.database().ref("/").child(roomName).update({ /* acessa o firebase, vai na pasta principal depois cria outra pasta com o nome passado */
        sala:"sala adicionada"
    });
    localStorage.setItem("sala", roomName);
}

function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.key;
            roomNames=childKey;
            console.log(roomNames);
            row="<div class='roomName' id='+roomNames+' onclick='redirecionarParaSala(this.id)'>#"+roomNames+"</div> <hr >";
            document.getElementById("output").innerHTML+= row;
        });
    });
}
function redirecionarParaSala(nomeSala){
    console.log(nomeSala);
    localStorage.setItem("roomName", nomeSala);
    window.location="conversa.html";
}
getData();
function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("sala");
    window.location="index.html";
}
