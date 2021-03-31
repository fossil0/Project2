let url = 'https://io.adafruit.com/api/v2/tjrghkdud/feeds/servo/data';
var data = 0;


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

}

function draw() {



}

function press() {

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

function off() {
    background(255, 166, 2);
    data = 15;
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
