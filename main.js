let transitionTime = 1;

//Edit names temp variables
let oldName = null;
let editDiv = null;

let minPlayers = 2;
let maxPlayers = 12;

let mobileCutoff = 900;

// Game tracking info
let numberOfPlayers = 0
let playerNames = []
let ix = 0;
let leftDeck = []
let rightDeck = []
let cardList = [];

//Get game data from other file
let categoryMap = null;
let cards = null;
let colorCategoryMap = null;
let importedData = false;

let emptySlotHTML = `
        <div class="empty-player-slot player-slot">EMPTY SLOT</div>
    `

var gameSettings;




// Taken from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function showSettings() {

    document.getElementsByClassName("start-main-screen")[0].style.display = "none";
    document.getElementsByClassName("start-rules-screen")[0].style.display = "none";    
    document.getElementsByClassName("start-settings-screen")[0].style.display = "block";

    document.body.style.backgroundColor = "var(--clr-third-main)";

}

function showRules() {

    document.getElementsByClassName("start-main-screen")[0].style.display = "none";
    document.getElementsByClassName("start-rules-screen")[0].style.display = "block";    
    document.getElementsByClassName("start-settings-screen")[0].style.display = "none";

    document.body.style.backgroundColor = "var(--clr-secondary-main)";

}

function showMainPage() {

    document.getElementsByClassName("start-main-screen")[0].style.display = "block";
    document.getElementsByClassName("start-rules-screen")[0].style.display = "none";    
    document.getElementsByClassName("start-settings-screen")[0].style.display = "none";

    document.body.style.backgroundColor = "var(--clr-primary-main)";
}



function isGameReady () {
    return (document.getElementsByClassName("start-game-btn")[0].getAttribute("data-permitted") === "true");
}

function canAddPlayers () {
    return (document.getElementsByClassName("add-player-btn")[0].getAttribute("data-permitted") === "true");
}

function canReset () {
    return (document.getElementsByClassName("reset-players-btn")[0].getAttribute("data-permitted") === "true");
}

function isMobileView() {
    return window.innerWidth < mobileCutoff;
}

function updateEmptySlots() {

    var numberEmptySlots;
    playerList = document.getElementsByClassName("player-list-div")[0];
    var minSlots = 6;

    let numberOfPlayers = document.getElementsByClassName("full-player-slot").length;   

    //Figure out how many empty slots we should have
    if (isMobileView()) {
        //Mobile view has one empty slot shown as long as there are at least enough slots (filled or not) for the minimum player count
        
        
        if (numberOfPlayers === maxPlayers) {
            numberEmptySlots = 0;
        } else {
            numberEmptySlots = Math.max(1, minSlots - numberOfPlayers);
        }

    } else {
        //Desktop view has empty slots to fill out to the max player count
        numberEmptySlots = maxPlayers - numberOfPlayers;
    }

    // Figure out difference in correct number of slots and current number of slots
    var slotsToAdd = numberEmptySlots - document.getElementsByClassName("empty-player-slot").length;

    // Add or remove extra slots
    if (slotsToAdd < 0){
        for (i = slotsToAdd; i < 0; i++) {
            document.getElementsByClassName("empty-player-slot")[0].remove();
        }
    }
    else {
        for (i = 0; i < slotsToAdd; i++) {
            playerList.insertAdjacentHTML("beforeend", emptySlotHTML);
        }
    }

}

function updatePlayerList() {

    numberOfPlayers = document.getElementsByClassName("full-player-slot").length;

    startBtn = document.getElementsByClassName("start-game-btn")[0];
    addBtn = document.getElementsByClassName("add-player-btn")[0];
    // resetBtn = document.getElementsByClassName("reset-players-btn")[0];

    // if(numberOfPlayers === 0){
    //     resetBtn.setAttribute("data-permitted", "false");         
    // } else {
    //     resetBtn.setAttribute("data-permitted", "true");
    // }

    if (importedData && numberOfPlayers >= minPlayers && editDiv == null) {
        startBtn.setAttribute("data-permitted", "true");        
    } else {
        startBtn.setAttribute("data-permitted", "false");  
    }

    if(numberOfPlayers === maxPlayers) {
        addBtn.setAttribute("data-permitted", "false");         
    } else {
        addBtn.setAttribute("data-permitted", "true");
    }

}


