class SVG{
    constructor(shape){
        this.shape = shape;
    }
    
    render(){
        if(this.shape === "circle"){
            return `<circle cx="150" cy="100" r="80" fill="green"  stroke="blue" stroke-width="5" />`
        }else if(this.shape === "triangle"){
            return `<polygon points="150 5 5 195 295 195"
            stroke="blue" fill="green" stroke-width="5"/>`
        }else if(this.shape === "square"){
            return `<rect width="100%" height="100%" fill="blue" stroke="green" stroke-width="5%"/>`
        }
        else{
            return"";
        }
    }

    modify(){
        console.log(`<svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">

                ${shapeChoice.render()}

          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        
        </svg>`)
    }
}

// using items below on index.js instead. keeping just incase things change

// let shapeChoice = new SVG("circle")
// console.log(shapeChoice)
// console.log(shapeChoice.render())
// shapeChoice.modify()

module.exports = SVG