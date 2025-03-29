const rock=document.getElementById("rock");
const pap=document.getElementById("pap");
const scis=document.getElementById("scissor");
const res=document.getElementById("res");
const fin=document.getElementById("fin");
let player=0;
rock.onclick=function(){
  player=1;
  game();
}
pap.onclick=function(){
  player=2;
  game();
}
scis.onclick=function(){
  player=3;
  game();
}
let pl=0;
let op=0;
function game(){
let comp=(Math.floor(Math.random()*3))+1;
//game


let flag=-1;
if(player==comp){
  flag=2;
}
else if(player==1 && comp==3){
  pl++;
  flag=1;
}
else if(player==1 && comp==2){
  op++;
  flag=0;
}
else if(player==2 && comp==3){
  op++;
  flag=0;
}
else if(player==2 && comp==1){
  pl++;
  flag=1;
}
else if(player==3 && comp==1){
  op++;
  flag=0;
}
else if(player==3  && comp==2){
  pl++;
  flag=1;
}
else {
  //do nothing
}
if(flag==1){
  res.textContent="You Won!";
}
else if(flag==0){
  res.textContent="You Lose";
}
else if(flag==2){
  res.textContent="Its a tie";
}
else{
  console.log('error');
  console.log(player);
  console.log(comp);
}
fin.textContent=`Your score:  ${pl}  Computer score:  ${op}`;
}
