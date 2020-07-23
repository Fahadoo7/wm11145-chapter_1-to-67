// task 1

var vivo = function(){
    alert('Vivo')
}

var Nkia =function (){
        alert('Nokia')
    }

// task 2


function getId(a) {
    var idNm = document.getElementById(a)
    idNm.remove()

}
//task 3

function hid() {
    el = document.getElementById('car1')
    el.src = 'mbl2.jpg'
}
function show() {
    el = document.getElementById('car1')
    el.src = 'mbl1.jpg'
}


//task 4

var msec = 0
var sec = 0
var min = 0
var countsec
var countmin
var interval
function start() {
    function conter() {
        msec++
        var count = document.getElementById('msec')
        count.innerHTML = msec
        if (msec > 100) {
            sec++
            countsec = document.getElementById('sec')
            countsec.innerHTML = sec
            msec = 0
        }
        else if (sec > 10) {
            min++
            countmin = document.getElementById('min')
            countmin.innerHTML = min
            sec = 0

        }
    }
    interval = setInterval(conter, 10)
};
function stop() {
    clearInterval(interval)
}
function reset(){
    msec = 0
    sec = 0
    min = 0
    count = document.getElementById('msec')
    countsec = document.getElementById('sec')
    countmin = document.getElementById('min')
    count.innerHTML = msec
    count.innerHTML = msec
    countsec.innerHTML = sec
    countmin.innerHTML = min
    stop()
}






