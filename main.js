let number_of_players = 0
let curr_player_id = 0
let playerNames = []
let ix = 0;
let leftDeck = []
let rightDeck = []
let cardList = [];

let colorCategoryMap = {
    "Standard": "--color-card-standard",
    "Trivia": "--color-card-trivia",
    "Round the Table": "--color-card-roundtable",
    "Challenges": "--color-card-challenge" 
}


window.onload = function(){
    if(number_of_players === 0){
        document.getElementById("start-game-button-div").style.display = "none";
    }
    cardList = getShuffledCardList();
    let midpoint = Math.floor(cardList.length / 2);

    leftDeck = cardList.slice(0, midpoint)
    rightDeck = cardList.slice(midpoint, cardList.length)
  }

function addPlayer() {
    let playerName = document.getElementById("add-players-input").value
    if(playerName){
        number_of_players += 1;
        curr_player_id += 1;
        let playerDivHTML = `
        <div id="player-${curr_player_id}-div">
        <h2 class="player-name-label" id="player-${curr_player_id}">${playerName}</h2>
        <button class="remove-player-button" id="remove-player-${curr_player_id}" onclick="deletePlayer(this)">X</button>
        </div>
        `
        
        document.getElementById("player-list-div").innerHTML = document.getElementById("player-list-div").innerHTML + playerDivHTML
        console.log(`Added player ${playerName}`)
        document.getElementById("add-players-input").value = ""

        if(number_of_players === 1){
            document.getElementById("start-game-button-div").style.display = "block";
        }

    }

}

function deletePlayer(btn) {
    let playerID = btn.id.substring(14, btn.id.length);
    let playerLabelElement = document.getElementById("player-" + playerID)
    playerLabelElement.remove()
    btn.remove()
    number_of_players -= 1;
    if(number_of_players === 0){
        document.getElementById("start-game-button-div").style.display = "none";
    }

}

function setCardBack(card, details) {
    var style = getComputedStyle(document.body);

    let cardColor = style.getPropertyValue(colorCategoryMap[details.Category]);
    card.style.background = cardColor;

    card.getElementsByClassName("card-back-title")[0].innerHTML = details["Category"];

}

function setCardFront(card, details) {
    card.getElementsByClassName("main-card-title")[0].innerHTML = details["Title"];
    card.getElementsByClassName("main-card-text")[0].innerHTML = details["Description"];

}

function startGame() {
    
    playerNameElements = document.getElementsByClassName("player-name-label")
    for(i = 0; i < playerNameElements.length; i++){
        playerNames.push(playerNameElements[i].childNodes[0].textContent);
    }

    console.log(leftDeck)
    console.log(rightDeck)

    setCardBack(document.getElementById("card-l"), leftDeck[0])
    setCardBack(document.getElementById("card-r"), rightDeck[0])

    document.getElementById("add-players-box").style.display = "none";
    document.getElementById("card-choice-box").style.display = "block";

    document.getElementById("current-player").innerHTML = playerNames[ix];

}

function chooseCard(card) {
    
    // Make big card shit visible
    // Show the cards info
    
    if(card.id.substring(card.id.length - 1, card.id.length) === "l") {
        setCardFront(document.getElementById("card-main"), leftDeck[0]);
        leftDeck.shift();
        if (leftDeck.length === 0){
            rebalanceLeftDeck()
        }

    } else {
        setCardFront(document.getElementById("card-main"), rightDeck[0]);
        rightDeck.shift();
        if (rightDeck.length === 0){
            rebalanceRightDeck()
        }
    };

    document.getElementById("card-choice-box").style.display = "none";
    document.getElementById("main-card-box").style.display = "block";
    if (leftDeck.length > 0){
        setCardBack(document.getElementById("card-l"), leftDeck[0]);
    }
    if (rightDeck.length > 0){
    setCardBack(document.getElementById("card-r"), rightDeck[0]);
    }
}

function rebalanceLeftDeck() {
    console.log("Rebalancing left deck")
    let midpoint = Math.floor(rightDeck.length / 2)
    leftDeck = rightDeck.slice(midpoint, rightDeck.length)
    rightDeck = rightDeck.slice(0, midpoint)
}

function rebalanceRightDeck() {
    console.log("Rebalancing right deck")
    let midpoint = Math.floor(leftDeck.length / 2)
    rightDeck = leftDeck.slice(midpoint, leftDeck.length)
    leftDeck = leftDeck.slice(0, midpoint)
}



