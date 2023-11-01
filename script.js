var defaultNumber = 0
var counter = document.getElementById("counter-ans")
var increment = document.getElementById("increment")
var savedCount = document.getElementById("save")

function counted() {
    defaultNumber+=1
    counter.innerHTML = defaultNumber
}
increment.addEventListener("click", counted)

function saved(){
    var strong = document.createElement("strong")
    document.getElementsByClassName("previous")[0].appendChild(strong)
    strong.textContent = defaultNumber + " - "
    defaultNumber = 0
    counter.innerHTML = 0
}

savedCount.addEventListener("click", saved)