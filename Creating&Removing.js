var addTag = document.createElement("h1");

var addText = document.createTextNode("How are you guys");

    addTag.appendChild(addText);

var myDiv = document.getElementById("my-div");

    myDiv.appendChild(addTag);

var removeTag = document.getElementsByTagName("h1")[1];

    myDiv.removeChild(removeTag);

var addTag = document.createElement("h1");

var addText = document.createTextNode("Everyone");

    addTag.appendChild(addText);

var Tag = document.getElementsByTagName("h1")[1];

    myDiv.insertBefore(addTag,Tag);

myDiv.classList.add("my-class");

myDiv.classList.remove("my-class");