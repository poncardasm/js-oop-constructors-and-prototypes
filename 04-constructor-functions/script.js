function Rectangle(name, width, length) {
  this.name = name;
  this.length = length;
  this.width = width;
}

Rectangle.prototype.area = function () {
  return this.length * this.width;
};

const rect1 = new Rectangle('Rectangle 1', 10, 20);
console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 30, 40);
const rect3 = new Rectangle('Rectangle 3', 50, 60);

console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area());
