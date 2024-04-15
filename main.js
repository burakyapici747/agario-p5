let font,
  fontsize = 32;
var speed = 0;
var fps = 0;
function preload() {
    font = loadFont('SourceSansPro-Black.otf');
}

function setup() {
    angleMode(DEGREES);

    fps = frameRate(80);
    createCanvas(1000, 800, WEBGL);
    player = {
        x: 0,
        y: 0,
    }
    ortho();
    textFont(font);
    textSize(fontsize);
}

function draw() {
    background(220);
    
    translate(-width/2, -height/2)
    rect(0, 0, 100)

    circle(player.x, player.y, 100)

    // Mouse koordinatlarını kameranın konumuna göre ayarla
    let adjustedMouseX = mouseX - width / 2 + player.x;
    let adjustedMouseY = mouseY - height / 2 + player.y;

    // Oyuncunun hareketini güncelle
    let deg = atan2(adjustedMouseY - player.y, adjustedMouseX - player.x);
    let _dist = dist(adjustedMouseX, adjustedMouseY, player.x, player.y);

    let timeStep = deltaTime / 1000; 

    speed = _dist * timeStep;

    player.x += speed * cos(deg);
    player.y += speed * sin(deg);

    let cameraX = player.x - width /2;
    let cameraY = player.y - height /2; 
    let cameraZ = (height / 2) / tan(30);

    camera(
        cameraX, cameraY, cameraZ,
        cameraX, cameraY, 0,
        0, 1, 0
    );

    console.log(fps);
    push();
    fill(0)
    text(
        `
            \nDeg: ${deg.toFixed(2)}
            \nDistance: ${_dist.toFixed(2)}
            \nSpeed: ${speed.toFixed(2)}
            \nPlayerX: ${player.x.toFixed(2)}
            \nMouseX: ${mouseX.toFixed(2)}
            \nFPS: ${fps._frameRate}
        `
        , 0, 0);
    pop();
}



/*
let normalMouseX = 0;
let normalMouseY = 0;
let font,
  fontsize = 32;
var speed = 0;
function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont('SourceSansPro-Black.otf');
}

function setup() {
    angleMode(DEGREES);
    createCanvas(1000, 800, WEBGL);
    player = {
        x: 0,
        y: 0
    }
    ortho();
    textFont(font);
    textSize(fontsize);
}

function draw() {
    background(220);

    normalMouseX = map(mouseX, 0, width, -1, 1);
    normalMouseY = map(mouseY, 0, height, -1, 1);

    rect(0, 0, 100);

    let deg = atan2(normalMouseY - player.y, normalMouseX - player.x);

    let _dist = dist(normalMouseX, normalMouseY, player.x, player.y);

    let timeStep = deltaTime / 1000; 

    speed = _dist * timeStep;

    player.x += speed * cos(deg);
    player.y += speed * sin(deg);

    let cameraX = player.x;
    let cameraY = player.y;
    let cameraZ = (height / 2) / tan(30);
    camera(
        map(cameraX, -1, 1, 0, width), map(cameraY, -1, 1, 0, height), cameraZ,
        map(player.x, -1, 1, 0, width), map(player.y, -1, 1, 0, height), 0,
        0, 1, 0
    );

    let mousex = map(mouseX, 0, width, -1, 1);


    circle(map(player.x, -1, 1, 0, width), map(player.y, -1, 1, 0, height), 100);

    push();
    fill(0)
    text(
        `
            \nDeg: ${deg.toFixed(2)}
            \nDistance: ${_dist.toFixed(2)}
            \ntimeStep: ${timeStep.toFixed(2)}
            \nnormalMouseX: ${normalMouseX.toFixed(2)}
            \ncanvasMouseX: ${mouseX.toFixed(2)}
            \nnormalMouseX: ${player.x.toFixed(2)}
            \ncanvasMouseX: ${map(player.x, -1, 1, 0, width).toFixed(2)}
        `
        , -width / 2 + 10, -height / 2 + 20);
    pop();
}

*/




