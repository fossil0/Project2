let url = 'https://io.adafruit.com/api/v2/tjrghkdud/feeds/servo/data';

var data = 0;


let snowflakes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 166, 1);
    noStroke();
    textSize(20);
    textStyle(BOLD);


    myButton = createButton('LIKE');

    myButton.position(windowWidth / 2 - 100, windowHeight / 2 - 280);
    myButton.style('background-color', '#FF672E');
    myButton.style('border-style', 'none');
    myButton.style('border-radius', '10px');
    myButton.style('font-weight', 'bold');
    myButton.style('font-size', '20px');
    myButton.style('color', 'white');
    myButton.style('width', '200px');
    myButton.style('height', '50px');
    myButton.mousePressed(press);
    myButton.mouseReleased(off);


    myButton2 = createButton('FUNNY');
    myButton2.position(windowWidth / 2 - 100, windowHeight / 2 - 180);
    myButton2.style('background-color', '#FB3249');
    myButton2.style('border-style', 'none');
    myButton2.style('border-radius', '10px');
    myButton2.style('width', '200px');
    myButton2.style('height', '50px');

    myButton2.style('font-weight', 'bold');
    myButton2.style('font-size', '20px');
    myButton2.style('color', 'white');
    myButton2.mousePressed(press2);
    myButton2.mouseReleased(off);

    myButton3 = createButton('HAPPY');
    myButton3.position(windowWidth / 2 - 100, windowHeight / 2 - 80);
    myButton3.style('background-color', '#FC5D08');
    myButton3.style('border-style', 'none');
    myButton3.style('border-radius', '10px');
    myButton3.style('font-weight', 'bold');
    myButton3.style('font-size', '20px');
    myButton3.style('color', 'white');
    myButton3.style('width', '200px');
    myButton3.style('height', '50px');
    myButton3.mousePressed(press3);
    myButton3.mouseReleased(off);

    myButton4 = createButton('DISLIKE');
    myButton4.position(windowWidth / 2 - 100, windowHeight / 2 + 20);
    myButton4.style('background-color', '#005FFF');
    myButton4.style('border-style', 'none');
    myButton4.style('border-radius', '10px');
    myButton4.style('width', '200px');
    myButton4.style('height', '50px');

    myButton4.style('font-weight', 'bold');
    myButton4.style('font-size', '20px');
    myButton4.style('color', 'white');
    myButton4.mousePressed(press4);
    myButton4.mouseReleased(off);

    myButton5 = createButton('HATE');
    myButton5.position(windowWidth / 2 - 100, windowHeight / 2 + 120);
    myButton5.style('background-color', '#3700AE');
    myButton5.style('border-style', 'none');
    myButton5.style('border-radius', '10px');
    myButton5.style('width', '200px');
    myButton5.style('height', '50px');
    myButton5.style('font-weight', 'bold');
    myButton5.style('font-size', '20px');
    myButton5.style('color', 'white');
    myButton5.mousePressed(press5);
    myButton5.mouseReleased(off);

    myButton6 = createButton('ANGRY');
    myButton6.position(windowWidth / 2 - 100, windowHeight / 2 + 220);
    myButton6.style('background-color', '#FF003B');
    myButton6.style('border-style', 'none');
    myButton6.style('border-radius', '10px');
    myButton6.style('width', '200px');
    myButton6.style('height', '50px');
    myButton6.style('font-weight', 'bold');
    myButton6.style('font-size', '20px');
    myButton6.style('color', 'white');
    myButton6.mousePressed(press6);
    myButton6.mouseReleased(off);
}

function draw() {

}




function press() {
    background(255, 116, 0);
    data = 30;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 100);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 200);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 300);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 400);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 500);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 600);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 700);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 800);

}

function press2() {
    background(255, 76, 0);
    data = 60;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 100);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 200);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 300);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 400);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 500);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 600);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 700);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 800);


}

function press3() {
    background(255, 76, 90);
    data = 90;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 100);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 200);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 300);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 400);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 500);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 600);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 700);
    text('😊     💓     😊     💓     😊     💓     😊     💓     😊     💓     😊     💓', 290, 800);

}

function press4() {
    background(100);
    data = 120;
    console.log(data);
    sendData(data);

    textSize(40);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 100);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 200);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 300);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 400);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 500);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 600);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 700);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 800);

}

function press5() {
    background(0, 20, 90);
    data = 150;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 100);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 200);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 300);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 400);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 500);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 600);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 700);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 800);

}

function press6() {
    background(183, 0, 0);
    data = 179;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 100);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 200);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 300);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 400);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 500);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 600);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 700);
    text('😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬     😡     🤬', 290, 800);

}





function off() {
    background(255, 166, 2);
    data = 1;
    console.log(data);
    sendData(data);
}



function sendData(turnOn) {
    let postData = {
        "value": turnOn,
        "X-AIO-Key": "aio_eKXd99xnNAtIVB5MRKPPmNm1wfl8"
    };
    httpPost(url, 'json', postData, function (result) {
        console.log(result);
    });
}
