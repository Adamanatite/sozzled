var screen = 0;

function clearBackground() {
    while(document.getElementsByClassName("background-animation-element")[0]) {
        document.getElementsByClassName("background-animation-element")[0].remove();  
    }
}


function homepageTest() {
    document.body.style.backgroundColor = "var(--clr-primary-main)";
    clearBackground();
    screen = 0;
}

function rulesTest() {
    document.body.style.backgroundColor = "var(--clr-secondary-main)";
    clearBackground();
    screen = 1;
    rulesBG();
}

function settingsTest() {
    document.body.style.backgroundColor = "var(--clr-third-main)";
    clearBackground();
    screen = 2;
}

function storeTest() {
    document.body.style.backgroundColor = "var(--clr-fourth-main)";
    clearBackground();
    screen = 3;
}

function toggleMainCard() {
    var mainCard = document.getElementsByClassName("homepage-content")[0];
    if (mainCard.style.display === "none") {
        mainCard.style.display = "block";
    }
    else {
        mainCard.style.display = "none";
    }
}


function rulesBG() {
    var backgroundDiv = document.getElementsByClassName("tester-buttons")[0];


    var circlesHTML = `
        <svg class="dark-green-circle background-animation-element" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle stroke="var(--clr-secondary-accent)" fill="none" cx="50" cy="50" r="25" />
        </svg>
        <svg class="dark-green-circle circle-2 background-animation-element" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle stroke="var(--clr-primary-accent)" fill="none" cx="50" cy="50" r="25" />
        </svg>
        <svg class="dark-green-circle circle-3 background-animation-element" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle stroke="var(--clr-third-accent)" fill="none" cx="50" cy="50" r="25" />
        </svg>
        <svg class="dark-green-circle circle-4 background-animation-element" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle stroke="var(--clr-fourth-accent)" fill="none" cx="50" cy="50" r="25" />
        </svg>
        <svg class="dark-green-circle circle-5 background-animation-element" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle stroke="var(--clr-neutral-main)" fill="none" cx="50" cy="50" r="25" />
        </svg>`

    while(document.getElementsByClassName("background-animation-element")[0]) {
        document.getElementsByClassName("background-animation-element")[0].remove();  
    }

    console.log(document.getElementsByClassName("rules-circle").length)

    backgroundDiv.insertAdjacentHTML("afterend", circlesHTML);

    // rulesBGLoop(backgroundDiv, 0)

}

function rulesBGLoop(div, x) {

    var darkCircle = `
        <div class="dark-green-circle rules-circle"></div>
        `

    var lightCircle = `
        <div class="light-green-circle rules-circle"></div>
        `

    setTimeout(function () {
        if (x % 2 === 0) {
            div.insertAdjacentHTML("beforebegin", darkCircle);
        } else {
            div.insertAdjacentHTML("beforebegin", lightCircle);
        }
        if(x > 10) {
            document.getElementsByClassName("rules-circle")[0].remove();
            console.log(document.getElementsByClassName("rules-circle").length);
        }
        else {
            rulesBGLoop(div, x+1);
        }

    }, 2000)



}