/*task 01*/
var mul=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (let i=0;i<mul.length;i++){
    document.write(mul[i]+'<br>')
}
/*task 02*/
for (let i=1; i<=10;i++){
    document.write(i+'<br>')
}
/*task 03*/
var nr=prompt('Enter Number :');
var rg=prompt('Enter Range :')
for(let i=1; i<=rg;i++){
    x=nr*i;
    document.write(nr+' x '+i+' = '+x+'<br>')
}
/*task 04*/
var frts=['apple','banana','mango','Orange','strawberry']
for (let i=0; i<frts.length;i++){
    document.write(frts[i]+'<br>')
}
/*task 05*/
for (let i=0; i<frts.length;i++){
    
    document.write('Element at index '+i+' is '+frts[i]+'<br>')
}
/*task 06*/
for(let i=1;i<=15;i++){
    document.write(i+',')
}
document.write('<br>')
for(let i=10;i>=1;i--){
    document.write(i+',')
}
document.write('<br>')
for(let i=1;i<=15;i++){
    if (i%2===0){
        document.write(i+',')
    }
    
}
document.write('<br>')
for(let i=1;i<=15;i++){
    if (i%2!=0){
        document.write(i+',')
    }
    
}
document.write('<br>')
for(let i=1;i<=20;i++){
    if (i%2===0){
        document.write(i+'K,')
    }
    
}