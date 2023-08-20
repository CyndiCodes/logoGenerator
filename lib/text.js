class Text{
    constructor(text, textFill){
        this.text = text;
        this.textFill = textFill;
    }
    render(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>`;
    }
}

module.exports = Text