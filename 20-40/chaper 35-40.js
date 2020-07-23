// var a = prompt ("your full name","Enter your Name")
// B = a.toUpperCase()

// alert("Hello! " + B)

// var b =  prompt("Enter Your fav mobile phone model")

// var c = b.length
// alert(c)


// var country = ["Pakistani"]
// var name = country.slice()
// var indexof = country.slice()
// name = name[7]
// document.write ("Index of " + name + " = " + (country.indexOf(["n"])))


// var country = ["Pakistani"]
// var name = country.slice()
// name = name[3]
// document.write ("Index of 3" +  " = " + name)

// var str1 = prompt("enter your first name")
// var str2 = prompt("enter your last name")
// var res = str1.concat (" ", str2);
// res = res.toUpperCase()
// alert("Hello! " + res)

// var cityOne = "Hyderabad"
// document.write(cityOne + "<br/>")
// var res = cityOne.replace("Hyder", "Islam")
// document.write(res)

// var message = "“Ali and Sami are best friends. They play cricket and football together.”"
// document.write ("Befroe the paragraph was " + message + "<br/>")
// var messageTwo = message.split("and").join("&")
// document.write ("After the paragraph Is " + messageTwo)

// var a = prompt("enter any number")
// var b = prompt ("enter any number")
// var c = parseInt(a)
// var d = parseInt(b)
// var sum = c + d
// document.write (sum)

// var a = prompt("enter any word")
// document.write("user input was:  " + a  + "<hr/>")
// a = a.toUpperCase()
// document.write("Now it is:   " + a)

// var a = prompt("kuch bhi likh do")
// var b = a.slice(0, 1)
// b = b.toUpperCase()
// var c = a.slice(1, a.length)
// var d = b + c
// document.write (d)

// var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
// var x ,y
// x=prompt("Enter finding item")
// for (let i=0;i<A.length;i++){
//      y= A[i];
//     if (y.toLowerCase() === x.toLowerCase() ){
//          document.write(x + ' is availble in index '+i+' in our bakery')
//     }
//     else{
//         document.write(x + " is not Available in Our bakery")
//     }
// }

// var num = 39.56
// document.write("number before converting into string = " + num + "</br>")
// var str = num.toString()
// var res = str.replace(".", "")
// document.write("number after converting into string = " + res)

// var username,y
// username= prompt("enter username")
// for (let i in username){
//     if (username[i]===String.fromCharCode(64) | username [i] === String.fromCharCode(33) | username[i] === String.fromCharCode(46) | username[i] === String.fromCharCode){
//         console.log('not use !,.@ this charcetrs')
//     }
// }
// console.log(username)
//   username[i]
//   document.write(y +'\n')


//     document.write(username[i] +'\n')

//     document.write(i+'<br>')

// // var A,x
// A=['cake', 'apple pie', 'cookie', 'chips', 'patties']
// x='apple pie'
// for (let i in A){
//     if ( x===A[i]){
//         console.log('item is awailible')
//     }
//     else{
//         continue
//     }
// }

// var x,y
// x='0fahad';
// y=x.split('')
// if (y[0]>=0){
//     console.log('pass ')
// }
// else if (x.length<=6){
//     console.log('lenth  not correct')
// }

// console.log(y)

// var x='University,of,Karachi'
// x=x.split(',');
// console.log(x)

// var x,y
// x='pakistan';
// y=x.length
// console.log(x[y-1])

// var x,y
// y=0
// x='The quick brown fox jumps over the lazy dog'
// x=x.split(' ')
// for (let i in x){
//     if (x[i].toLowerCase()==='the'){
//         y=y+1
//     }
// }
// console.log('occurence of "the" :'+y)

// var x, y, z, a
// x = prompt('Enter num')

// x = Number(x)
// if (x <= 0) {
//     console.log(x)
//     y = Math.round(x)
//     console.log(y)
//     z = Math.floor(x)
//     console.log(z)
//     a = Math.ceil(x)
//     console.log(a)
// }
// else{
//     console.log('num is neg')
// }


