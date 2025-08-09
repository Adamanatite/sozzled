function homepageTest() {
    document.body.style.backgroundColor = "var(--clr-primary-main)";
}

function rulesTest() {
    document.body.style.backgroundColor = "var(--clr-secondary-main)";
}

function settingsTest() {
    document.body.style.backgroundColor = "var(--clr-third-main)";
}

function storeTest() {
    document.body.style.backgroundColor = "var(--clr-fourth-main)";
}

function toggleMainCard() {
    var mainCard = document.getElementsByClassName("homepage-content")[0]
    if (mainCard.style.display === "block") {
        mainCard.style.display = "none";
    }
    else {
        mainCard.style.display = "block";
    }
}