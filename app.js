//Recupération des variables HTML avec le quesrySelector
const rollDice = document.querySelector('#roll-dice');
const hold = document.querySelector('#hold');
const newGame = document.querySelector('#new-game');
const imgDice = document.querySelector('.img-dice')
const spanPlayer = document.querySelectorAll('span');;
const currentScorePlayer1 = document.querySelector('#current-score-player-1');
const currentScorePlayer2 = document.querySelector('#current-score-player-2');
const scorePlayer1 = document.querySelector('#score-player-1');
const scorePlayer2 = document.querySelector('#score-player-2');

//Variable recuperer pour changer le fond afin de savoir qui joue
const blocPlayer1 = document.getElementById('bloc-player-1')
const blocPlayer2 = document.getElementById('bloc-player-2')


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
        currentScorePlayer1.innerHTML = ++currentScore1;
        blocPlayer1.style.background = "#dcdcdc";
        blocPlayer2.style.background = '#f1f1f1';
        spanPlayer[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="16" fill="currentColor" class="bi bi-circle-fill text-danger d-inline-block" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>`
      spanPlayer[1].innerHTML = ""
    }else if(randomNumber === 1){
        currentScore1 = 0
        currentScorePlayer1.innerHTML = currentScore1
        tourPlayer1 = !tourPlayer1
        tourPlayer2 = !tourPlayer2
    }else if(randomNumber > 1 && tourPlayer2){
        currentScorePlayer2.innerHTML = ++currentScore2
        blocPlayer2.style.background = "#dcdcdc";
        blocPlayer1.style.background = '#f1f1f1';
        spanPlayer[0].innerHTML = ""
        spanPlayer[1].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="16" fill="currentColor" class="bi bi-circle-fill text-danger d-inline-block" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>`
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

//Lorsque l'un des joueurs à gagné j'arrête le jeu
    if(tourPlayer2 && tourPlayer1){
        rollDice.removeEventListener('click', boucleDeJeu)
    }

})

//Ecouteur d'évenement pour relancer une partie
newGame.addEventListener('click',()=>{
    document.location.reload();
})