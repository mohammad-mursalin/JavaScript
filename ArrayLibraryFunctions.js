var name = ["ami","tumi","se","tara"];

name.shift();

document.write(name);

name.unshift("apni");

document.write(name);

name.splice(2,1,"tahara");  //element will be removed from last

document.write(name);

var newName = name.slice(1,2); //(1)

document.write(name);

document.write(newName);

var sortedName = name.sort();

document.write(sortedName);

document.write(sortedName.reverse());

//for number sorting

var num = [2.4,1,45,0];

num.sort(function(a,b)
{
    return a-b;
});

document.write(num);





