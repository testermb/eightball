let mG = 0;
let aG = 0;
let gameNumber = 0;
let gameStarter = 0; // 0 - adi, 1 - maciek;

let startGameButton = document.getElementsByClassName('start').item(0);


let adrianButton = document.getElementById("adrian");
let maciejButton = document.getElementById("maciek");
let toBreak = document.getElementById("toBreak");
let containerToHid = document.getElementsByClassName("hid").item(0);
let adiGames = document.getElementById("adiGames");
let maciekGames = document.getElementById("maciekGames");

let plusGamesAdi = document.getElementById("plusA");
let plusGamesMaciek = document.getElementById("plusM");

startGameButton.addEventListener('click', function() {
    reset();
    
});

adrianButton.addEventListener('click', function() {
    mG=0;
    aG=0;
    gameNumber=0;
    toBreak.innerHTML = "Adrian";
    adiGames.innerHTML = aG;
    maciekGames.innerHTML = mG;
    gameNumber++;
    containerToHid.classList.add('hidden');
})

maciejButton.addEventListener('click', function() {
    toBreak.innerHTML = "Maciek";
    adiGames.innerHTML = aG;
    maciekGames.innerHTML = mG;
    gameStarter = 1;
    gameNumber++;
    containerToHid.classList.add('hidden');
})

plusGamesMaciek.addEventListener('click', function() {
    mG++;
    maciekGames.innerHTML = mG;
    adiCzyMaciek(gameStarter);
    gameNumber++;

})

plusGamesAdi.addEventListener('click', function() {
    aG++;
    adiGames.innerHTML = aG;
    adiCzyMaciek(gameStarter);
    gameNumber++;
})

function reset() {
    mG=0;
    aG=0;
    gameNumber=0;
    toBreak.innerHTML = "";
    adiGames.innerHTML = aG;
    maciekGames.innerHTML = mG;
}

function adiCzyMaciek(gameStarter) {
    if (gameNumber==7) {
        alert('Adi: ' + aG + ', Maciek: '+mG);
        reset();
    }
    if (gameStarter == 1) {
        if (gameNumber%2==0) {
            toBreak.innerHTML = "Maciek";
        }
        else {
            toBreak.innerHTML = "Adrian";
        }
    } else if (gameStarter == 0) {
        if (gameNumber%2==0) {
            toBreak.innerHTML = "Adrian";
        }
        else {
            console.log("petla else");
            toBreak.innerHTML = "Maciek";
        }
    
    }
}


