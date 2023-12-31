var dis = function display(message)
{
    document.write("<h1>" + message + "</h1>");
}

dis("Function Expression");

//Arrow function

var sum = (num1,num2) => {

    return num1+num2;
}

console.log(sum(4,6));