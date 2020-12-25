let div1 = document.createElement('div');
div1.className = 'demo'

document.body.appendChild(div1);


document.body.onclick = function (e) {
    div1.style.top = e.clientX + 'px'
    div1.style.left = e.clientY + 'px'
}
