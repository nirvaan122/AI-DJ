song="";
leftx=0;
rightx=0;
lefty=0;
righty=0;
function preload(){
  song=loadSound("music.mp3")
}
function setup(){
canvas=createCanvas(600,600)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}

function modelLoaded(){
  console.log("model is loaded")
}
function gotPoses(results){
  if (results.length>0) {
    console.log(results)
    leftx=results[0].pose.leftWrist.x
    lefty=results[0].pose.leftWrist.y
    rightx=results[0].pose.rightWrist.x
    righty=results[0].pose.rightWrist.y  
  }
}
function btn1(){
  song.play()
  song.setVolume(1)
  song.rate(1)
}
function draw(){
  image(video,0,0,600,600)
  circle(leftx,lefty,30)
  }
