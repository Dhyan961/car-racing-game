canvas = document.getElementById("myCanvas");
cntx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg"

function add1(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground(){
    cntx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    cntx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    cntx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
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

        car2_up();
        console.log("key W");
    }
    
    if(keyPressed == "83"){

        car2_down();
        console.log("key S");
    }
    
    if(keyPressed == "65"){

        car2_left();
        console.log("key A");
    }

    if(keyPressed == "68"){

        car2_right();
        console.log("key D");
    }
    
    if (car1_x > 700){
        console.log("Car 1 Won")
        document.getElementById("gameStatus").innerHTML = "Car 1 Won"
    }
    
    if (car2_x > 700){
        console.log("Car 2 Won")
        document.getElementById("gameStatus").innerHTML = "Car 2 Won"
    }
}

function car1_up(){

    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed , X = " + car1_x + " l  y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up(){

    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed , X = " + car2_x + " l  y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){

    if(car1_y <= 400){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed , X = " + car1_x + " l  y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){

    if(car2_y <= 400){
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed , X = " + car2_x + " l  y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){

    if(car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed , X = " + car1_x + " l  y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){

    if(car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed , X = " + car2_x + " l  y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){

    if(car1_x <= 700){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed , X = " + car1_x + " l  y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){

    if(car2_x <= 700){
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed , X = " + car1_x + " l  y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}