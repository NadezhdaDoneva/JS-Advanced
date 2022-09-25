function solve(width,heigth, color) {
    class Rectangle{
        constructor(width,heigth,color){
            this.width = width
            this.heigth=heigth
            this.color = color[0].toUpperCase()+color.slice(1)
        }
        calcArea(){
            return this.heigth*this.width
        }
    }
    return new Rectangle(width,heigth,color)
}
solve()