function addPlayer() {

    if(!canAddPlayers()) return;

    let playerName = document.getElementById("add-players-input").value

    if(playerName){

        let playerDivHTML = `
                    <p class="player-name-label">${playerName}</p>
                    <div class="icons-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" class="player-box-icon edit-icon" onclick="editPlayer(this)" data-name="edit" viewBox="0 0 16 16" >
                            <path d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z"/>
                            <path d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="player-box-icon delete-icon" onclick="deletePlayer(this)" data-name="delete" viewBox="0 0 16 16" >
                            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
                        </svg>
                    </div>
        `
        
        firstEmptySlot = document.getElementsByClassName("empty-player-slot")[0];
        if(firstEmptySlot) {
            if(firstEmptySlot.classList.contains("empty-player-slot")) {
                firstEmptySlot.classList.add("full-player-slot");
                firstEmptySlot.classList.remove("empty-player-slot");
            }
            firstEmptySlot.innerHTML = playerDivHTML;
        }

        document.getElementById("add-players-input").value = ""

        updateEmptySlots();
        updatePlayerList();

    }

}

function addPlayerEnterCheck(ele) {

        if(event.key === 'Enter') {
            addPlayer();     
        }

}

function editPlayerEnterCheck(ele) {

    if(event.key === 'Enter') {
        confirmPlayerEdit(ele);     
    }
    else if(event.key === 'Escape') {
        cancelPlayerEdit(ele);     
    }

}


function editPlayer(btn) {

    if(editDiv !== null) {
        cancelPlayerEdit();
    }

    editDiv = btn.parentElement.parentElement;
    oldName = editDiv.childNodes[1].innerHTML;

    if(editDiv.classList.contains("full-player-slot")) {
        editDiv.classList.add("editing-player-slot");
        editDiv.classList.remove("full-player-slot");
    }

    editDiv.innerHTML = `
        <input type="text" id="edit-player-input" class="edit-player-box" name="edit-player" placeholder="Player name" maxlength="20" value="${oldName}" onkeydown="editPlayerEnterCheck(this)">
        <div class="icons-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" class="player-box-stroke-icon confirm-icon" onclick="confirmPlayerEdit(this)" data-name="confirm" viewBox="4 4 18 18" >
                <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="player-box-stroke-icon cancel-icon" onclick="cancelPlayerEdit(this)" data-name="cancel" viewBox="0 0 24 24" >
                <circle cx="12" cy="12" r="9" stroke-width="2"/>
                <path d="M18 18L6 6" stroke-width="2"/>
            </svg>
        </div>
        `

    nameInput = editDiv.childNodes[1];
    nameLength = nameInput.value.length

    nameInput.focus();
    nameInput.setSelectionRange(nameLength, nameLength);

    updatePlayerList();

}

function confirmPlayerEdit(btn) {

    let newName = editDiv.childNodes[1].value;

    if(newName) {

        if(editDiv.classList.contains("editing-player-slot")) {
            editDiv.classList.add("full-player-slot");
            editDiv.classList.remove("editing-player-slot");
        }

        editDiv.innerHTML =`
                <p class="player-name-label">${newName}</p>
                <div class="icons-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" class="player-box-icon edit-icon" onclick="editPlayer(this)" data-name="edit" viewBox="0 0 16 16" >
                        <path d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z"/>
                        <path d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="player-box-icon delete-icon" onclick="deletePlayer(this)" data-name="delete" viewBox="0 0 16 16" >
                        <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
                    </svg>
                </div>
            `

        editDiv = null;
        oldName = null;

        updatePlayerList();
    }

}

