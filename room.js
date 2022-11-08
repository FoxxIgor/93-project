const firebaseConfig = { apiKey: "AIzaSyBs_5N5-A4oTe1DBoJIcGQuI9wceZjdhvM", authDomain: "atividade94-96b4a.firebaseapp.com", databaseURL: "https://atividade94-96b4a-default-rtdb.firebaseio.com", projectId: "atividade94-96b4a", storageBucket: "atividade94-96b4a.appspot.com", messagingSenderId: "139459445547", appId: "1:139459445547:web:d19aa5039b599264897b6e" }; 

firebase.initializeApp(firebaseConfig); 

function adicionar(){
    roomName = document.getElementById("adicionarSalasInput").value;
    firebase.database().ref("/").child(roomName).update({ /* acessa o firebase, vai na pasta principal depois cria outra pasta com o nome passado */
        sala:"sala adicionada"
    });
    localStorage.setItem("sala", roomName);
    window.location="conversa.html";
}

function getData(){
    firebase.database().ref("/").om('value', function(snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.key;
            console.log(roomName);
            row="<div class='roomName id="+roomName+"onclick='redirecionarParaSala(this.id)' > #"+roomName+"</div> <hr>";
            document.getElementById("output").innerHTML+=row;
        });
    });
}