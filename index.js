
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimg="./images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg);

//for second dice
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg1="./images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg1);

//Game logic
if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="It's a draw";
}
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
    
}else{
    document.querySelector("h1").innerHTML="Player 2 wins";

}

