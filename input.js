var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var map = {
  width: 100,
  height: 100,
  tileSize: 32,
  tiles: []
};

for (var i = 0; i < map.width; i++) {
  var row = [];
  for (var j = 0; j < map.height; j++) {
    row.push(0);
  }
  map.tiles.push(row);
}

var player = {
  x: 0,
  y: 0
};

function drawMap() {
  var startX = player.x - 3;
  var startY = player.y - 3;
  var endX = player.x + 3;
  var endY = player.y + 3;
  startX = Math.max(startX, 0);
  startY = Math.max(startY, 0);
  endX = Math.min(endX, map.width - 1);
  endY = Math.min(endY, map.height - 1);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = startX; i <= endX; i++) {
    for (var j = startY; j <= endY; j++) {
      var x = (i - startX) * map.tileSize;
      var y = (j - startY) * map.tileSize;
      if (map.tiles[i][j] === 0) {
        ctx.fillStyle = "green";
      } else {
        ctx.fillStyle = "black";
      }
      ctx.fillRect(x, y, map.tileSize, map.tileSize);
      
      // добавьте код для отрисовки дерева в ячейке (2, 2)
      if (i === 2 && j === 2) {
        ctx.fillStyle = "brown";
        ctx.fillRect(x + map.tileSize / 4, y + map.tileSize / 4, map.tileSize / 2, map.tileSize / 2);
      }
      
      // отрисовка синего квадрата, представляющего игрока
      if (i === player.x && j === player.y) {
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, map.tileSize, map.tileSize);
      }
    }
  }
}


drawMap();