function cancelPlayerEdit() {

        if(editDiv.classList.contains("editing-player-slot")) {
            editDiv.classList.add("full-player-slot");
            editDiv.classList.remove("editing-player-slot");
        }

        editDiv.innerHTML =`
            <p class="player-name-label">${oldName}</p>
            <div class="icons-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" class="player-box-icon edit-icon" onclick="editPlayer(this)" data-name="edit" viewBox="0 0 16 16" >
                    <path d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z"/>
                    <path d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="player-box-icon delete-icon" onclick="deletePlayer(this)" data-name="delete" viewBox="0 0 16 16" >
                    <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
                </svg>
            </div>
        `

    editDiv = null;
    oldName = null;

    updatePlayerList();

}

function deletePlayer(btn) {

    btn.parentElement.parentElement.remove()

    playerList = document.getElementsByClassName("player-list-div")[0];
    playerList.insertAdjacentHTML("beforeend", emptySlotHTML);

    updatePlayerList();
    updateEmptySlots();

}

function resetPlayers() {

    if(!canReset()) return;

    document.getElementsByClassName("player-list-div")[0].innerHTML = "";

    editDiv = null;
    oldName = null;

    updatePlayerList();

}


function setCardBack(card, details) {

    var style = getComputedStyle(document.body);

    let cardColor = style.getPropertyValue(colorCategoryMap[categoryMap[details.Category]]);
    card.style.background = cardColor;

    card.getElementsByClassName("card-back-title")[0].innerHTML = categoryMap[details["Category"]];

}

function setCardFront(card, details) {
    card.getElementsByClassName("main-card-title")[0].innerHTML = details["Name"];
    card.getElementsByClassName("main-card-text")[0].innerHTML = details["Description"];

    hintsBox = card.getElementsByClassName("main-card-hints")[0]

    let hints_list = details["Hints"]

    if (hints_list.length > 0) {
        let hints = "E.G. " + hints_list.join(", ")
        hintsBox.innerHTML = hints;
        hintsBox.style.display = "block";
    }
    else {
        hintsBox.style.display = "none";
    }
}

function skipPlayer() {

    ix = (ix + 1) % playerNames.length
    updateCurrentPlayer();

} 

function updateGameSettings() {

    var animations = document.getElementById('animations').checked;
    var inPerson = document.getElementById('in-person').checked;
    var nuclear = document.getElementById('nuclear').checked;
    var secrets = document.getElementById('secrets').checked;

    var drinkLevel;

    if (document.getElementById("light-drinks").checked){
        drinkLevel = 1;
    } else if (document.getElementById("medium-drinks").checked){
        drinkLevel = 2;
    } else {
        drinkLevel = 3;
    }


    gameSettings = {
        "animations": animations,
        "inPerson": inPerson,
        "nuclear": nuclear,
        "secrets": secrets,
        "drinkLevel": drinkLevel
    }

    console.log(gameSettings);

}

function startGame() {

    if(!isGameReady()) return;

    updateGameSettings();
    scrollToTop();

    // Create list of players
    playerNameElements = document.getElementsByClassName("player-name-label")
    for(i = 0; i < playerNameElements.length; i++){
        playerNames.push(playerNameElements[i].childNodes[0].textContent);
    }

    // Load and shuffle cards
    getDecks();
    console.log(leftDeck)
    console.log(rightDeck)


    // Set up card choices
    setCardBack(document.getElementsByClassName("card-1")[0], leftDeck[0])
    setCardBack(document.getElementsByClassName("card-2")[0], rightDeck[0])


    var style = window.getComputedStyle(document.body)


    // Change to new page
    document.body.style.backgroundColor = style.getPropertyValue('--clr-neutral-background');

    document.getElementsByClassName("homepage-container")[0].style.opacity = "0";

    document.getElementsByClassName("card-choice-content")[0].style.display = "block";



    // Set current player
    updateCurrentPlayer();

    //Cross-fade
    setTimeout(function() {
        document.getElementsByClassName("card-choice-content")[0].style.opacity = "1";
    }, transitionTime * 500);

    setTimeout(function() {
        document.getElementsByClassName("homepage-container")[0].style.display = "none";
    }, transitionTime * 1000);


}

