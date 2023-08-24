const {Shape, Circle, Triangle, Square} = require("../lib/shapes")

describe('Shape', () => {
    describe('Triangle', () => {
        test("it should set the caller", ()=>{
            const shape = new Triangle();
            shape.setColor("#784421");
            // console.log (shape.render)
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });
});