
// task 1
function Pow(a, b) {
    return console.log(a ** b)
}
Pow(2, 5)


// task 2
function LeapYear(a) {
    if (a % 4 == 0 & a > 1580) {
        return console.log('Its leap year')
    }
    else {
        console.log('its not leap year')
    }

}
LeapYear(2016)


// task 3
function AreaTri(a, b, c) {
    var s = (a + b + c) / 2
    var area = s * (s - a) * (s - b) * (s - c)
    return console.log('Area of Triangle :' + area)
}
AreaTri(4, 4, 4)

// task 4
var avr, prct
var ttal = 300;
function cal(s1, s2, s3) {
    (function av() {
        avr = (s1 + s2 + s3) / 3
        return avr
    })();
    (function Perc() {
        return prct = ((s1 + s2 + s3) / ttal) * 100
    })();
    return console.log('Percentage :' + prct + '\n' + 'Average  :' + avr)

}
cal(70, 50, 90)


// task 5
function indOf(str, b) {

    var a;
    if (b.length > 1) {
        a = b.split('')
    }
    else {
        a = b;
    }

    for (i in str) {
        if (a[0] == str[i]) {
            console.log('index ' + b + ' is:' + i)
        }
    }
}
indOf('Hello world', 'rld')

// task 6

function deltStr(str) {
    var vowls = 'aeiou'
    for (i in str) {
        for (j in vowls) {
            if (str[i] == vowls[j]) {

                str = str.replace(vowls[j], '')

            }
        }
    }
    console.log(str)
}
deltStr('hello bhai kaha h')

function Pay(payHr) {
    var hr = 40;
    var pay = 400;
    var Extra = 12;
    if (payHr > 40) {
        payHr = (payHr - hr) * 12 + pay
        console.log(payHr)
    }
    else {
        console.log(pay)
    }

}
Pay(44)


function CountNotes(amount) {
    var hund = 0
    var fifty = 0
    var ten = 0
    while (amount > 9) {
        if (amount >= 100) {
            hund += 1
            amount -= 100
        }
        else if (amount >= 50) {
            fifty += 1
            amount -= 50
        }
        else if (amount >= 10) {
            ten += 1
            amount -= 10
        }
    }
    console.log(hund)
    console.log(fifty)
    console.log(ten)
}
CountNotes(487)

