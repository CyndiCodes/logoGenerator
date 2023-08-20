const {Shape, Circle, Triangle, Square}= require("./shapes")

class SVG{
    constructor(shape){
        this.shape = shape;
    }
    
    render(){
        if(this.shape === "circle"){
            return `${circle.renderCircle()}`
        }else if(this.shape === "triangle"){
            return `${triangle.renderTri()}" `
        }else if(this.shape === "square"){
            return `${square.renderSquare()} `
        }
        else{
            return"";
        }
    }

}

let circle = new Circle("blue", "black", "5", "50");
let triangle = new Triangle("blue", "black", "5");
let square = new Square("blue", "black", "5");

// console.log(circle.renderCircle())
// console.log(triangle.renderTri())
// console.log(square.renderSquare())



module.exports = SVG