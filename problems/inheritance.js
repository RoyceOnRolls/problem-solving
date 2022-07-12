class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return (this.w + this.h) * 2;
};

let Square = new Rectangle(4, 4);

console.log(Square.area());
