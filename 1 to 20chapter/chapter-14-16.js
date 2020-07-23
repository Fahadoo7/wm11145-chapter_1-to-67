/* task 1 */
var nam = Array()


nam.splice(0,6,'<h2>Qualification</h2>','1) SSC','2) HSC','3) BCS','4) BS','5) BCOM','6) MS','7) M.Phil','8) Phd');
for (let i=0; i<nam.length; i++){
    document.write(nam[i]+'<br>')
};

var nm= [ 'fahad', 'ahmed' , 'farhan'];
var nb=['300','350','450'];
var prc
for (let i=0; i<nm.length; i++){
    prc=(nb[i]/500)*100
    document.write('score of '+nm[i]+' is '+nb[i]+' Percentage :'+prc+'<br>')
}

var col=Array();
x=prompt('Which color you want to add in beginning :');
col.unshift(x);
/*document.write(col);*/
y=prompt('which color you want to add to the end')
col.push(y)
document.write(col);