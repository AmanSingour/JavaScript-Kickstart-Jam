const classNames = {
    CONTAINER: 'container',
    TIMER : "timer",
    TIMEBLOCK : 'timeBlocks',
}

var pad2 = (num => (num<10 ? "0" : "")+num)

//get Root Element from html file...
var root = document.getElementById("root")
var container = document.getElementById("container")

//create Elements we need to render...
var timer = document.createElement("h1")
var div = document.createElement("div")

//add some class in elements...
timer.className = classNames.TIMER

//simple array
var timerChilds = []

//let me give index for array
for(let i=0; i<4; i++){
    //push some span tag into array
    timerChilds.push(addSpan())
}

// have you any array?? 
//let me map that array i'm giving you items of array
timerChilds.map((item => timer.appendChild(item)))

//Now enter a date of event or end of timer
const endDate = new Date("May 21, 2020 18:30:01").getTime()

//you can not count without me
var getTime = setInterval(() => {
        //hey don't forget to get new time
        var currentDate = new Date().getTime()
    
        //please wait i'm getting remaining time
        let remainTime = endDate-currentDate

        //this is all about math...
        var days = Math.floor(remainTime / (1000 * 60 * 60 * 24))
        var hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((remainTime % (1000 * 60)) / 1000)

        //what if your time get expired
        if(remainTime<=0){
            //I'm clearing the interval...
            clearInterval(getTime)
            
            //Please be user friendly... 
            //tell them that session has been expired
            container.style.backgroundColor = "#ee9e9e"
            timer.style.color = "#2e2e2e"
            timer.innerHTML = "Session Expired"
        }

        //Well i'm a real timer i've days, hours, min and sec
        timerChilds[0].innerHTML = pad2(days)+ "d"
        timerChilds[1].innerHTML = pad2(hours)+ "h"
        timerChilds[2].innerHTML = pad2(minutes)+ "m"
        timerChilds[3].innerHTML = pad2(seconds)+ "s"

    }, 1000);

// don't worry about me i'm very simple method
function addSpan(){
    var span = document.createElement("span")
    span.className = classNames.TIMEBLOCK
    return span
}

//So you reached to me 
//Please don't remove me i've a child i.e. timer
root.appendChild(timer)
