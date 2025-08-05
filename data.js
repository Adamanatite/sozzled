let colorCategoryMap = {
    "Standard": "--clr-primary-main",
    "Trivia": "--clr-secondary-main",
    "Table Games": "--clr-third-main",
    "Challenges": "--clr-fourth-main",
    "Secret": "--clr-fifth-main"
}

var jsonData = {
    "Categories": {
        "0": "Challenges",
        "1": "Table Games",
        "2": "Secret",
        "3": "Standard",
        "4": "Trivia"
    },
    "Cards": [
        {
            "Name": "Speedrun",
            "Description": "First to ____ gives out two drinks",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Touch the ceiling",
                "Touch something green",
                "Name an album",
                "High five someone",
                "Do a pushup"
            ],
            "Online": true
        },
        {
            "Name": "Speedrun",
            "Description": "First to ____ gives out two drinks",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Spin around",
                "Jump",
                "Drink Twice",
                "Spell Manoeuvre",
                "Take a selfie",
                "Take off a piece of clothing"
            ],
            "Online": true
        },
        {
            "Name": "Speedrun",
            "Description": "Last to ____ gives out two drinks",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Go to the bathroom",
                "Breathe",
                "Clap",
                "Take a drink",
                "Check their phone",
                "Say the letter A",
                "Blink"
            ],
            "Online": true
        },
        {
            "Name": "Speedrun",
            "Description": "Last to ____ drinks twice",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Arrive",
                "Touch their toes",
                "Name a woman",
                "Take a drink",
                "Compliment me",
                "Name a song",
                "Do a dance move"
            ],
            "Online": true
        },
        {
            "Name": "Truth or Drink",
            "Description": "Ask a question to the group, each player must answer or drink",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Where were you on January 6th",
                "What's your bodycount",
                "What's your guilty pleasure movie"
            ],
            "Online": true
        },
        {
            "Name": "Truth or Drink",
            "Description": "Ask a question to the group, each player must answer or drink",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "What's your weirdest talent",
                "Who do you hate the most",
                "What's your most embarrassing moment"
            ],
            "Online": true
        },
        {
            "Name": "Would you rather",
            "Description": "Ask a would you rather question to the group, largest side drinks for everyone in agreement",
            "Category": 0,
            "Level": 2,
            "Hints": [
                "Burgers of pizza",
                "England or Scotland",
                "True love or infinite money",
                "Drown or burn to death"
            ],
            "Online": true
        },
        {
            "Name": "Physical Challenge",
            "Description": "Challenge a player to a physical game of your choice, if you win they drink, or else drink twice",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Arm wrestle",
                "Thumb war",
                "Staring contest",
                "Dance off",
                "Paper airplanes",
                "Pushup contest",
                "H.O.R.S.E"
            ],
            "Online": false
        },
        {
            "Name": "Challenge!",
            "Description": "Challenge a player to any game of your choice",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Fun fact battle",
                "Noughts and crosses",
                "Rock paper scissors",
                "Coin flip",
                "Chess",
                "Arm wrestle"
            ],
            "Online": true
        },
        {
            "Name": "Challenge!",
            "Description": "Challenge a player to any game of the groups choice, loser drinks twice",
            "Category": 0,
            "Level": 1,
            "Hints": [
                "Wordle",
                "Rap battle",
                "Race",
                "8 Ball Pool",
                "Charades",
                "Water Cup challenge",
                "Mario kart",
                "Chug off",
                "52 card pickup"
            ],
            "Online": true
        },
        {
            "Name": "Coin Flip",
            "Description": "Flip a coin against a player of your choice, loser drinks",
            "Category": 0,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Shut up",
            "Description": "No speaking for one round, drink every time you do",
            "Category": 0,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Flamingo Moding",
            "Description": "Stand on one leg for two rounds or drink four times",
            "Category": 0,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Seth Macfarlane",
            "Description": "Speak in a different voice or accent for a round or dirnk twice",
            "Category": 0,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Just shut up",
            "Description": "Don't talk about ____ for five rounds or drink five times, group decides",
            "Category": 0,
            "Level": 2,
            "Hints": [
                "Your dog",
                "Your partner",
                "Your favourite show",
                "Your favourite sports team",
                "Cryptocurrency"
            ],
            "Online": true
        },
        {
            "Name": "Hide n seek",
            "Description": "Hide this card, first to find it gives out five drinks",
            "Category": 0,
            "Level": 2,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Rock paper scissors",
            "Description": "Challenge a player to rock paper scissors, loser drinks twice",
            "Category": 0,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "The floor is lava",
            "Description": "Any player who touches the floor for the next three rounds drinks three times",
            "Category": 0,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "The Ally",
            "Description": "Keep a straight face for a round or drink twice",
            "Category": 0,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "Take turns naming a film, show or book that ____. First to hesitate drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Feature a certain actor",
                "Are of a particular genre",
                "Where an event happens",
                "Start with a letter"
            ],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "Songs ____. First to hesitate drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "By a certain artist",
                "About a topic",
                "Of a certain genre",
                "That got number one",
                "Have a word in the title"
            ],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "Countries/Places that ____. First to hesitate drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Have tricolour flags",
                "Appear in something",
                "Start with a letter",
                "Are in a continent",
                "Are in a country"
            ],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "Games featuring ____. First to hesitate drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "A character",
                "Weapons",
                "Zombies",
                "A celebrity",
                "Cards",
                "A ball",
                "A silent protagonist"
            ],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "People or characters in ____. First to hesitate drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "A franchise",
                "A sports team",
                "A show",
                "Government",
                "This game",
                "TIME's person of the year"
            ],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "Pick any category! First to hesitate drinks three times",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Disney films",
                "Capital cities",
                "Football teams",
                "Billionaires",
                "World leaders",
                "Dog breeds"
            ],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "Pick any category! First to hesitate drinks three times",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Natural disasters",
                "Xbox games",
                "Prime numbers",
                "Tim Burton films",
                "Bald people",
                "Rappers",
                "Currencies"
            ],
            "Online": true
        },
        {
            "Name": "Categories",
            "Description": "Pick any category! First to hesitate drinks three times",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Crayola colours",
                "Alcohol brands",
                "Romance novels",
                "World cup winners"
            ],
            "Online": true
        },
        {
            "Name": "Rhymes",
            "Description": "Pick a word, take turns naming words that rhyme, first to fail drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Rhymes",
            "Description": "Pick a word, take turns naming words that rhyme, first to fail drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Name Game",
            "Description": "Pick a celebrity, take turns naming one, first to fail drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Name Game",
            "Description": "Pick a character, take turns naming one, first to fail drinks twice",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Fingered",
            "Description": "Most likely to ____ drinks twice, group decides",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Get arrested",
                "Spill their drink",
                "Become famous",
                "Dump someone by text"
            ],
            "Online": true
        },
        {
            "Name": "Fingered",
            "Description": "Least likely to ____ drinks twice, group decides",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Get married",
                "Stay sober tonight",
                "Read a book",
                "Buy a round"
            ],
            "Online": true
        },
        {
            "Name": "Fingered",
            "Description": "Most ____ drinks three times, group decides",
            "Category": 1,
            "Level": 2,
            "Hints": [
                "Sober",
                "Stylish",
                "Intelligent",
                "Dramatic",
                "Reliable",
                "Funny"
            ],
            "Online": true
        },
        {
            "Name": "Fingered",
            "Description": "Least ____ drinks three times, group decides",
            "Category": 1,
            "Level": 2,
            "Hints": [
                "Alcohol tolerance",
                "Scary",
                "Responsible",
                "Chill",
                "Privileged"
            ],
            "Online": true
        },
        {
            "Name": "Twenty One",
            "Description": "Play a round of 21, whoever says 21 drinks three times",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Sevens",
            "Description": "Play a round of sevens, whoever fails first drinks three times",
            "Category": 1,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Secrets",
            "Description": "Everyone tell a secret or drink",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Paranoia",
            "Description": "Take turns whispering a question about the players in the game to the person on your left",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Paranoia",
            "Description": "Take turns whispering a question about the players in the game to the person on your left",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Never Have I Ever",
            "Description": "Play a round of never have I ever, each player must say something, or drink to skip",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Been to disneyland",
                "Gone skinny dipping",
                "Worked in retail",
                "Been arrested",
                "Had an STI",
                "Had a pet fish"
            ],
            "Online": true
        },
        {
            "Name": "Have I ever",
            "Description": "Play a round of have I ever, each player must say something or drink to skip",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Been to Spain",
                "Had a one night stand",
                "Been to Lidl this week"
            ],
            "Online": true
        },
        {
            "Name": "Favourites",
            "Description": "What's my favourite ____, everyone guesses, drink twice if you're wrong",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Food",
                "Country",
                "Game",
                "Tweet",
                "Book",
                "Song by Taylor Swift",
                "Pringles flavour",
                "Meme",
                "Historical figure"
            ],
            "Online": true
        },
        {
            "Name": "Assumptions",
            "Description": "Pick any player and assume something about them, then each player takes a turn as well",
            "Category": 1,
            "Level": 1,
            "Hints": [
                "Ot straight A's",
                "You watch hentai",
                "You can drive"
            ],
            "Online": true
        },
        {
            "Name": "Popularity Contest",
            "Description": "Everyone read out your last notification then drink",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Bad texter",
            "Description": "Everyone drink for every unread text you have",
            "Category": 1,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Sneak Peek",
            "Description": "Everyone show the most recent photo in your camera roll then drink",
            "Category": 1,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Gamemaker",
            "Description": "Make up a rule for the rest of the game",
            "Category": 2,
            "Level": 0,
            "Hints": [
                "Only drink with your left",
                "No swearing",
                "Don't say the word drink",
                "All drinks are doubled"
            ],
            "Online": true
        },
        {
            "Name": "Gamemaker",
            "Description": "Make up a rule for the rest of the game",
            "Category": 2,
            "Level": 0,
            "Hints": [
                "Draw two cards each turn",
                "No physical contact",
                "Only call players by their last name"
            ],
            "Online": true
        },
        {
            "Name": "Blank Card",
            "Description": "Imitate any other card in the game or make up your own card",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Double Up",
            "Description": "All of your drinks are doubled for the next five rounds",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Triple Up",
            "Description": "All of your drinks are tripled for the next three rounds",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Godzilla",
            "Description": "Every drink you give out for the next three rounds is reduced by one",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Square Go",
            "Description": "All of your drinks are squared for the next round",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Seeing Double",
            "Description": "Draw two more cards from the same pile, all drinks on these cards are doubled",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Draw three",
            "Description": "Draw three more cards from the same pile, all drinks on these cards are tripled",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Replay",
            "Description": "Replay the last drawn card",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Communism",
            "Description": "Everyone drinks for every drink given for the next round",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "One Upped",
            "Description": "Have twice the drinks the player before you had",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Mine all mine",
            "Description": "The next two sets of drinks go to you instead",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Stan card",
            "Description": "Copy someone else's drinks for the rest of the game",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Alan, Alan, Alan, Alan",
            "Description": "Drink anytime anyone says your name for the next two rounds",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Name 5 songs",
            "Description": "For the rest of the game, any time a song comes on, name the artist or drink",
            "Category": 2,
            "Level": 0,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Cheers!",
            "Description": "Everyone drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "I choose you!",
            "Description": "Choose someone to drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Double Spill",
            "Description": "Choose two people to drink twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Friendly Fire",
            "Description": "Take one drink",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Friendly Fire",
            "Description": "Take two drinks",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Friendly Fire",
            "Description": "Take five drinks",
            "Category": 3,
            "Level": 3,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Misandry",
            "Description": "Men drink twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Misogyny",
            "Description": "Women drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Misanthropy",
            "Description": "Non binary people drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Wanted",
            "Description": "The third player on your left drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Wanted",
            "Description": "The fourth player on your right drinks three times",
            "Category": 3,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Long Distance",
            "Description": "The player opposite of you drinks once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Head Count",
            "Description": "Drink for every player in the game",
            "Category": 3,
            "Level": 3,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Tall Glass",
            "Description": "Tallest player drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Baby Guinness",
            "Description": "Shortest player drinks once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Pension Fund",
            "Description": "Oldest player drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Baby Shower",
            "Description": "Youngest player drinks once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Collector",
            "Description": "Everyone drinks for every ____ you own",
            "Category": 3,
            "Level": 2,
            "Hints": [
                "Plush",
                "Instrument",
                "Console",
                "Bag",
                "Hat",
                "Lego set",
                "Sports kit",
                "Poster",
                "Pet",
                "Vinyl",
                "Plant"
            ],
            "Online": true
        },
        {
            "Name": "EA Sports",
            "Description": "Everyone drinks for every ____ in the game",
            "Category": 3,
            "Level": 2,
            "Hints": [
                "Turn you've had",
                "Player",
                "Brunette",
                "Drink you've finished",
                "Different drink you've had"
            ],
            "Online": true
        },
        {
            "Name": "Drinks for the table",
            "Description": "Everyone drinks for every ____ on the table",
            "Category": 3,
            "Level": 2,
            "Hints": [
                "Glass",
                "Coaster",
                "Pile of cards",
                "Empty Drink",
                "Hand",
                "Snack",
                "Scratch",
                "Spillage"
            ],
            "Online": false
        },
        {
            "Name": "Weekly roundup",
            "Description": "Everyone drinks for every ____ this week",
            "Category": 3,
            "Level": 2,
            "Hints": [
                "Film seen",
                "Games played",
                "Day you've worked",
                "Time you cried",
                "Night out",
                "Number 2"
            ],
            "Online": true
        },
        {
            "Name": "Game Night",
            "Description": "Everyone drinks for every ____ tonight",
            "Category": 3,
            "Level": 2,
            "Hints": [
                "Drink you've had",
                "Text sent",
                "Bathroom break",
                "Picture taken",
                "Minute you were late",
                "Place visited"
            ],
            "Online": true
        },
        {
            "Name": "Sozzled Wrapped",
            "Description": "Everyone drinks for every ____ this year",
            "Category": 3,
            "Level": 3,
            "Hints": [
                "Hookup",
                "Breakup",
                "Trip Abroad",
                "Time you've dyed your hair",
                "Book you've read",
                "Event attended"
            ],
            "Online": true
        },
        {
            "Name": "Ginger beer",
            "Description": "Gingers drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Hi Barbie!",
            "Description": "Blondes drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "The brown note",
            "Description": "Brunettes drink",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Ramona Flowers",
            "Description": "Anyone with dyed hair drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "I moustache you to drink",
            "Description": "Anyone with facial hair drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Lovebirds",
            "Description": "Any players that are touching drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Catchup",
            "Description": "Anyone sober drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Waterfall",
            "Description": "Everyone starts drinking, You cannot stop until the player before you stops",
            "Category": 3,
            "Level": 3,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Gym Rat",
            "Description": "Flex then drink",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Can you play wonderwall",
            "Description": "Anyone who can play an instrument drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Highest Five",
            "Description": "Player with the biggest hands drinks once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Lebron James",
            "Description": "Anyone who plays a sport drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Fresh Trim",
            "Description": "Player with the best hair drinks, you decide",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Drinking Buddies",
            "Description": "Pick someone, you both drink twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Br\u00c3\u00bcderschaft",
            "Description": "Pick someone, then drink with your arms intertwined",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Diplomatic Immunity",
            "Description": "Everyone else drinks once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Antisocial Media",
            "Description": "Anyone on their phone drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "The bald card",
            "Description": "Player with the shortest hair drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Chewbacca",
            "Description": "Player with the longest hair drinks twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "It's a match!",
            "Description": "Any players with the same drink, drink twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "F!*?'@",
            "Description": "Insult someone, then drink out of shame",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Sweet Talk",
            "Description": "Pick any player, compliment them, then both drink",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Mr Lonely",
            "Description": "Single players drink twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Drunk in love",
            "Description": "Players in a relationship dirnk three times",
            "Category": 3,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Swapping spit",
            "Description": "Couples playing must take a drink from each others drink",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Dr Ink",
            "Description": "Everyone drinks for every tattoo they have",
            "Category": 3,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Holy Spirit",
            "Description": "Everyone drinks for every piercing they have",
            "Category": 3,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Nuclear",
            "Description": "Everyone down their drink",
            "Category": 3,
            "Level": 3,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Dyxlesic",
            "Description": "Dnirk fi yuo cna raed tish",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "On a downer",
            "Description": "Down your drink",
            "Category": 3,
            "Level": 3,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Dicktator",
            "Description": "Choose someone to down their drink",
            "Category": 3,
            "Level": 3,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Cheers Beers",
            "Description": "Beer drinkers drink twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Pretentious",
            "Description": "Wine drinkers drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Spirit of vengeance",
            "Description": "Spirit drinkers drink twice",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Strip sozzle",
            "Description": "Take off a piece of clothing or drink once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Newbie",
            "Description": "Drink once if this is your first time playing",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Experienced",
            "Description": "Drink twice if you've played before",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Out of Office",
            "Description": "Drink for every co-worker playing",
            "Category": 3,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Sober sips",
            "Description": "Everyone except the drunkest player drinks once",
            "Category": 3,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Fun Fact",
            "Description": "Say a fun fact or drink twice",
            "Category": 4,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "The Oscar goes to...",
            "Description": "Act out a scene from a recent favourite book, movie, or TV show",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Few Words",
            "Description": "Describe a film, book, or show in as few words as possible",
            "Category": 4,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Charades",
            "Description": "Act out a movie, no speaking!",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Charades",
            "Description": "Act out a TV show, no speaking!",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Charades",
            "Description": "Act out a song or artist, no speaking!",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Charades",
            "Description": "Act out a book, no speaking!",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Question Master",
            "Description": "Ask a trivia question",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Break A Leg",
            "Description": "Act out a character from a recently seen film or show",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": false
        },
        {
            "Name": "Fake It Til' You Make It",
            "Description": "Do a celebrity impression",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Newlyweds",
            "Description": "Closest wins, how many times have I ____, Everyone else drinks once",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "Broken a bone",
                "Been abroad",
                "Been in relationships"
            ],
            "Online": true
        },
        {
            "Name": "Karaslowke",
            "Description": "Read lyrics of a song line by line",
            "Category": 4,
            "Level": 1,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Guess Who",
            "Description": "Think of a celebrity, players take turns asking yes or no questions to guess who it is",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "Guess Who",
            "Description": "Think of a character, players take turns asking yes or no questions to guess who it is",
            "Category": 4,
            "Level": 2,
            "Hints": [],
            "Online": true
        },
        {
            "Name": "I drink and I know things",
            "Description": "Say a fact you know of, if anyone else knows it, you drink, if not the other players do",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "I know the capital of Ecuador",
                "I know Obamas middle name",
                "I know how many teams are in the Premier League"
            ],
            "Online": true
        },
        {
            "Name": "Auctions!",
            "Description": "Take turns bidding how many 'Members of ____' each player could name in 30s, highest bid then attempts to do it",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "A films cast",
                "A sports team",
                "The UN",
                "The smash bros roster"
            ],
            "Online": true
        },
        {
            "Name": "Auctions!",
            "Description": "Take turns bidding how many '____ by ____' each player could name in 30s, highest bid then attempts to do it",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "Songs by Ke$ha",
                "Films by Spielberg",
                "Books by Dr Seuss",
                "Beers by Heineken"
            ],
            "Online": true
        },
        {
            "Name": "Auctions!",
            "Description": "Take turns bidding how many '____' each player could name in 30s, highest bid then attempts to do it",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "Bird species",
                "Elements",
                "Car Brands",
                "Wrestlers",
                "IKEA products",
                "Card games"
            ],
            "Online": true
        },
        {
            "Name": "Auctions!",
            "Description": "Take turns bidding how many '____' each player could name in 30s, highest bid then attempts to do it",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "Countries",
                "Teams",
                "Farm Animals",
                "Languages",
                "Landmarks",
                "Songs on Guitar Hero"
            ],
            "Online": true
        },
        {
            "Name": "Close Call",
            "Description": "Closest guess wins, ____",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "Population",
                "Birthday",
                "Distance",
                "Release Date",
                "What am I thinking",
                "Player stats",
                "Colour of underwear"
            ],
            "Online": true
        },
        {
            "Name": "Close Call",
            "Description": "Closest guess wins, ____",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "Favourite animal",
                "Record time",
                "Hours since shower",
                "Price of an item",
                "Songs on playlist",
                "Body count",
                "Screen time"
            ],
            "Online": true
        },
        {
            "Name": "History Buff",
            "Description": "Name something important related to todays date or drink twice",
            "Category": 4,
            "Level": 1,
            "Hints": [
                "Earth Day",
                "A song release",
                "9/11",
                "A film release",
                "International Women's Day",
                "Someones birthday"
            ],
            "Online": true
        }
    ]
}

export {jsonData, colorCategoryMap};