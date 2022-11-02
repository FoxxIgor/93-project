function ready(){
    var inputValue = document.getElementById("inputuser").value;
    localStorage.setItem("name", inputValue);
    window.location="room.html";
}