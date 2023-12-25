var myTag = document.querySelector("button");

    myTag.addEventListener("click",myFunction);

function myFunction() 
{
    alert("just playing with you");
}

var pTag = document.querySelector("p");

    pTag.addEventListener("mouseover",function () { pTag.classList.add("style")});  //annonymous function

    pTag.addEventListener("mouseout",func);

function func()
{
    pTag.classList.remove("style");
}