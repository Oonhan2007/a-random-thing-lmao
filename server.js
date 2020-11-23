let express = require("express");

let app = express();
let port = process.env.PORT || 3000;
let server = app.listen(port);
app.use(express.static("public"));

console.log("Socket server is running.");

let socket = require("socket.io");

let io = socket(server);
io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("New connection. Id: " + socket.id);
  socket.on("mouse", mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit("mouse", data);
  }
}