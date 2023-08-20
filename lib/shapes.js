class Shape{
    constructor(fill, text, textFill){
        this.fill = fill;
        this.text = text;
        this.textFill = textFill;
        // constructor(fill = "green") will default to green if nothing is passed through fill
        // this ={}; ask tutor to explain, we don't actually need it but what does it mean 
    }
    render(){
       return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}/text>`
    }
    modifyShape(){
        console.log(`user wants...${this.fill} fill, "${this.text}" as text and ${this.textFill} text color`)
    }
}

let userChoice = new Shape("green", "logo", "white")
console.log(userChoice)
userChoice.modifyShape();

class Circle extends Shape{
    constructor(fill, text, textFill, radius){
        super(fill, text, textFill)
        this.radius = radius;
    }
    render(){
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}" />`
    }
    modifyCircle(){
        console.log(`user would like ${this.radius} for the radius`)
    }
}

let userChoiceRadius = new Circle(userChoice.fill, userChoice.text, userChoice.textFill, "80")
console.log(userChoiceRadius)

class Triangle extends Shape{
    constructor(fill, text, textFill){
        super(fill, text, textFill)
    }
    render(){
        return `<polygon points="150 5 5 195 295 195"
        stroke="blue" fill="${this.fill}" stroke-width="5"/>`
    }

}

class Square extends Shape{
    constructor(fill, text, textFill){
        super(fill, text, textFill)
    }
    render(){
        return `<rect width="100%" height="100%" fill="${this.fill}" stroke="green" stroke-width="5%"/>`
    }
}


module.exports = {Shape, Circle, Triangle, Square}