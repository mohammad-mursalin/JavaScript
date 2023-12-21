function Student (name,roll,lang)
{
    this.name = name;
    this.roll = roll;
    this.lang = lang;

    this.display = function ()
    {
        console.log("Name : " + name);
        console.log("Roll : " + roll);
        console.log("Languages : " + lang);
    }
}

var student1 = new Student("mursalin",1,["bengali,english"]);

var student2 = new Student("mohammad",2,["bengali,english","hindi"]);

student1.display();
student2.display();