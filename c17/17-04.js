function Circle (rad) {
    let radius = 30;
    this.radius = rad;
    this.getDiameter = function () {
        console.log(radius);
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);
console.log(circle1.getDiameter());
console.log(circle2.getDiameter());