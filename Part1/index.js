
let game=[];
function play(clickedID){
 
document.getElementById(clickedID);
let playerSpan=document.getElementById('player');
let clickedElement =document.getElementById(clickedID);

if (playerSpan.innerText==='X'){
    playerSpan.innerText='O';
    clickedElement.innerText='X';
    game[clickedID]='X'
}
else {
    playerSpan.innerText='X';
    clickedElement.innerText='O';
    game[clickedID]='O';
}
console.log(game);
let topLeft=game[0];
let topCenter=game[1];
let topRight=game[2];
let centerLeft=game[3];
let center=game[4];
let centerRight=game[5];
let bottomLeft=game[6];
let bottomCenter=game[7];
let bottomRight=game[8];

if(topRight !== undefined && topRight === topCenter && topRight ===topLeft){
alert('You win');
return
 }
if (centerLeft!== undefined && centerLeft===center && centerLeft ===centerRight){
alert('You win');
    return    
}


let gameDone=true;
for(i=0;i<game.length;i++){
  
    if(game[i]===undefined){
        gameDone=false;
    }
}
if (gameDone===true){
    alert( 'Cats game no winner')
}
   
   
}
