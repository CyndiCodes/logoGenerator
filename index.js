const inquirer = require('inquirer');
const fs = require("fs");
let SVG = require("./lib/svg");
const Text = require("./lib/text")
const {Shape, Circle, Triangle, Square} = require("./lib/shapes")




inquirer
  .prompt([
    {
      type: 'list',
      name: 'logoShape',
      message: 'What shape would you like your logo?',
      choices: ['triangle', 'square', 'circle'],
      filter(val) {
        return val;
      }
    },
    {
      type: 'list',
      name: 'logoColor',
      message: 'What color would you like your logo background?',
      choices: ['yellow', 'blue', 'purple'],
      filter(val) {
        return val;
      }
    },
    {
    type: 'list',
    name: 'borderColor',
    message: 'What color would you like your border?',
    choices: ['black', 'red', 'blue'],
    filter(val) {
      return val;
    }
    },
    {
    type: 'list',
    name: 'borderWidth',
    message: 'How wide would you like your border?',
    choices: ['5', '6', '7'],
    filter(val) {
      return val;
    }
    },
    {
    type: 'input',
    name: 'textInput',
    message: 'Use 3 characters you would like to use for logo:',
    },
    {
    type: 'list',
    name: 'textColor',
    message: 'what color would you like your text to be?',
    choices: ['black', 'red', 'white'],
    filter(val) {
      return val;
    }
  },
  ])
  .then(answers => {
    let shapeChoice = new SVG(answers.logoShape)
    let shapeColor = new Shape(answers.logoColor, answers.borderColor, answers.borderWidth)
    let textChoices = new Text(answers.textInput, answers.textColor)
    let writeData = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <${shapeChoice.render()} ${shapeColor.render()}/>     

    ${textChoices.render()}

   </svg>`
   
   fs.writeFile("shape.svg", writeData, function(err){
    if(err)
    console.log(err)
})

  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





