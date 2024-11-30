const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

function createRectangle(width, height) {
  return Object.create(rectanglePrototypes, {
    width: {
      value: width,
    },
    height: {
      value: height,
    },
  });
}

const rect1 = createRectangle(50, 20);
console.log(rect1);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquare());

const rect2 = createRectangle(10, 10);
console.log(rect2);
console.log(rect2.area());
console.log(rect2.isSquare());
