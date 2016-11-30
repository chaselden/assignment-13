document.querySelector("#inject-html button").addEventListener('click', function() {
    // TASK #1
    var answerBoxEl = document.querySelector('#inject-html .answer-box')
    answerBoxEl.innerHTML = "<h2>  Wired up? Wired up?</h2>"
})


document.querySelector("#double button").addEventListener('click', function() {

    var answerPTagWithValue = document.querySelector("#compoundInvestment").innerHTML

    var multNum = parseInt(document.querySelector("#compoundInvestment").innerHTML)

    document.querySelector("#compoundInvestment").innerHTML = multNum * 2

})


document.querySelector("#color-circle button").addEventListener('click', function() {
    // task 3
    var colorChanger = document.querySelector(".exercise-container #circle-bw")
    if (colorChanger.style.background == "black") {
        colorChanger.style.background = "white";

    } else {
        (colorChanger.style.background = "black");
    }

})

 
document.querySelector("#blow-up button").addEventListener('click', function() {
    // TASK #4

    var redDotEl = document.querySelector(".circle-red")
    var redDotElStyles = window.getComputedStyle(redDotEl)
    var widthString = redDotElStyles.width.slice(0, -2)
    var heightString = redDotElStyles.height.slice(0, -2)
    var wNum = parseInt(widthString)
    var hNum = parseInt(heightString)

    if (wNum <= 320 && hNum <= 320) {
        document.querySelector('.circle-red').style.width = wNum * 2 + 'px'
        document.querySelector('.circle-red').style.height = wNum * 2 + 'px'
    } else {
        document.querySelector('.circle-red').style.width = '40px'
        document.querySelector('.circle-red').style.height = '40px'
    }

})


var usrList = document.querySelector("#user-list")
document.querySelector("#remove button").addEventListener('click', function() {
    // TASK #5
    var listItemElementsAll = document.querySelectorAll('#user-list li')
    for (var i = 0; i < listItemElementsAll.length; i += 1) {
        var listItems_LI = listItemElementsAll[i]
        if (listItems_LI.classList.contains('active') !== true) {
            usrList.removeChild(listItems_LI)
        }
    }
})


document.querySelector("#reverse-squares button").addEventListener('click', function() {
    // TASK #6
    var squareListParent = document.querySelector('#reverse-squares .answer-box')
    var squareList = document.querySelectorAll('#reverse-squares .answer-box span')
    for (var i = squareList.length - 1; i >= 0; i--) {
        squareListParent.removeChild(squareList[i])
        squareListParent.appendChild(squareList[i])
    }
})

document.querySelector("#pig-latin button").addEventListener('click', function() {
    // TASK #7
    var taskList = document.getElementById("tasks")
    var i = taskList.childNodes.length;
    while (i--)
        taskList.appendChild(taskList.childNodes[i]);
})

document.querySelector("#cycle-image button").addEventListener('click', function() {
    // TASK #8
    console.log("heyheyhey")
})
