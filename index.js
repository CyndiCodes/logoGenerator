const fs = require("fs");
let SVG = require("./lib/svg");
const Text = require("./lib/text")
// const {Shape, Circle, Triangle, Square} = require("./lib/shapes")

let shapeChoice = new SVG("square")

let writeData = `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">

         ${shapeChoice.render()}       

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    
        </svg>`

fs.writeFile("shape.svg", writeData, function(err){
    if(err)
    console.log(err)
})
