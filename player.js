class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
  }
  
  moveLeft() {
    this.x -= this.speed;
  }
  
  moveRight() {
    this.x += this.speed;
  }
  
  moveUp() {
    this.y -= this.speed;
  }
  
  moveDown() {
    this.y += this.speed;
  }
  
  render() {
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, 32, 32);
  }
}
