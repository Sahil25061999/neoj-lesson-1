let input = require('readline-sync')
let chalk = require('chalk')

const correct = chalk.green
const wrong = chalk.red
const highlight = chalk.blue


let score =0
let userName = input.question("Who are you? ")
console.log(highlight("Welcome %s to the quiz!!!!"),userName)
console.log('------------------------')


let highScore = [{
  name:"Sunidhi",
  score:3
},
{
  name:'rakesh',
  score:2
}

]


let questions = [
  {
    question:"Who is my favorite cricketer?",
    option:['Sachin Tendulkar',
    'Rohit Sharma',
  'Virat Kohli']
    ,
    answer:2
  },
  {
    question:"Which year i was born?", 
    option:['1999',
    '1998',
    '2000']
    ,
    answer:1
  },
  {
    question:'What is my favorite color?',
    option:['Black',
    'Blue',
    'Violet']
    ,
    answer:1
  },
  {
    question:'Which anime I like?',
    option:['Naruto',
    'Your lie',
    'Bleach']
    ,
    answer:2
  },{
    question:'Which is my favorite kpop group?',
    option:['BTS',
    'Twice',
    'EXO']
    ,
    answer:3
  }
]

function verify(question,option,answer){
  var index = input.keyInSelect(option,question,{cancel:false})+1
  
  if(index == answer){
    score+=1
    console.log(correct("Correct!!!"))
  }else{
    console.log(wrong("Wrong!!!"))
  }
  console.log(highlight("Current Score: %s"),score)
  console.log("------------------------")
}




for(i=0;i<questions.length;i++){
  verify(questions[i].question,questions[i].option,questions[i].answer)
}


console.log(chalk.yellow("Final Score: %s "),score)
console.log("------------------------")
let flag = false

for(i=0;i<highScore.length;i++){
  if(score>highScore[i].score){
    flag = true
  }
}

if(flag){
  console.log(highlight(`Yay!!! you have beaten a highscore \nSend screenshot to update leaderboard`))
}