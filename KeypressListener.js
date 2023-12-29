document.addEventListener("keypress",function(press){

    var character = press.key;

    document.querySelector(".show").innerHTML = "You have pressed " +character;
});