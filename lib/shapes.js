class Shape{
    constructor(fill, borderFill, borderWidth){
        this.fill = fill;
        this.borderFill = borderFill;
        this.borderWidth = borderWidth;
        // constructor(fill = "green") will default to green if nothing is passed through fill  
        // this ={}; ask tutor to explain, we don't actually need it but what does it mean 
   
    }
    render(){
       return `fill="${this.fill}" stroke="${this.borderFill}" stroke-width="${this.borderWidth}"`
    }
}

class Circle extends Shape{
    constructor(fill, borderFill, borderWidth, radius){
        super(fill, borderFill, borderWidth)
        this.radius = radius;
    }
    renderCircle(){
        return `circle cx="150" cy="100" r="${this.radius}"`
    }
}

class Triangle extends Shape{
    constructor(fill, borderFill, borderWidth){
        super(fill, borderFill, borderWidth)
    }
    renderTri(){
        return `polygon points="150 5 5 195 295 195`
    }

}

class Square extends Shape{
    constructor(fill, borderFill, borderWidth){
        super(fill, borderFill, borderWidth)
    }
    renderSquare(){
       return `rect width="100%" height="100%"`
    }
}

module.exports = {Shape, Circle, Triangle, Square}