const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const softReset = document.getElementById('soft-reset');
const hardReset = document.getElementById('hard-reset');
let currentValue = document.getElementById('current-value');
let minusNotifications = document.getElementById('minus-notifications');
let plusNotifications = document.getElementById('plus-notifications');

plus.addEventListener("click", ()=>{
  currentValue.innerHTML++;
  plusNotifications.innerHTML++;
});

minus.addEventListener("click", ()=>{
  currentValue.innerHTML--;
  minusNotifications.innerHTML++;
});

softReset.addEventListener("click", ()=>{
  if(confirm("Reset counter?")){
    currentValue.innerHTML=0;
  }
})

hardReset.addEventListener("click", ()=>{
  if(confirm("Do you want to reset counter and notifications?")){
    currentValue.innerHTML=0;
    plusNotifications.innerHTML=0;
    minusNotifications.innerHTML=0;
  }
})