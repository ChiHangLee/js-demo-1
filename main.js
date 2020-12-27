let div1 = document.createElement('div');
div1.className = 'demo'

document.body.appendChild(div1);

var dragging = false

var lastX
var lastY

div1.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.body.onmousemove = function (e) {
    if (dragging === true) {
        console.log(lastX, lastY)
        console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        div1.style.top = div1.style.top + deltaY
        div1.style.left = div1.style.left + deltaX
    }
}

div1.onmouseup = function () {
    dragging = false
}
