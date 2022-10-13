class Regtangle{
    constructor (width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    calcArea(){
        return this.width*this.height;
    }
}

let rectangleOne = new Regtangle(4,5,"red");
let rectangleTwo = new Regtangle(10,20,"blue");

console.log(rectangleOne.calcArea());
console.log(rectangleTwo.calcArea());