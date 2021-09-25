let input = require('readline-sync')

let score =0
let userName = input.question("Who are you? ")
console.log("Welcome "+userName+" to the CRICKET quiz!!!!")


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
    question:`Who scored the first double century?
    1.Sachin Tendulkar,
    2.Belinda Clark
    3.Virendra Sehwag 
    `,
    answer:"2"
  },
  {
    question:`Who has most test wicket? 
    1.M Muralitharan
    2.SK Warne
    3.A Kumble
    `,
    answer:"1"
  },
  {
    question:`When India won the first world cup?
    1.1983
    2.1982
    3.1980
    `,
    answer:"1"
  },
  {
    question:`How many times India have the odi worldcup?
    1.4
    2.2
    3.1
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