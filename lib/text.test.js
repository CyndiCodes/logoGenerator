const Text = require("./lib/text")

describe('Text', () => {
    describe('character length', () => {
        it('should return false if it is more than 3 characters long', ()=>{
            const text = new Text();
            const result = text.text('pass')

            expect(result).toEqual(false)
        })
    });
});