const {Shape, Circle, Triangle, Square} = require("./lib/shapes")

describe('Shape', () => {
    describe('Triangle', () => {
        const shape = new Triangle();
        shape.setColor("#784421");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        
    });
});