function shuffle(array) {
    let currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--;
        [array[currentIndex, array[randomIndex]] = 
        array[currentIndex],
        array[currentIndex],
    ]
    }
    return array;
}

function spin() {
    wheel.play();
    const box = document.getElementById("box")
    const element = document.getElementById("mainbox")
    let selectedItem = "";

    let item1 = shuffle([1890, 2250, 2610])
    let item2 = shuffle([8493, 3483, 2931])
    let item3 = shuffle([1982, 5463, 5522])
    let item4 = shuffle([6764, 1928, 5543])

    let results = shuffle([
        item1[0],
        item2[0],
        item3[0],
        item4[0]
    ])

    if(item1.includes(results[0])) selectedItem = "1"
    if(item2.includes(results[0])) selectedItem = "2"
    if(item3.includes(results[0])) selectedItem = "3"
    if(item4.includes(results[0])) selectedItem = "4"

    box.style.setProperty("transition", "all ease 5s")
    box.style.transform = "rotate(" + results[0] + "deg)"
    element.classList.remove("animate")
    setTimeout(function(){
        element.classList.add("animate")
    }, 5000)

setTimeout(function(){
    
})

setTimeout(function(){
    box.style.setProperty("transition", "initial")
    box.style.transform = "rotate(90deg)"
}, 6000)

}
