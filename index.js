var readlineSync = require ("readline-sync");

const chalk = require ('chalk')

var score = 0

var userName = readlineSync.question (chalk.yellow("Please Enter Your Name"));

console.log (chalk.blue.bold(" Welcome "  +  userName  +  " Lets Play Bollywood Quiz "));

console.log (chalk.magenta("-------------"))

function play (question,answer){
  var userAnswer = readlineSync.question (question);

  if (userAnswer === answer)
  {
    console.log (chalk.green("Right"));
    score = score + 1;
    console.log (score)
    console.log (chalk.magenta("-------------"));
  }
  else
  {
     console.log (chalk.red("Wrong"));
     
     console.log (chalk.magenta("-------------"));
  }
}

var questions = 
[
  {
   question: "Recently which bollywood actor got suicid?\nA:vickyKaushal,\nB:kartikAriyan,\nC:sushant Singh Rajput" ,                                                 
   answer: "C"
  } ,
  {
    question: "What is the name of shahrukh khan's house?       \nA:mannat,\nB:jannat,\nC:villa" ,                                                        
   answer: "A"
  },
  {
  question: "What is the name of Saif and Kareena's child?            \nA:taimur,\nB:aaradhya,\nC:rahul" ,                                          
  answer: "A"
  } ,
  {
  question: "Which year Sushmita Sen was crowned Miss india?\nA:1996,\nB:1994,\nC:1995" ,                                                                     
  answer: "B"
  } ,
];

for (var i=0; i<questions.length; i++)
{
  var currentQuestion = questions [i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log (chalk.cyan.bold("Your Final Score Is:"  +   score));