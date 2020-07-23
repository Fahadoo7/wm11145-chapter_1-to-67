
/*task 1*/
var chr=prompt('Enter :')
if (chr.charCodeAt(0)>=64 && chr.charCodeAt(0)<=90){
    console.log('its a uppercase character :' +chr)
}
else if (chr.charCodeAt(0)>=97 && chr.charCodeAt(0)<=122){
    console.log('its a lowercase character :' +chr)
}
else if (chr>=0 || chr<=0){
    console.log('its an integer character :' +chr)
}

/*task 2*/

var num1=parseInt(prompt('ENter'));
var num2=parseInt(prompt('ENter'));
if (num1>num2){
    console.log(num1);
}
else{
    console.log(num2);
}

/*task 3*/

num2=parseInt(prompt('ENter :'));
if (num2>=0){
    console.log('number positive or zero :')
}
else {
    console.log('number is negative :')
}

/*task 4*/
var st =prompt('Enter :')
if (st==='a'|| st==='e'|| st==='i'|| st==='o'||
 st==='u' || st==='A'|| st==='E'|| st==='I'|| 
 st==='O'|| st==='U'){
    console.log(st+' is vowel :')
}
else{
    console.log(st+' is not vowel')
}

/*task 5*/
var psw=prompt('Enter Yur Password :')
if (psw==12345){
    console.log('Your Password is correct thankyou for login')
}
else{
    console.log('Password is incorrect \nplease enter right password')
}

