let count=0;
if(localStorage.getItem("count")){
  count=parseInt(localStorage.getItem("count"));
  updateUI();
}
function increment(){
    if (count<20){
    count++;
}
else{
    alert("Limit is set for range of 20");
}
    document.getElementById("count").textContent=count;
    document.getElementById("count").style.color = "#d1107aff";
    updateUI();
}
function decrement(){
    if (count>0){
    count--;
    }
    else{
        alert("Negative decrement not possible");
    }
    document.getElementById("count").textContent=count;
    document.getElementById("count").style.color = "#7348b0ff";
    updateUI();
}
function reset(){
   count=0;
   document.getElementById("count").textContent=count;
    document.getElementById("count").style.color = "#000000ff";
    updateUI();
}
function updateUI(){
document.getElementById("count").textContent=count;
if(count>5 && count<=10){
    document.body.style.background="#fffc4fff";
}
else if(count>10 && count<15){
    document.body.style.background="#5de19aff"
}
else{
    document.body.style.background="#5ee1f2";
}
}
function localstorage(){
    localStorage.setItem("count",count);
}
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
    increment();}
     else if (event.code === "ArrowDown") {
    decrement();}
    else if (event.code === "Space") {
    reset();
  }
});

