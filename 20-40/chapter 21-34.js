// var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
// var x ,y
// x=prompt("Enter finding item")
// for (let i=0;i<A.length;i++){
//      y= A[i];
//     if (y.toLowerCase() ===x.toLowerCase() ){
//          document.write('cokie is availble in index '+i+' inour bakery')
//     }
//     else{
//         document.write('not found')
//     }
// }


// //task 2
// var x=prompt("enter your favorite mobile modle :");
// document.write('length of string :'+x.length)

// //task 3

// var x='pakistani';
// for (let i=0;i<x.length;i++){
//     if (x[i]==='n'){
//         document.write('index of '+x[i]+' :'+i)
//     }
// }


// ////task 4
// var x='Hello World';
// var y=x.length
// for (let i=y;i>=0;i--){
//     if (x[i]==='l'){
//         document.write('index of '+x[i]+' :'+i)
//         break
//     }

// }

// //task 5
// var x='pakistani';
// document.write('character at index 3 :'+x[2])


// ////task 7
// var city,afcity
// city ='Hydrabad';
// afcity =city.replace('Hydr','Islam')
// document.write(afcity)


// ////task 8
// var x,y,z
// x = 'Ali and Sami are best friends. They play cricket and football together'
// y = x.replace('and','&')
// document.write(y)
// for (let i in x){
//     document.write(i)
// }

// var username,y
// username= prompt("enter username")
// for (let i in username){
//     if (username[i]===String.fromCharCode(64) | username [i] === String.fromCharCode(33) | username[i] === String.fromCharCode(46) | username[i] === String.fromCharCode){
//         document.write('not use !,.@ this charcetrs')
//     }
// }
// document.write(username)
//   username[i]
//   document.write(y +'\n')


//     document.write(username[i] +'\n')

//     document.write(i+'<br>')

// // var A,x
// A=['cake', 'apple pie', 'cookie', 'chips', 'patties']
// x='apple pie'
// for (let i in A){
//     if ( x===A[i]){
//         document.write('item is awailible')
//     }
//     else{
//         continue
//     }
// }

// var x,y
// x='0fahad';
// y=x.split('')
// if (y[0]>=0){
//     document.write('pass ')
// }
// else if (x.length<=6){
//     document.write('lenth  not correct')
// }

// document.write(y)

// var x='University,of,Karachi'
// x=x.split(',');
// document.write(x)

// var x,y
// x='pakistan';
// y=x.length
// document.write(x[y-1])

// var x,y
// y=0
// x='The quick brown fox jumps over the lazy dog'
// x=x.split(' ')
// for (let i in x){
//     if (x[i].toLowerCase()==='the'){
//         y=y+1
//     }
// }
// document.write('occurence of "the" :'+y)

// var x, y, z, a
// x = prompt('Enter num')

// x = Number(x)
// if (x <= 0) {
//     document.write(x)
//     y = Math.round(x)
//     document.write(y)
//     z = Math.floor(x)
//     document.write(z)
//     a = Math.ceil(x)
//     document.write(a)
// }
// else{
//     document.write('num is neg')
// }


// var x, n

// n = 0
// while (n < 10) {
//     x = Math.random()*2
//     x=Math.ceil(x)
//     if (x===1){
//         document.write('head')
//     }
//     else{
//         document.write('tail')
//     }

//     n+=1
// }

// var a,b


// n = 0
// while (n < 10) {
//     a= Math.random()*10
//     a = Math.floor(a)


//     n=n+1
// }

// var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
// var x = prompt('enter');
// for (let i in A){
//     if (i in A ===x){
//         console.log('bch gae')
//     }
// }

// var today = new Date();
// // console.log(today)

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

// var d = new Date();
// var n = d.getDate();
// if (n<16){
//     console.log('First fifteen days of the month')
// }
// else if (n>=16){
//     console.log('Last days of the month')
// }

// var a = new Date()
// var b = a.getTime()
// var c = b/100/60
// console.log(a)
// console.log(b)
// console.log(c)

// var d = new Date();
// var n = d.getUTCHours();
// if (n<=11){
//     console.log('AM')
// }
// else{
//     console.log('its '+'PM')
// }
// console.log(n)

// var d = new Date(2020, 11, 29, 0, 0, 0)

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


// var todydate = function(){
//     var today = new Date();
//     return console.log(today)
// }
// todydate()


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

// var square = function(a){
   
//     a = Number(a)
//     a = a*a
//     return console.log(a)
// }
// square(2)

// var x,y;
// x=prompt('enter')
// y=prompt('enter')


// for (let i=x;i<=y;i++){
//     console.log(i)
    
// }


// b=3
// p=3
function calHyp(base2,per2){
   var h=base2+per2
   var square = function(){
   
        var a = Number(base2)
        b
        a = a*a
        return console.log(a)
    }
    square(2)
   

}
calHyp(2,4)



