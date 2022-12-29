const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const softReset = document.getElementById('soft-reset');
const hardReset = document.getElementById('hard-reset');
let currentValue = document.getElementById('current-value');

plus.addEventListener("click", ()=>{
  currentValue.innerHTML++;
  print();
});

minus.addEventListener("click", ()=>{
  currentValue.innerHTML--;
  print();
});

function print(){
  console.log(currentValue.innerHTML);
}