let socket;

function setup() {
  createCanvas(1280, 720);
  background(0);
  socket = io.connect("http://localhost:3000");
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  push();
  noStroke();
  fill(255, 0, 0);
  circle(data.x, data.y, 30);
  pop();
}

function mouseDragged() {
  push();
  noStroke();
  fill(255);
  circle(mouseX, mouseY, 30);
  pop();
  let data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit("mouse", data);
}