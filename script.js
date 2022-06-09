let planets=document.querySelectorAll('.planet img'),
planetsDiameter=[280,1 ,2.4,2.6,1.4,28,47.2,20.4,9.8];


planets.forEach((item,i)=>{
    item.style.width=planetsDiameter[i]+'px';
    item.style.height=planetsDiameter[i]+'px';
    item.parentElement.style.width=planetsDiameter[i]-15+'px';
    item.parentElement.style.height=planetsDiameter[i]-15+'px';
    item.parentElement.classList.toggle('planet__shadow');
    if(i%2!==true){
        
        item.classList.toggle('replace__left');
    }
    else{
        item.classList.toggle('replace__right');
    }
    
});
console.log(planets);
