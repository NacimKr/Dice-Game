//Recupération des variables HTML avec le quesrySelector
const rollDice = document.querySelector('#roll-dice');
const hold = document.querySelector('#hold');
const newGame = document.querySelector('#new-game');
const imgDice = document.querySelector('.img-dice')
const spanPlayer1 = document.querySelector('#player-1').lastChild;
const spanPlayer2 = document.querySelector('#player-2').lastChild;
const currentScorePlayer1 = document.querySelector('#current-score-player-1');
const currentScorePlayer2 = document.querySelector('#current-score-player-2');
const scorePlayer1 = document.querySelector('#score-player-1');
const scorePlayer2 = document.querySelector('#score-player-2');


//Variblaes pour les scores
let currentScore1 = 0
let currentScore2 = 0


//Booleans pour le changement des joueurs 
let tourPlayer1 = true
let tourPlayer2 = false


//Fonction du jeu des dé avec les conditions 
const boucleDeJeu = () => {

    let randomNumber = Math.floor(Math.random()*6)+1
    imgDice.src = `images/dice-${randomNumber}.png`
    
    if(randomNumber > 1 && tourPlayer1){
        currentScorePlayer1.innerHTML = ++currentScore1
    }else if(randomNumber === 1){
        currentScore1 = 0
        currentScorePlayer1.innerHTML = currentScore1
        tourPlayer1 = !tourPlayer1
        tourPlayer2 = !tourPlayer2
    }else if(randomNumber > 1 && tourPlayer2){
        currentScorePlayer2.innerHTML = ++currentScore2
    }else if(randomNumber === 1){
        currentScore2 = 0
        currentScorePlayer2.innerHTML = currentScore2
        tourPlayer2 = !tourPlayer2
        tourPlayer1 = !tourPlayer1
    }

}


//Ecouteur d'evenement lorsque qu'on lance les dés
rollDice.addEventListener('click', boucleDeJeu)


//Ecouteurs d'évenement pour mettre à jour le score et le sauvegarder
hold.addEventListener('click',()=>{
    if(tourPlayer1 && currentScore1 > 0){
        scorePlayer1.innerHTML = currentScore1;
        tourPlayer1 = false;
        tourPlayer2 = true;
    }else if(tourPlayer2 && currentScore2 > 0){
        scorePlayer2.innerHTML = currentScore2
        tourPlayer2 = false;
        tourPlayer1 = true;
    }

    if(currentScore1 === 10 || currentScore2 === 10){
        console.log("ok");
        tourPlayer2 = false;
        tourPlayer1 = false;
        return;
    }


    if(tourPlayer2 && tourPlayer1){
        rollDice.removeEventListener('click', boucleDeJeu)
    }

})


//Ecouteur d'évenement pour relancer une partie
newGame.addEventListener('click',()=>{
    document.location.reload();
})