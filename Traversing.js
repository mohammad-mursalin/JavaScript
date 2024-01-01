//Downwards-childrens

var parentEle = document.querySelector(".pClass");

    var chlildEle = parentEle.children[1];

    chlildEle.style.color = "red";

//Upwards

var child = document.querySelector("li");  //index 0 child selected by default

    var parent = child.parentElement;
    parent.style.color = "green";

//Sideways

var ch = child.nextElementSibling;

var ch2 = ch.previousElementSibling;

    ch2.style.color = "blue";