// var x, n

// n = 0
// while (n < 10) {
//     x = Math.random()*2
//     x=Math.ceil(x)
//     if (x===1){
//         console.log('head')
//     }
//     else{
//         console.log('tail')
//     }
    
//     n+=1
// }

// var a,b


// n = 0
// while (n < 10) {
//     a= Math.random()*10
//     a = Math.floor(a)
//     if 
    
//     n=n+1
// }

// var newdate = new Date()
// document.write(newdate)


// var n = today.getMonth();
// var months=[ 'jan','fav','march','apr','may','jun'];
// console.log(months[n])

// var d = new Date();
// var n = d.getUTCDay();
// var days = ['sun', 'mon', 'tue', 'wen', 'sat'];
// if (days[n] === 'sun' | days[n] === 'sat') {
//     console.log('its fun day')

// }
// console.log(days[n])


// var a = new Date()
// var b = a.getTime()
// var c= b/1000/60
// document.write(a + "<br>")
// document.write(b + "<br>")
// document.write(c)


// var a = new Date()
// var b= a.getHours()
// if(b<=11){
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM")
// }

// var a= new Date("april 24, 2020 ")
// var k= new Date()
// var b = k.getTime()
// b = b/1000/60/60/24
// var c = a.getTime(2012)
// c = c/1000/60/60/24
// var d = b - c
// d = Math.round(d)
// document.write(d + " Days have Been Passed Since 1 Ramzan,2020")


// var a= new Date("jan 1, 2015 ")
// var k= new Date()
// var b = k.getTime()
// b = b/1000
// var c = a.getTime(2012)
// c = c/1000
// var d = b - c
// d = Math.round(d)
// document.write("On the referance Date " + k + " " + d + " seconnds has been passed since start of 2015")


// var a,b,c,d,e
// a = prompt("enter name")
// document.write("customer Name: " + a + "<br>")
// var today = new Date()
// var n = today.getMonth();
// var months=[ 'january','febuary','march','april','may','june',"july","august","september","october","november","december"];
// b = months[n]
// document.write("Current Month: " + b + "<br>")
// c = prompt("enter how many units")
// c = Number(c)
// document.write("Unit burn in this month " + c + "<br>")
// d = c*50
// document.write("Per Unit Price Is: Rs50"+ "<br>")
// document.write("Net Ammount within due date: " + d+"<br>")
// e = 350
// document.write("Late Payment surge Charge: " + e+"<br>")
// d = d + e
// document.write("Net Ammount After due date: " + d+"<br>")


// var date = function(){
//     var a = new Date()
//     document.write(a)
// }
// date()

// var a = function(){
//     var b =prompt("enter your first name")
//     var c = prompt("enter your last name")
//     var d = document.write("Hello! " + b + " " + c)
// }
// a()

// var math = function(){
//     var a = prompt("enter any Number")
//     var b = prompt("enter any number")
//     a = Number(a)
//     b = Number(b)
//     var c = a + b
//     document.write(c)
// }
// math()

// function sum(){
//     var a = prompt("enter number")
//     var b = prompt("Enter +, - , * , / ")
//     var c = prompt("enter number")
//     a = Number(a)
//     c = Number(c)
//     var d
//     if (b === "+"){
//         d = a + c
//     }
//     else if (b === "*"){
//         d = a * c
// }
//     else if (b === "/"){
//     d = a / c
// }
//     else if (b === "-"){
//     d = a - c
// }
//     document.write(d)
// }
// sum()

// var square = function(){
//     a = prompt("enter number you want to square")
//     a = Number(a)
//     a = a*a
//     document.write(a)
// }
// square()


// var x,y;
// x=prompt('enter')
// y=prompt('enter')


// for (let i=x;i<=y;i++){
//     console.log(i)
    
// }