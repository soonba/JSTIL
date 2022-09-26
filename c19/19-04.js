function Circle(rad) {
    this.rad = rad;
}

Circle.prototype.getArea = function () {
    return Math.PI * this.rad ** 2;
}

const c1 = new Circle(6);
const c2 = new Circle(10);
console.log(c1.getArea === c2.getArea);
console.log(Object.getOwnPropertyDescriptors(Circle));