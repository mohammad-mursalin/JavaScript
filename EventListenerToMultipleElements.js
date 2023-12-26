var len = document.querySelectorAll("button").length;

for(var i = 0 ; i < len ; i++)
{
    document.querySelectorAll(".button")[i].addEventListener("click",fun);

    function fun()
    {
        var text = this.innerHTML;

        document.querySelector("h1").innerHTML = "You've clicked " + text;
    }
}