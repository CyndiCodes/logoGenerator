const {Shape, Circle, Triangle, Square}= require("./shapes.js")

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

let circle = new Circle("blue", "black", "5", "80");
let triangle = new Triangle("blue", "black", "5");
let square = new Square("blue", "black", "5");

module.exports = SVG