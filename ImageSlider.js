var images = ["1700563137638-01.jpeg","IMG_20231121_170436_361.jpg"];

var image = document.querySelector("img");

var count = 0;

function next()
{
    count++;
    if(count >= images.length)
    {
        count =0;
    }

    image.src = images[count];
}

function previous()
{
    count--;
    if(count < 0)
    {
        count = images.length - 1;
    }

    image.src = images[count];
}