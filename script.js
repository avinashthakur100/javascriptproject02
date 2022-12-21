let ufo = document.querySelector("img");
let posTop = parseInt(getComputedStyle(ufo).top.split('px')[0]);
let posLeft = parseInt(getComputedStyle(ufo).left.split('px')[0]);
let speed = 80;
console.log(posTop,posLeft  );
let moveup = ()=>{
    if(posTop>100){
    posTop -= speed;
    ufo.style.top = posTop + "px";
    }
}
let moveleft = ()=>{
    if(posLeft>130){
    posLeft -= speed;
ufo.style.left = posLeft +"px";
    }
}
let moveright = ()=>{ 
    if(posLeft <innerWidth-150){
    posLeft += speed;
ufo.style.left = posLeft +"px"
    }
}
let movedown = ()=>{
    if(posTop < innerHeight - 130) {
    posTop +=speed;
ufo.style.top = posTop +"px";
    }
}
let setSpeed = (e) => {
    console.log(e)
   speedbar = parseInt(e.target.value);
   speed = speedbar;
}
let toggleinput=() => {
    let input = document.querySelector('input.open')
    input.classList.toggle('close');
    let rotate = document.querySelector('i')
    console.log(rotate)
    rotate.classList.toggle('rotate')

}