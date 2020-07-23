// task 1


var mainContent = document.getElementById('main-content');
console.log(mainContent.childNodes)



var p = document.getElementsByClassName('render')
for (let i=0;i<5;i++) {
    var body=document.getElementById('main')
    var newPara= document.createElement('p')
    var text = document.createTextNode(p[i].innerHTML)
    newPara.appendChild(text)
    body.appendChild(newPara)
}




var filName=document.getElementById('first-name')
filName.value='Fahad'
var LastNm=document.getElementById('last-name')
LastNm.value='Shah'
var email=document.getElementById('email')
email.value='shahf2288'


// task 1
var typ = document.getElementById('form-content').nodeType
console.log(typ)
var filName=document.getElementById('first-name').nodeType
var LastNm=document.getElementById('last-name').nodeType
console.log(filName)
console.log(LastNm)
var LastNm=document.getElementById('last-name')
LastNm.innerHTML='Last Name'
console.log(LastNm)