const firebaseConfig = {
    apiKey: "AIzaSyD8kjMGMCb8dtiwS4QSWWtloPO0nyOcwCI",
    authDomain: "project93-df98f.firebaseapp.com",
    databaseURL: "https://project93-df98f-default-rtdb.firebaseio.com",
    projectId: "project93-df98f",
    storageBucket: "project93-df98f.appspot.com",
    messagingSenderId: "453418213369",
    appId: "1:453418213369:web:1b82438e6ceb318a2e6728"
  };
firebase.initializeApp(firebaseConfig); 
user = localStorage.getItem("name");
sala = localStorage.getItem("sala")
function enviar(){
    msg = document.getElementById("mandarMSG").value;
    firebase.database().ref(sala).push({
        mensagem: msg,
        userName: user,
        likes: 0
    });
    document.getElementById("mandarMSG").value="";

}
function getData(){
    firebase.database().ref("/"+sala).on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
            firebaseMessageId = childKey; 
            messageData = childData;
            console.log(firebaseMessageId);
            console.log(messageData);
            nome = messageData['userName'];
            mensagem = messageData['mensagem'];
            like = messageData['likes'];
            nomeComIcon ="<h4>"+nome+"<img id='icon' src='icon.png'></h4>";
            message ="<h4 class='message_h4'>"+mensagem+"</h4>"
            likeButton ="<button class='btn btn-warn' id="+firebaseMessageId+" value="+like+" onclick='like(this.id)'></button>";
            spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
            row = nomeComIcon+message+likeButton+spanWithTag;
        }});
  });
}