function chooseCard(card) {


    let mainCard = document.getElementsByClassName("card-main")[0];

    // Choose correct card and rebalance decks
    if(card.classList.contains("card-1")) {
        setCardFront(mainCard, leftDeck[0]);
        leftDeck.shift();
    
    } else {
        setCardFront(mainCard, rightDeck[0]);
        rightDeck.shift();
    };

    rebalanceDecks();

    // Bring up main card page
    document.getElementsByClassName("card-choice-content")[0].style.display = "none";
    document.getElementsByClassName("main-card-content")[0].style.display = "block";


    // Set new card backs for next cards
    if (leftDeck.length > 0){
        setCardBack(document.getElementsByClassName("card-1")[0], leftDeck[0]);
    }
    if (rightDeck.length > 0){
        setCardBack(document.getElementsByClassName("card-2")[0], rightDeck[0]);
    }
}

function rebalanceDecks() {
    if (leftDeck.length === 0) {
        console.log("Rebalancing left deck")
        let midpoint = Math.floor(rightDeck.length / 2);
        leftDeck = rightDeck.slice(midpoint, rightDeck.length);
        rightDeck = rightDeck.slice(0, midpoint);        
    } 
    else if (rightDeck.length === 0) {
        console.log("Rebalancing right deck")
        let midpoint = Math.floor(leftDeck.length / 2);
        rightDeck = leftDeck.slice(midpoint, leftDeck.length);
        leftDeck = leftDeck.slice(0, midpoint);
    }
}


function updateCurrentPlayer () {

    elementArray = document.getElementsByClassName("current-player");
    for(var i = 0; i < elementArray.length; i++)
    {
        elementArray[i].innerHTML = playerNames[ix];
    }  
}


function nextCard(btn) {
    
    // Make big card shit visible
    // Show the cards info

    if(!btn.classList.contains("skip-btn")){
        ix = (ix + 1) % playerNames.length
        updateCurrentPlayer();
    }

    if (leftDeck.length === 0 && rightDeck.length === 0){
        alert("Game Over!")
    }

    else if (leftDeck.length + rightDeck.length === 1) {
        if (leftDeck.length === 1){
            setCardFront(document.getElementsByClassName("card-main")[0], leftDeck[0]);
            leftDeck.shift();
        }
        else {
            setCardFront(document.getElementsByClassName("card-main")[0], rightDeck[0]);
            rightDeck.shift();
        }
    } else {
        document.getElementsByClassName("card-choice-content")[0].style.display = "block";
        document.getElementsByClassName("main-card-content")[0].style.display = "none";
    }

}

// Taken from https://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


function getShuffledCardList() {

    shuffle(cards)

    cards = cards.filter(function( element ) {
        if (element == undefined) return false;
        return element["Online"]
     });

    return cards;
}

function getDecks() {
    // TODO: use game settings here
    cardList = getShuffledCardList();
    let midpoint = Math.floor(cardList.length / 2);

    leftDeck = cardList.slice(0, midpoint);
    rightDeck = cardList.slice(midpoint, cardList.length);
}



window.onload = function() {

    // var style = window.getComputedStyle(document.body)
    // document.body.style.backgroundColor = style.getPropertyValue('--clr-neutral-background');

    // let cardColor = style.getPropertyValue(colorCategoryMap[details.Category]);

    import("./data.js").then((module) => {
        categoryMap = module.jsonData["Categories"];
        cards = module.jsonData["Cards"];
        colorCategoryMap = module.colorCategoryMap;

        playerList = document.getElementsByClassName("player-list-div")[0]; 

        updateEmptySlots();

        updatePlayerList();
        importedData = true;
    })

    document.body.style.transition = "0.5s";

  }

addEventListener("resize", (event) => { 
    updateEmptySlots();
})