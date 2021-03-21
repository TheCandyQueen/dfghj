var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//car 1
var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.webp";
var car1_x = 10;
var car1_y = 10;

//car 2
var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.webp";
var car2_x = 10;
var car2_y = 100;

var background_image = "car_racingCar.html";

//add function
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed);
        if(keyPressed == '38') {
            car1_up();
            console.log("up arrow");
        }
        if(keyPressed == '40') {
            car1_down();
            console.log("down arrow")
        }
        if(keyPressed == '37')b{
            car1_left();
            console.log("left arrow");
        }
        if(keyPressed == '39') {
            car1_right();
            console.log("right arrow")
        }
        if(keyPressed == '87') {
            car2_up();
            console.log("w key")
        }
        if(keyPressed == '65') {
            car2_left();
            console.log("a key")
        }
        if(keyPressed == '83') {
            car2_down();
            console.log("s key")
        }
        if(keyPressed == '68') {
            car2_right();
            console.log("d key")
        }
}

function car1_up() {
    if(car1_y >=0) {
        car1_y = car1_y - 10;
        console.log("when up pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if(car1_y <=500) {
        car1_y = car1_y + 10;
        console.log("when down pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if(car1_y >=0) {
        car1_x = car1_x - 10;
        console.log("when left pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if(car1_x <=700) {
        car1_x = car1_x + 10;
        console.log("when right pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


//CAR 2 CONTROLZZZZZZZZZZZ

function car2_up() {
    if(car1_y >=0) {
        car1_y = car1_y - 10;
        console.log("when up pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if(car1_y <=500) {
        car1_y = car1_y + 10;
        console.log("when down pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if(car1_y >=0) {
        car1_x = car1_x - 10;
        console.log("when left pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if(car1_x <=700) {
        car1_x = car1_x + 10;
        console.log("when right pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

if(car1_x > 700) {
    console.log("ca1 DA LUCKYYYYYY WINNAHHHHHh");
    document.getElementById('game_status').innerHTML = "Car 1 da LUCKYYYYYYYYYYYY WINNAHHHHHHHHHHH <br> car 2 u poo";
}