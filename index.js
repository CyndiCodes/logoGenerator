const fs = require("fs");
let SVG = require("./lib/svg");
const Text = require("./lib/text")
const {Shape, Circle, Triangle, Square} = require("./lib/shapes")

let shapeChoice = new SVG("triangle")
let text = new Text("CYN", "purple")
let shapeColor = new Shape("blue", "black", "5")


let writeData = `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">

         <${shapeChoice.render()} ${shapeColor.render()}/>     

         ${text.render()}
    
        </svg>`


fs.writeFile("shape.svg", writeData, function(err){
    if(err)
    console.log(err)
})
