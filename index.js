let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let actualHomeScore = 0
let actualGuestScore = 0

function plusOneHome() {
    actualHomeScore += 1
    homeScore.textContent = actualHomeScore
}

function plusTwoHome() {
    actualHomeScore += 2
    homeScore.textContent = actualHomeScore
}

function plusThreeHome() {
    actualHomeScore += 3
    homeScore.textContent = actualHomeScore
}

function plusOneGuest() {
    actualGuestScore += 1
    guestScore.textContent = actualGuestScore
}

function plusTwoGuest() {
    actualGuestScore += 2
    guestScore.textContent = actualGuestScore
}

function plusThreeGuest() {
    actualGuestScore += 3
    guestScore.textContent = actualGuestScore
}

function resetButton() {
    actualHomeScore = 0
    actualGuestScore = 0
    homeScore.textContent = actualHomeScore
    guestScore.textContent = actualGuestScore
}