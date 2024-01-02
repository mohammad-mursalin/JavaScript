//Default Parameter

function print(text = "Default parameter") {

    console.log(`${text}`);
}

print("This is plain text");
print();

//Rest parameter

function add (x,y,...z) {

    console.log(`x = ${x},xy = ${y},z = ${z}`)
}

add(23,34,56,3,5);