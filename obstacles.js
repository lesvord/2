const obstacles = [];

function createObstacle(x, y, width, height) {
  obstacles.push({x: x, y: y, width: width, height: height});
}

function drawObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    context.fillStyle = "black";
    context.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
  }
}
