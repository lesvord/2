// Получаем ссылку на холст и создаем контекст для рисования
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Создаем объект игрока и карты
const player = new Player(32, 32);
const map = new Map(6, 6);

// Добавляем препятствия на карту
map.addObstacle(2, 2);
map.addObstacle(3, 3);
map.addObstacle(4, 4);

// Задаем размеры холста
canvas.width = map.width * map.tileSize;
canvas.height = map.height * map.tileSize;

// Основной игровой цикл
function gameLoop() {
  // Очищаем холст перед каждым кадром
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Обновляем положение игрока
  player.update(map);

  // Отрисовываем карту и игрока
  map.render(ctx);
  player.render(ctx);

  // Вызываем эту же функцию снова после отрисовки
  requestAnimationFrame(gameLoop);
}

// Запускаем игровой цикл
gameLoop();
