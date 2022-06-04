let planets=document.querySelectorAll('.planet img'),
planetsDiameter=[280,1,2.4,2.6,1.4,28,23.6,10.2,9.8];


planets.forEach((item,i)=>{
    item.style.width=planetsDiameter[i]+'px';
    item.style.height=planetsDiameter[i]+'px';
    item.parentElement.style.width=planetsDiameter[i]+5+'px';
    item.parentElement.style.height=planetsDiameter[i]+5+'px';
});
console.log(planets);