function nextCard(button) {
    
    // Make big card shit visible
    // Show the cards info

    ix = (ix + 1) % playerNames.length
    document.getElementById("current-player").innerHTML = playerNames[ix];

    if (leftDeck.length === 0 && rightDeck.length === 0){
        alert("Game Over!")
    }

    else if (leftDeck.length + rightDeck.length === 1) {
        if (leftDeck.length === 1){
            setCardFront(document.getElementById("card-main"), leftDeck[0]);
            leftDeck.shift();
        }
        else {
            setCardFront(document.getElementById("card-main"), rightDeck[0]);
            rightDeck.shift();
        }
    } else {
        document.getElementById("card-choice-box").style.display = "block";
        document.getElementById("main-card-box").style.display = "none";
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
    var cards = [  {"Title": "Drink Once",
                        "Description": "Take a single drink.",
                        "Category": "Standard"},

                        {"Title": "Make it double",
                        "Description": "Hand out 2 drinks.",
                        "Category": "Standard"},

                        {"Title": "Triple trouble",
                        "Description": "Hand out 3 drinks.",
                        "Category": "Standard"},

                        {"Title": "Social drinking",
                        "Description": "Drink for every player in the game.",
                        "Category": "Standard"},

                        {"Title": "Drink 3 Times",
                        "Description": "Take 3 drinks.",
                        "Category": "Standard"},

                        {"Title": "Bottoms Up!",
                        "Description": "Everyone take a drink.",
                        "Category": "Standard"},

                        {"Title": "Ladies!",
                        "Description": "Women take a drink.",
                        "Category": "Standard"},

                        {"Title": "Boys drink",
                        "Description": "Men take a drink.",
                        "Category": "Standard"},
                        
                        {"Title": "Non-pintary",
                        "Description": "Non-binary people take a drink.",
                        "Category": "Standard"},                      

                        {"Title": "Firearm tax",
                        "Description": "Drink if your forearms are showing, sluts",
                        "Category": "Standard"}, 

                        {"Title": "Tall glass",
                        "Description": "The tallest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Pete round",
                        "Description": "The shortest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Watch your liver",
                        "Description": "The oldest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Baby Guiness",
                        "Description": "The youngest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Hair",
                        "Description": "The player with the best hair drinks.",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ in your room (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ in the game (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ this week (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ tonight (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ this year (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ you own (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "Ginger beers",
                        "Description": "Gingers drink.",
                        "Category": "Standard"}, 

                        {"Title": "Parallel Lines",
                        "Description": "Blondes drink.",
                        "Category": "Standard"}, 

                        {"Title": "Poopheads",
                        "Description": "Brunettes drink.",
                        "Category": "Standard"}, 

                        {"Title": "Woke BS",
                        "Description": "Players with dyed hair (and pronouns) drink.",
                        "Category": "Standard"},               

                        {"Title": "Facial Hair",
                        "Description": "Players with a beard/moustache drink.",
                        "Category": "Standard"}, 

                        {"Title": "Best friends",
                        "Description": "You and the last player in the game you DM'ed drink",
                        "Category": "Standard"}, 

                        {"Title": "Catch-up",
                        "Description": "Most sober player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Down a load",
                        "Description": "Player with the highest download speed drinks.",
                        "Category": "Standard"},

                        {"Title": "Waterfall",
                        "Description": "The next player can't stop drinking until you stop, and so on.",
                        "Category": "Standard"},

                        {"Title": "Nuclear",
                        "Description": "Everyone down their drink.",
                        "Category": "Standard"},  
                        
                        {"Title": "Gaming",
                        "Description": "Drink for every video game you played today.",
                        "Category": "Standard"},                 

                        {"Title": "Fun Fact",
                        "Description": "Say a fun fact or drink. The group judges how fun the fact is.",
                        "Category": "Trivia"},

                        {"Title": "Set the scene",
                        "Description": "Act out a scene from a recent favourite book/movie/TV show. If someone guesses, they hand out 3 drinks.",
                        "Category": "Trivia"},                       

                        {"Title": "How Many",
                        "Description": "Within 10, how many ____ (player decides)",
                        "Category": "Trivia"},      
                        
                        {"Title": "How Many",
                        "Description": "Within 1000, how many ____ (player decides)",
                        "Category": "Trivia"},

                        {"Title": "How Many",
                        "Description": "Within 1,000,000, how many ____ (player decides)",
                        "Category": "Trivia"},

                        {"Title": "Few Words",
                        "Description": "Describe a film/book/show in as few words as possible. The person who guesses gives out drinks depending on how many words were needed.",
                        "Category": "Trivia"},

                        {"Title": "Question Master",
                        "Description": "Ask a trivia question, the player who gets the answer gives out 3 drinks.",
                        "Category": "Trivia"},

                        {"Title": "Act it out",
                        "Description": "Do an impression of a character from one of your last 5 watched films/shows. The player who gets it gives out 3 drinks.",
                        "Category": "Trivia"},

                        {"Title": "Impressions",
                        "Description": "Do a celebrity impression, the player who gets it gives out 3 drinks.",
                        "Category": "Trivia"},

                        {"Title": "Closest wins",
                        "Description": "Closest answer wins, how many times have I ____ (player decides).",
                        "Category": "Trivia"},

                        {"Title": "Guess the song",
                        "Description": "Sing a song line for line, the player who gets the answer gives out drinks.",
                        "Category": "Trivia"},

                        {"Title": "Guess Who",
                        "Description": "Think of a celebrity. Going round, each player can ask a yes/no question or make a guess.",
                        "Category": "Trivia"},

                        {"Title": "Guess Who",
                        "Description": "Think of a fictional character. Going round, each player can ask a yes/no question or make a guess.",
                        "Category": "Trivia"},

                        {"Title": "Tyrion card",
                        "Description": "Play a round of I drink and I know things.",
                        "Category": "Trivia"},

                        {"Title": "Categories",
                        "Description": "Films/TV shows/books that ____ e.g. feature an actor, genre.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Songs that ____ e.g. are by an artist, are about a thing.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Countries/places that ____ e.g. begin with, in a continent.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Games featuring ____ e.g. genre, character, equipment.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Peoples/characters that ____ e.g. in a sports team, did something.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Play a round of categories (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Play a round of categories (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Play a round of categories (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Rhymes",
                        "Description": "Play a round of rhymes (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Rhymes",
                        "Description": "Play a round of rhymes (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Name Game",
                        "Description": "Play a round of celebrity name game (player can decide a theme).",
                        "Category": "Round the Table"},
                        
                        {"Title": "Name Game",
                        "Description": "Play a round of celebrity name game (player can decide a theme).",
                        "Category": "Round the Table"},
                        
                        {"Title": "Most likely",
                        "Description": "Most likely to ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "Least likely",
                        "Description": "Least likely to ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "Most",
                        "Description": "Most ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "Least",
                        "Description": "Least ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "9+10",
                        "Description": "Play a game of 21.",
                        "Category": "Round the Table"},

                        {"Title": "7s",
                        "Description": "Play the game of 7s",
                        "Category": "Round the Table"},

                        {"Title": "Secrets",
                        "Description": "Tell a secret or drink.",
                        "Category": "Round the Table"},

                        {"Title": "Paranoia",
                        "Description": "Play a game of paranoia.",
                        "Category": "Round the Table"},

                        {"Title": "Paranoia",
                        "Description": "Play a game of paranoia.",
                        "Category": "Round the Table"},

                        {"Title": "Never Have I Ever",
                        "Description": "Current player asks a never have I ever question, anyone who has done it drinks.",
                        "Category": "Round the Table"},

                        {"Title": "Have I Ever",
                        "Description": "Current player asks a never have I ever question, anyone who has NOT done it drinks.",
                        "Category": "Round the Table"},

                        {"Title": "My favourite",
                        "Description": "Player decides, closest answer hands out 3 drinks.",
                        "Category": "Round the Table"},

                        {"Title": "Assumptions",
                        "Description": "Everyone make an assumption about another player.",
                        "Category": "Round the Table"},

                        {"Title": "Memory",
                        "Description": "Play I went to the bar.",
                        "Category": "Round the Table"},

                        {"Title": "Exposed",
                        "Description": "Everyone read out your most recent notification and drink.",
                        "Category": "Round the Table"},

                        {"Title": "Roll out",
                        "Description": "Everyone send the most recent picture from your camera roll then drink.",
                        "Category": "Round the Table"},
 
                        {"Title": "First to",
                        "Description": "First to ____ gives out 3 drinks (player decides).",
                        "Category": "Challenges"},

                        {"Title": "First to",
                        "Description": "First to ____ gives out 3 drinks (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last to",
                        "Description": "Last to ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last to",
                        "Description": "Last to ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last person who ____",
                        "Description": "Last person who ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last person who ____",
                        "Description": "Last person who ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Truth or Drink",
                        "Description": "Play a round of truth or drink.",
                        "Category": "Challenges"},

                        {"Title": "Truth or Drink",
                        "Description": "Play a round of truth or drink.",
                        "Category": "Challenges"},

                        {"Title": "Truth or Drink",
                        "Description": "Play a round of truth or drink.",
                        "Category": "Challenges"},

                        {"Title": "Would you rather",
                        "Description": "Play a round of would you rather.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "Members of ____ e.g. cast of a film, billionaires, a sports team.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "____ by ____ e.g. songs by artist, films by director.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "Player decides an auction.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "Player decides an auction.",
                        "Category": "Challenges"},

                        {"Title": "Challenge",
                        "Description": "Challenge someone to a game of your choice, double drinks if you lose.",
                        "Category": "Challenges"},

                        {"Title": "Challengers",
                        "Description": "Challenge someone else, everyone else decides the game.",
                        "Category": "Challenges"},

                        {"Title": "Coin flip",
                        "Description": "Flip a coin against another player.",
                        "Category": "Challenges"},
                        
                        {"Title": "Challenge",
                        "Description": "Challenge someone to come up with the best ____.",
                        "Category": "Challenges"},

                        {"Title": "Rose card",
                        "Description": "No speaking for a round.",
                        "Category": "Challenges"},

                        {"Title": "One leg",
                        "Description": "Stand on one leg for 2 rounds or drink 3 times.",
                        "Category": "Challenges"},

                        {"Title": "Accent",
                        "Description": "Speak in a different voice/accent for a round or drink twice.",
                        "Category": "Challenges"},

                        {"Title": "Shut up",
                        "Description": "Don't talk about ____ for 5 rounds or drink 5 times (group vote).",
                        "Category": "Challenges"},

                        {"Title": "RPS",
                        "Description": "Challenge someone to rock paper scissors.",
                        "Category": "Challenges"},

                        {"Title": "Drink Once",
                        "Description": "Take a single drink.",
                        "Category": "Standard"},

                        {"Title": "Make it double",
                        "Description": "Hand out 2 drinks.",
                        "Category": "Standard"},

                        {"Title": "Triple trouble",
                        "Description": "Hand out 3 drinks.",
                        "Category": "Standard"},

                        {"Title": "Social drinking",
                        "Description": "Drink for every player in the game.",
                        "Category": "Standard"},

                        {"Title": "Drink 3 Times",
                        "Description": "Take 3 drinks.",
                        "Category": "Standard"},

                        {"Title": "Bottoms Up!",
                        "Description": "Everyone take a drink.",
                        "Category": "Standard"},

                        {"Title": "Ladies!",
                        "Description": "Women take a drink.",
                        "Category": "Standard"},

                        {"Title": "Boys drink",
                        "Description": "Men take a drink.",
                        "Category": "Standard"},
                        
                        {"Title": "Non-pintary",
                        "Description": "Non-binary people take a drink.",
                        "Category": "Standard"},                      

                        {"Title": "Firearm tax",
                        "Description": "Drink if your forearms are showing, sluts",
                        "Category": "Standard"}, 

                        {"Title": "Tall glass",
                        "Description": "The tallest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Pete round",
                        "Description": "The shortest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Watch your liver",
                        "Description": "The oldest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Baby Guiness",
                        "Description": "The youngest player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Hair",
                        "Description": "The player with the best hair drinks.",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ in your room (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ in the game (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ this week (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ tonight (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ this year (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "For Every",
                        "Description": "Drink for every ____ you own (player decides)",
                        "Category": "Standard"}, 

                        {"Title": "Ginger beers",
                        "Description": "Gingers drink.",
                        "Category": "Standard"}, 

                        {"Title": "Parallel Lines",
                        "Description": "Blondes drink.",
                        "Category": "Standard"}, 

                        {"Title": "Poopheads",
                        "Description": "Brunettes drink.",
                        "Category": "Standard"}, 

                        {"Title": "Woke BS",
                        "Description": "Players with dyed hair (and pronouns) drink.",
                        "Category": "Standard"},               

                        {"Title": "Facial Hair",
                        "Description": "Players with a beard/moustache drink.",
                        "Category": "Standard"}, 

                        {"Title": "Best friends",
                        "Description": "You and the last player in the game you DM'ed drink",
                        "Category": "Standard"}, 

                        {"Title": "Catch-up",
                        "Description": "Most sober player drinks.",
                        "Category": "Standard"}, 

                        {"Title": "Down a load",
                        "Description": "Player with the highest download speed drinks.",
                        "Category": "Standard"},

                        {"Title": "Waterfall",
                        "Description": "The next player can't stop drinking until you stop, and so on.",
                        "Category": "Standard"},

                        {"Title": "Nuclear",
                        "Description": "Everyone down their drink.",
                        "Category": "Standard"},  
                        
                        {"Title": "Gaming",
                        "Description": "Drink for every video game you played today.",
                        "Category": "Standard"},                 

                        {"Title": "Fun Fact",
                        "Description": "Say a fun fact or drink. The group judges how fun the fact is.",
                        "Category": "Trivia"},

                        {"Title": "Set the scene",
                        "Description": "Act out a scene from a recent favourite book/movie/TV show. If someone guesses, they hand out 3 drinks.",
                        "Category": "Trivia"},                       

                        {"Title": "How Many",
                        "Description": "Within 10, how many ____ (group decides)",
                        "Category": "Trivia"},      
                        
                        {"Title": "How Many",
                        "Description": "Within 1000, how many ____ (group decides)",
                        "Category": "Trivia"},

                        {"Title": "How Many",
                        "Description": "Within 1,000,000, how many ____ (group decides)",
                        "Category": "Trivia"},

                        {"Title": "Few Words",
                        "Description": "Describe a film/book/show in as few words as possible. The person who guesses gives out drinks depending on how many words were needed.",
                        "Category": "Trivia"},

                        {"Title": "Question Master",
                        "Description": "Ask a trivia question, the player who gets the answer gives out 3 drinks.",
                        "Category": "Trivia"},

                        {"Title": "Act it out",
                        "Description": "Do an impression of a character from one of your last 5 watched films/shows. The player who gets it gives out 3 drinks.",
                        "Category": "Trivia"},

                        {"Title": "Impressions",
                        "Description": "Do a celebrity impression, the player who gets it gives out 3 drinks.",
                        "Category": "Trivia"},

                        {"Title": "Closest wins",
                        "Description": "Closest answer wins, how many times have I ____ (player decides).",
                        "Category": "Trivia"},

                        {"Title": "Guess the song",
                        "Description": "Sing a song line for line, the player who gets the answer gives out drinks.",
                        "Category": "Trivia"},

                        {"Title": "Guess Who",
                        "Description": "Think of a celebrity. Going round, each player can ask a yes/no question or make a guess.",
                        "Category": "Trivia"},

                        {"Title": "Guess Who",
                        "Description": "Think of a fictional character. Going round, each player can ask a yes/no question or make a guess.",
                        "Category": "Trivia"},

                        {"Title": "Tyrion card",
                        "Description": "Play a round of I drink and I know things.",
                        "Category": "Trivia"},



                        {"Title": "Categories",
                        "Description": "Films/TV shows/books that ____ e.g. feature an actor, genre.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Songs that ____ e.g. are by an artist, are about a thing.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Countries/places that ____ e.g. begin with, in a continent.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Games featuring ____ e.g. genre, character, equipment.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Peoples/characters that ____ e.g. in a sports team, did something.",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Play a round of categories (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Play a round of categories (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Categories",
                        "Description": "Play a round of categories (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Rhymes",
                        "Description": "Play a round of rhymes (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Rhymes",
                        "Description": "Play a round of rhymes (player decides).",
                        "Category": "Round the Table"},

                        {"Title": "Name Game",
                        "Description": "Play a round of celebrity name game (player can decide a theme).",
                        "Category": "Round the Table"},

                        
                        {"Title": "Name Game",
                        "Description": "Play a round of celebrity name game (player can decide a theme).",
                        "Category": "Round the Table"},

                        
                        {"Title": "Most likely",
                        "Description": "Most likely to ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "Least likely",
                        "Description": "Least likely to ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "Most",
                        "Description": "Most ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "Least",
                        "Description": "Least ____ drinks (player decides, group vote).",
                        "Category": "Round the Table"},

                        {"Title": "9+10",
                        "Description": "Play a game of 21.",
                        "Category": "Round the Table"},

                        {"Title": "7s",
                        "Description": "Play the game of 7s",
                        "Category": "Round the Table"},

                        {"Title": "Secrets",
                        "Description": "Tell a secret or drink.",
                        "Category": "Round the Table"},

                        {"Title": "Paranoia",
                        "Description": "Play a game of paranoia.",
                        "Category": "Round the Table"},

                        {"Title": "Paranoia",
                        "Description": "Play a game of paranoia.",
                        "Category": "Round the Table"},

                        {"Title": "Never Have I Ever",
                        "Description": "Current player asks a never have I ever question, anyone who has done it drinks.",
                        "Category": "Round the Table"},

                        {"Title": "Have I Ever",
                        "Description": "Current player asks a never have I ever question, anyone who has NOT done it drinks.",
                        "Category": "Round the Table"},

                        {"Title": "My favourite",
                        "Description": "Player decides, closest answer hands out 3 drinks.",
                        "Category": "Round the Table"},

                        {"Title": "Assumptions",
                        "Description": "Everyone make an assumption about another player.",
                        "Category": "Round the Table"},

                        {"Title": "Memory",
                        "Description": "Play I went to the bar.",
                        "Category": "Round the Table"},

                        {"Title": "Exposed",
                        "Description": "Everyone read out your most recent notification and drink.",
                        "Category": "Round the Table"},

                        {"Title": "Roll out",
                        "Description": "Everyone send the most recent picture from your camera roll then drink.",
                        "Category": "Round the Table"},
,
 
                        {"Title": "First to",
                        "Description": "First to ____ gives out 3 drinks (player decides).",
                        "Category": "Challenges"},

                        {"Title": "First to",
                        "Description": "First to ____ gives out 3 drinks (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last to",
                        "Description": "Last to ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last to",
                        "Description": "Last to ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last person who ____",
                        "Description": "Last person who ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Last person who ____",
                        "Description": "Last person who ____ drinks twice (player decides).",
                        "Category": "Challenges"},

                        {"Title": "Truth or Drink",
                        "Description": "Play a round of truth or drink.",
                        "Category": "Challenges"},

                        {"Title": "Truth or Drink",
                        "Description": "Play a round of truth or drink.",
                        "Category": "Challenges"},

                        {"Title": "Truth or Drink",
                        "Description": "Play a round of truth or drink.",
                        "Category": "Challenges"},

                        {"Title": "Would you rather",
                        "Description": "Play a round of would you rather.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "Members of ____ e.g. cast of a film, billionaires, a sports team.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "____ by ____ e.g. songs by artist, films by director.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "Player decides an auction.",
                        "Category": "Challenges"},

                        {"Title": "Auctions",
                        "Description": "Player decides an auction.",
                        "Category": "Challenges"},

                        {"Title": "Challenge",
                        "Description": "Challenge someone to a game of your choice, double drinks if you lose.",
                        "Category": "Challenges"},

                        {"Title": "Challengers",
                        "Description": "Challenge someone else, everyone else decides the game.",
                        "Category": "Challenges"},

                        {"Title": "Coin flip",
                        "Description": "Flip a coin against another player.",
                        "Category": "Challenges"},
                        
                        {"Title": "Challenge",
                        "Description": "Challenge someone to come up with the best ____.",
                        "Category": "Challenges"},

                        {"Title": "Rose card",
                        "Description": "No speaking for a round.",
                        "Category": "Challenges"},

                        {"Title": "One leg",
                        "Description": "Stand on one leg for 2 rounds or drink 3 times.",
                        "Category": "Challenges"},

                        {"Title": "Accent",
                        "Description": "Speak in a different voice/accent for a round or drink twice.",
                        "Category": "Challenges"},

                        {"Title": "Shut up",
                        "Description": "Don't talk about ____ for 5 rounds or drink 5 times (group vote).",
                        "Category": "Challenges"},

                        {"Title": "RPS",
                        "Description": "Challenge someone to rock paper scissors.",
                        "Category": "Challenges"}
                    ]

    shuffle(cards)

    cards = cards.filter(function( element ) {
        return element !== undefined;
     });

    return cards;
}
