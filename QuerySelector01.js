document.querySelector("a").innerHTML = "content changed by using query selector";

document.querySelector("li a").innerHTML = "using query selector";

document.querySelector(".my-div a").innerHTML = "I'm also changed";

document.querySelectorAll("p")[0].innerHTML = "query selector all";
document.querySelectorAll("p")[1].innerHTML = "query selector all";
document.querySelectorAll("p")[2].innerHTML = "query selector all";