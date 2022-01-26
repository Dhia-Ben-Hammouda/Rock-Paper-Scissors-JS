let player1_score = 0;
let player2_score = 0;

let score1 = document.getElementById("Score1");
let score2 = document.getElementById("Score2");

let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");

let btn = document.getElementById("btn");


const paper = "./paper.png";
const rock = "./rock.png";
const scissors = "./scissors.png";

const images = [paper , rock , scissors];


btn.addEventListener("click" , gameloop)

function gameloop()
{
  let url1 = "";
  let url2 = "";

  url1 = images[Math.floor(Math.random()*3)];
  url2 = images[Math.floor(Math.random()*3)];


  image1.src = url1;
  image2.src = url2;

  if ( url1.includes("paper") )
  {
    if(url2.includes("rock"))
    {
      player1_score++;      
    }
    else if (url2.includes("scissors"))
    {
      player2_score++;
    }
  }

  if (url1.includes("rock"))
  {
    if (url2.includes("paper"))
    {
      player2_score++;
    }
    else if (url2.includes("scissors"))
    {
      player1_score++;
    }
  }

  if(url1.includes("scissors"))
  {
    if(url2.includes("paper"))
    {
      player1_score++;
    }
    else if (url2.includes("rock"))
    {
      player2_score++;
    }
  }


  score1.innerText = player1_score;
  score2.innerText = player2_score;

  if (score1.innerText == 3)
  {
    setTimeout( ()=>{
      window.alert("player 1 won");
    } , 500 )
    btn.removeEventListener("click" , gameloop);
  }
  
  if(score2.innerText == 3)
  {
    setTimeout( ()=>{
      window.alert("player 2 won");
    } , 500 )
    btn.removeEventListener("click" , gameloop);
  }
}













