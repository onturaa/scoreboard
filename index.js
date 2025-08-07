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
