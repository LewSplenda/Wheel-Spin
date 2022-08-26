const wheelBtn = document.getElementById("btn")
const wheelCircle = document.getElementById("box")
const winnerBox = document.getElementById("winner")
const loserBox = document.getElementById("loser")
const loserBox2 = document.getElementById("loser2")
const loserBox3 = document.getElementById("loser3")
const subBtn = document.getElementById("submit")
const win1 = document.getElementById("blk1")
const lsr = document.getElementById("blk2")
const lsr2 = document.getElementById("blk3")
const lsr3 = document.getElementById("blk4")

wheelBtn.addEventListener("click", () => {
  let x = 1024
  let b = 9999
  let dgre = Math.floor(Math.random()*(x-b))+b
  wheelCircle.style.transform="rotate("+dgre+"deg)"
})

subBtn.addEventListener("click", () => {
    winnerBox.innerHTML = `<h2> ${win1.value} </h2>`
    loserBox.innerHTML = `<h2> ${lsr.value} </h2>`
    loserBox2.innerHTML = `<h2> ${lsr2.value} </h2>`
    loserBox3.innerHTML = `<h2> ${lsr3.value} </h2>`

    win1.value = ""
    lsr.value = ""
    lsr2.value = ""
    lsr3.value = ""
})
