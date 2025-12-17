let randomNumber1 = Math.floor(Math.random() * 6)+ 1;//number 1-6
let randomDiceImage = ("dice") + randomNumber1 + ".png";// dice1.png to dice6.png
let randomImageSource = "images/" + randomDiceImage;    
let image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
// Second Dice but changed 
let randomNumber2 = Math.floor(Math.random() * 6)+ 1;//number 1-6
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";// use "images/dice" as a string and just add randomNumber2 to simplify it.
let image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🏆"

}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆"
}
else{
    document.querySelector("h1").innerHTML = "It's a draw, try again!"
}