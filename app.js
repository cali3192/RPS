// testing to see if it works in teh console
// console.log('hello');

// cashe the DOM
let userScore = 0;
let computerScore = 0;

// the underscore indicates that it si a DOM variable
  // the span is because userScore was defined using a span tag in the HTML 
    // helps with debugging
// cashing the DOM
  // cashing - storing for future use
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreboard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let sissors_div = document.getElementById("sissors");


// What happens when we click on different elements?
  // i.e. choising rock will compare that chosen element against the randomly generated value by computer
    // check to see who wins
      // store result in the DOM

// rock_div.addEventListener('click', function(){
//   console.log('you clicked on rock')
// })


function upperCase(x){
  return x.toUpperCase();
}

// console.log(upperCase('testing'));


// the randomly genereated computer result
function getComputerChoice(){
  let choices =["rock", "paper", "sissors"];
  // will generate a number between 1 and 3
  let randomNumber = Math.floor(Math.random()* 3);
  // 3 elements and you will either get choices[0] - choices[3];  
  return choices[randomNumber];
}

// this was a test to see if the function was working
// console.log(getComputerChoice());

// because this "" was used often when referencing some CSS code
// let document.getElementById(user).classList = document.getElementById(user).classList;

// previously an anon function but we want to pass in two variables that will be later be displayed int eh HTML site
function wins(user, computer){
  // console.log("USER WINS!");
  userScore++;
  // test
  // console.log("userScore: " + userScore + "\n" + "computerScore:" + computerScore);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  // checking to see what the user and computer pick
  // console.log('user picks => ' + user + ' computer picks => ' + computer + '\n' + 'userScore: ' + userScore + '\n' + 'computerScore:' + computerScore );

  // winning message
  // result_p.innerHTML = user + ' beats ' + computer + ' You Win!';

  // E6 syntax for the above line
  result_p.innerHTML = `${upperCase(user)} beats ${upperCase(computer)} You Win!`;
// opt addin to ake it clear who is who. add after ${comment}
  // let userFont = 'user'.fontsize(3).sub()
  // let compFont = 'comp'.fontsize(3).sub();

  //change the border color to green temporarily if you win
    // step 1 is to make that style in CSS
    // in green glow you're adding the green class
    // fuck it, store everything before the .add in a var. mave it out of this scope so you can use it for the other lines of code 
  document.getElementById(user).classList.add('green-glow');

  // for the set timeout, it is similar to the code above but we didn't store it in a var since you are removing a class ".remove"
  // setTimeout(function(callback, ms))
  // you can see this behavior if you open the source code HTML and waych this class disappear
  setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 1000);
}

// setTimeOut for the green, etc. glow


function loses(user, computer){
  // console.log("YA LOST");
  computerScore++
  // test
  // console.log("userScore: " + userScore + "\n" + "computerScore:" + computerScore);
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;


  // pick checks
    // console.log('user picks => ' + user + ' computer picks => ' + computer + '\n' + 'userScore: ' + userScore + '\n' + 'computerScore:' + computerScore );

// winning message
  // result_p.innerHTML = computer + ' beats ' + user;

  // E6
    result_p.innerHTML = `${upperCase(computer)} beats ${upperCase(user)} You Lose p`;
// opt addin to ake it clear who is who. add after ${comment}
  // let userFont = 'user'.fontsize(3).sub()
  // let compFont = 'comp'.fontsize(3).sub();
  document.getElementById(user).classList.add('red-glow');

  // for the set timeout, it is similar to the code above but we didn't store it in a var since you are removing a class ".remove"
  // setTimeout(function(callback, ms))
  // you can see this behavior if you open the source code HTML and waych this class disappear
  setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 1000);
}


function draw(user, computer){
  // console.log("ISSA DRAW" + "\n" + "userScore: " + userScore + "\n" + "computerScore:" + computerScore);
  // console.log('ISSA DRAW' + '\n' + 'user picks => ' + user + ' computer picks => ' + computer + '\n' + 'userScore: ' + userScore + '\n' + 'computerScore:' + computerScore );


  // message
  // result_p.innerHTML = 'ISSA DRAW \n' + user + ' draws ' + computer;

  // E6
    result_p.innerHTML = `${upperCase(user)} ties ${upperCase(computer)}. ISSA DRAW`;


    document.getElementById(user).classList.add('gray-glow');

  // for the set timeout, it is similar to the code above but we didn't store it in a var since you are removing a class ".remove"
  // setTimeout(function(callback, ms))
  // you can see this behavior if you open the source code HTML and waych this class disappear
  setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')}, 1000);
}

// the UserChoice function when you, the user clicks the different choices
function game(userChoice) {
  let computerChoice = getComputerChoice();
  // console.log("computerChoice=>" + computerChoice);  
  // console.log("userChoice =>" + userChoice);

  // Switch Statements!
  switch (userChoice + computerChoice) {
    case "rocksissors":
    case "paperrock" :
    case "sissorspaper" :
      // console.command replaced with the wins function
      // console.log("USER WINS!");
      wins(userChoice, computerChoice)
      break;
    case "rockpaper":
    case "papersissors":
    case "sissorsrock":
      // console.log("USER LOSES");
      loses(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "sissorssissors":
      // console.log("ISSA DRAW");
      draw(userChoice, computerChoice);
      break;
  } 
}

function main() {
  rock_div.addEventListener('click', function(){
    // console.log('you clicked on rock')
    game("rock");
  })
  
  paper_div.addEventListener('click', function(){
    // console.log('you clicked on paper')
    game("paper");
  })
  
  sissors_div.addEventListener('click', function(){
    // console.log('you clicked on sissors')
    game("sissors");
  })
}

main();


