var cd = 0;
var Dcd = 0;
var win = 0;
var lose = 0;

function getHand(){
    cd = Math.floor(Math.random() *13) + 1;

    Dcd = Math.floor(Math.random() *13) + 1;
    
    updateHand()
    updateDealerHand()
    compareCards()
    updateWinLose()
}

function updateHand(){
    document.getElementById("hand").innerHTML = "Your hand: " + cd;
}

function updateDealerHand(){
    document.getElementById("Dhand").innerHTML = "Dealer's hand: " + Dcd;
}

function compareCards(){
    if(cd > Dcd){
        win++;
    }

    else{
        lose++
    }
}

function updateWinLose(){
    document.getElementById("win").innerHTML = "Won: " + win;

    document.getElementById("lose").innerHTML= "lost: " + lose;
}

function resetGame(){
    cd = 0;
    Dcd = 0;
    win = 0;
    lose = 0;

    updateHand()
    updateDealerHand()
    updateWinLose()
}