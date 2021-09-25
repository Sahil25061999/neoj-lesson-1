let input = require('readline-sync')

let score =0
let userName = input.question("Who are you? ")
console.log("Welcome "+userName+" to the about me quiz!!!!")


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
    question:`Who is my favorite cricketer?
    1.Sachin Tendulkar
    2.Rohit Sharma
    3.Virat Kohli
    `,
    answer:"2"
  },
  {
    question:`Which year i was born? 
    1.1999
    2.1998
    3.2000
    `,
    answer:"1"
  },
  {
    question:`What is my favorite color?
    1.Black
    2.Blue
    3.Violet
    `,
    answer:"1"
  },
  {
    question:`Which anime I like?
    1.Naruto
    2.Your lie
    3.Bleach
    `,
    answer:"2"
  }
]

function verify(question,answer){
  var index = input.question(question)
  if(index === answer){
    score+=1
    console.log("Correct!!!")
  }else{
    console.log("Wrong!!!")
  }
  console.log("Current Score: ",score)
  console.log("-------------")
}




for(i=0;i<questions.length;i++){
  verify(questions[i].question,questions[i].answer)
}


console.log("Final Score: ",score)
console.log("-------------")

for(i=0;i<highScore.length;i++){
  if(score>highScore[i].score){
    console.log(`Yay!!! you have beaten a highscore \n Send screenshot to update leaderboard`)  
  }
}