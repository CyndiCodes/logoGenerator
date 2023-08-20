const fs = require("fs");
let SVG = require("./lib/svg.js");
const {Shape, Circle, Triangle, Square} = require("./lib/shapes.js")

let example = new SVG ("SVG", "pink", "circle", "purple");

fs.writeFile("shape.svg", example.Markup, function(err){
    if(err)
    console.log(err)
})