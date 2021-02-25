
function preload(){
w = 350;
h = 300;  
clowNnose = loadImage("https://i.postimg.cc/rFSnxZhd/clown3.png");
}
function setup(){
    canvas = createCanvas(w,h);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(w, h);
    video.hide();
    posenet = ml5.poseNet(video, loaded);
    posenet.on("pose", poses);       
}
function draw(){
    image(video, 0, 0, w, h);
   fill(255, 0, 0);
//    circle(noseX, noseY, 20);
   image(clowNnose, noseX-50, noseY-20, 95, 70);

}
function loaded(){
    console.log("Posenet is Initialized");
}
var noseX,noseY;
function poses(output){
    
    if (output.length > 0){
         noseX = output[0].pose.nose.x;
         noseY = output[0].pose.nose.y;
        console.log(output);
        console.log("X is " + output[0].pose.nose.x + "\n Y is " + output[0].pose.nose.y);
    }
}
function inc(){
    w = w + 10;
    h = h + 10;
    setup();
}
function dec(){
    w = w - 10;
    h = h - 10;
    setup();
}
