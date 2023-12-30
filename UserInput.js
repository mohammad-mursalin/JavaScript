//we have talked about alert and prompt before

// var myBool = confirm("True or false");

//document.write(myBool);

var name = prompt("Enter your name");

//nullish coalescing operator

console.log(name ?? "You didn't enter your name");

if(name)
{
    console.log(name);

    console.log(name.length);

    console.log(name.trim().length);   //trimming spaces

    console.log(name.trim());

}

else
{
    console.log("You didn't enter your name");

}