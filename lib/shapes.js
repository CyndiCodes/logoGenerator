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
    render(){
        return `r="${this.radius}"`
    }
}

class Triangle extends Shape{
    constructor(fill, borderFill, borderWidth){
        super(fill, borderFill, borderWidth)
    }
    render(){
        return ``
    }

}

class Square extends Shape{
    constructor(fill, borderFill, borderWidth){
        super(fill, borderFill, borderWidth)
    }
    render(){
       
    }
}

module.exports = {Shape, Circle, Triangle, Square}