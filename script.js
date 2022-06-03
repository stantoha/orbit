let planets=document.querySelectorAll('.planet'),
planetsDiameter=[280,1,2.4,2.6,1.4,28,23.6,10.2,99.8];


planets.forEach((item,i)=>{
    item.style.width=planetsDiameter[i]+'px';
    item.style.height=planetsDiameter[i]+'px';

});

console.log(planets);
