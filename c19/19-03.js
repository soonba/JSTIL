function Circle(rad) {
    this.rad = rad;
    this.getArea = function () {
        return Math.PI * this.rad ** 2;
    }
}
