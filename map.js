const mapWidth = 10;
const mapHeight = 10;
const mapTiles = [];

function createMap() {
  for (let y = 0; y < mapHeight; y++) {
    const row = [];
    for (let x = 0; x < mapWidth; x++) {
      row.push(0);
    }
    mapTiles.push(row);
  }
}

function drawMap() {
  for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
      if (mapTiles[y][x] === 0) {
        context.fillStyle = "white";
        context.fillRect(x * 32, y * 32, 32, 32);
      } else if (mapTiles[y][x] === 1) {
        context.fillStyle = "green";
        context.fillRect(x * 32, y * 32, 32, 32);
      }
    }
  }
}
