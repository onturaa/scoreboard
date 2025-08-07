let home = 0
let guest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function increment(team, points) {
    if (team === "home") {
        home += points
        homeEl.textContent = home
    } else if (team === "guest") {
        guest += points
        guestEl.textContent = guest
    }
}