/*

let normalMouseX = 0;
let normalMouseY = 0;
let font,
  fontsize = 32;
var speed = 0;
function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont('SourceSansPro-Black.otf');
}

function setup() {
    angleMode(DEGREES);
    createCanvas(1000, 800, WEBGL);
    player = {
        x: 0,
        y: 0
    }
    ortho();
    textFont(font);
    textSize(fontsize);
}

function draw() {
    background(220);

    normalMouseX = map(mouseX, 0, width, -1, 1);
    normalMouseY = map(mouseY, 0, height, -1, 1);

    rect(0, 0, 100);

    let deg = atan2(normalMouseY - player.y, normalMouseX - player.x);

    let _dist = dist(normalMouseX, normalMouseY, player.x, player.y);

    let timeStep = deltaTime / 1000; 

    speed = _dist * timeStep;

    player.x += speed * cos(deg);
    player.y += speed * sin(deg);

    let cameraX = player.x;
    let cameraY = player.y;
    let cameraZ = (height / 2) / tan(30);
    camera(
        map(cameraX, -1, 1, 0, width), map(cameraY, -1, 1, 0, height), cameraZ,
        map(player.x, -1, 1, 0, width), map(player.y, -1, 1, 0, height), 0,
        0, 1, 0
    );

    let mousex = map(mouseX, 0, width, -1, 1);
    

    circle(map(player.x, -1, 1, 0, width), map(player.y, -1, 1, 0, height), 100);

    push();
    fill(0)
    text(
        `
            \nDeg: ${deg.toFixed(2)}
            \nDistance: ${_dist.toFixed(2)}
            \ntimeStep: ${timeStep.toFixed(2)}
            \nnormalMouseX: ${normalMouseX.toFixed(2)}
            \ncanvasMouseX: ${mouseX.toFixed(2)}
            \nnormalMouseX: ${player.x.toFixed(2)}
            \ncanvasMouseX: ${map(player.x, -1, 1, 0, width).toFixed(2)}
        `
        , -width / 2 + 10, -height / 2 + 20);
    pop();
}

*/



/*
let font,
  fontsize = 32;
var speed = 0;
function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont('SourceSansPro-Black.otf');
}

function setup() {
    angleMode(DEGREES);
    createCanvas(1000, 800, WEBGL);
    player = {
        x: width/2,
        y: height/2,
    }
    ortho();
    textFont(font);
    textSize(fontsize);
}

function draw() {
    background(220);
    
    translate(-width/2, -height/2)
    rect(0, 0, 100)

    circle(player.x, player.y, 100)

    let deg = atan2(mouseY - player.y, mouseX - player.x);

    let _dist = dist(mouseX, mouseY, player.x, player.y);

    let timeStep = deltaTime / 1000; 

    speed = _dist * timeStep;

    player.x += speed * cos(deg);
    player.y += speed * sin(deg);

    let cameraX = player.x;
    let cameraY = player.y;
    let cameraZ = (height / 2) / tan(30);

    translate(-width/2, -height/2)
    camera(
        cameraX, cameraY, cameraZ,
        cameraX, cameraY, 0,
        0, 1, 0
    );

    push();
    fill(0)
    text(
        `
            \nDeg: ${deg.toFixed(2)}
            \nDistance: ${_dist.toFixed(2)}
            
        `
        , 0, 0);
    pop();
}

*/


/*

let font,
  fontsize = 32;
var speed = 0;
function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont('SourceSansPro-Black.otf');
}

function setup() {
    createCanvas(1000, 800, WEBGL);
    player = {
        x: 0,
        y: 0
    }
    ortho();
    textFont(font);
    textSize(fontsize);
}

function draw() {
    background(220);
    
    // Kamera ayarlarını güncelle
    let cameraX = player.x;
    let cameraY = player.y;
    let cameraZ = (height / 2) / tan(30);
    camera(
        cameraX, cameraY, cameraZ,  // Kamera pozisyonu
        cameraX, cameraY, 0,        // Kamera odak noktası
        0, 1, 0                     // Yukarı yönü
    );

    // Mouse koordinatlarını kameranın konumuna göre ayarla
    let adjustedMouseX = mouseX - width / 2 + player.x;
    let adjustedMouseY = mouseY - height / 2 + player.y;

    // Oyuncunun hareketini güncelle
    let deg = atan2(adjustedMouseY - player.y, adjustedMouseX - player.x);
    let _dist = dist(adjustedMouseX, adjustedMouseY, player.x, player.y);


    let timeStep = deltaTime / 1000; 
    speed = _dist * timeStep;

    player.x += speed * cos(deg);
    player.y += speed * sin(deg);

    // Oyuncu ve diğer nesneleri çiz
    circle(player.x, player.y, 100);
    rect(0, 0, 100);

    // Bilgi metnini yazdır
    push();
    fill(0);
    text(
        `Deg: ${deg.toFixed(2)}
         Distance: ${_dist.toFixed(2)}
         Speed: ${speed.toFixed(2)}
         Player X: ${player.x.toFixed(2)}
         Mouse X: ${adjustedMouseX.toFixed(2)}
         Camera X: ${cameraX.toFixed(2)}
         Original Mouse X: ${mouseX}`,
        0, 0
    );
    pop();
}
*/