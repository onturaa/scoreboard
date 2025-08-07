let home = 0
let guest = 0

window.increment = function increment(team, points) {
    let homeEl = document.getElementById("home-el")
    let guestEl = document.getElementById("guest-el")

    if (team === "home") {
        home += points
        homeEl.textContent = home
    } else if (team === "guest") {
        guest += points
        guestEl.textContent = guest
    }
}

window.reset = function reset() {
    let homeEl = document.getElementById("home-el")
    let guestEl = document.getElementById("guest-el")

    home = 0
    guest = 0
    homeEl.textContent = home
    guestEl.textContent = guest
}