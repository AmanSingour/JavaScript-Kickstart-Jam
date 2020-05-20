function show(){
    var div = document.getElementById("timer")
    var h1 = document.createElement('h1')
    var date = new Date()
    h1.innerHTML = date
    div.appendChild(h1)
}