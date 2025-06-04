
// var randomNumber1=Math.floor(Math.random()*6)+1;

// var randomdiceimg1="./images/dice"+randomNumber1+".png";

// document.querySelectorAll("img")[0].setAttribute("src",randomdiceimg1);



// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomdiceimg2="./images/dice"+randomNumber2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg2);

// if(randomNumber1==randomNumber2){
//     document.querySelector("h1").innerHTML="it's a Draw";
// }else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerHTML="Player 2 wins";
    
// }else if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML="Player 1 wins";
// }
//For first dice
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

