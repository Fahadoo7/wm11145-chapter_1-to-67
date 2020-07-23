
function getOpen(path) {

    var img = document.getElementById('modal-img').setAttribute('src', path)
    var cnt = document.getElementById('modal').style.display = 'block'



}
function onClosedImagModal() {
    var img = document.getElementById('modal-img').removeAttribute("src");
    var cnt = document.getElementById('modal').style.display = 'none'

}





var x = 20
function zoomIn() {

    var y
    x += 10
    y = x.toString() + 'px'
    var val = document.getElementById('para').style.fontSize = y
    
}
function zoomOut() {
    x -= 10
    var y
    y = x.toString() + 'px'
    var val = document.getElementById('para').style.fontSize = y
}

