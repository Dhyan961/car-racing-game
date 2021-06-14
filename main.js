canvas = document.getElementById("myCanvas");
cntx = canvas.getcontext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 100;

background_image = "racing.jpg"

function add1(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;
}

function uploadBackground(){
    cntx.drawImage(background_imageTag,0,0,canvas.width,canvas.hieght);
}
function uploadcar1(){
    cntx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38"){

        car1_up();
        console.log("up arrow key");
    }
    
    if(keyPressed == "40"){

        car1_down();
        console.log("down arrow key");
    }
    
    if(keyPressed == "37"){

        car1_left();
        console.log("left arrow key");
    }
    
    if(keyPressed == "39"){

        car1_right();
        console.log("right arrow key");
    }
    
    if(keyPressed == "87"){

        car1_up();
        console.log("key W");
    }
    
    if(keyPressed == "83"){

        car1_down();
        console.log("key S");
    }
    
    if(keyPressed == "65"){

        car1_left();
        console.log("key A");
    }

    if(keyPressed == "68"){

        car1_right();
        console.log("key D");
    }
}