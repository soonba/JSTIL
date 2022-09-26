function Circle (rad) {
    // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩됨.

    //2. this에 바인딩되어 있는 인스턴스 초기화
    this.rad = rad;
    this.getDiameter = function () {
        return 2 * this.rad;
    }
    //3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

const circle = new Circle(5);
console.log(circle);

