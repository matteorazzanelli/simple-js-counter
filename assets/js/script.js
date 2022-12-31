// Create HTML
const counterContainer = document.getElementById('counter-container');

// Create sections
const counterHeader = document.createElement('div');
const counterAction = document.createElement('div');
const counterReset = document.createElement('div');
counterHeader.setAttribute('id', 'counter-header');
counterAction.setAttribute('id', 'counter-action');
counterReset.setAttribute('id', 'counter-reset');
counterContainer.append(counterHeader, counterAction, counterReset);

// Create title
const counterTitle = document.createElement('div');
counterTitle.setAttribute('id', 'counter-title');
counterTitle.textContent = 'Counter application';
counterHeader.appendChild(counterTitle);

// Create actions
const counterMinus = document.createElement('div');
const counterValue = document.createElement('div');
const counterPlus = document.createElement('div');
counterMinus.setAttribute('id', 'counter-minus');
counterValue.setAttribute('id', 'current-value');
counterValue.textContent = '0';
counterPlus.setAttribute('id', 'counter-plus');
counterAction.append(counterMinus, counterValue, counterPlus);

const minusNotify = document.createElement('div'); 
const plusNotify = document.createElement('div');
const minusButton = document.createElement('button');
const plusButton = document.createElement('button');
minusNotify.setAttribute('id', 'minus-notifications');
minusNotify.setAttribute('class', 'notifications');
plusNotify.setAttribute('id', 'plus-notifications');
plusNotify.setAttribute('class', 'notifications');
minusButton.setAttribute('id', 'minus');
minusButton.setAttribute('class', 'action-button');
plusButton.setAttribute('id', 'plus');
plusButton.setAttribute('class', 'action-button');
minusNotify.textContent = '0';
minusButton.textContent = '-';
counterMinus.append(minusNotify, minusButton);
plusNotify.textContent = '0';
plusButton.textContent = '+';
counterPlus.append(plusButton, plusNotify);

// Create reset buttons
const softResetButton = document.createElement('button');
softResetButton.setAttribute('id', 'soft-reset');
softResetButton.setAttribute('class', 'reset-button');
softResetButton.textContent = 'Soft reset';
const hardResetButton = document.createElement('button');
hardResetButton.setAttribute('id', 'hard-reset');
hardResetButton.setAttribute('class', 'reset-button');
hardResetButton.textContent = 'Hard reset';
counterReset.append(softResetButton, hardResetButton);

/*
<div id="counter-header">
  <div id="counter-title">Counter application</div>
</div>
<div id="counter-action">
  <div id="counter-minus">
    <div class="notifications" id="minus-notifications">0</div>
    <button class="action-button" id="minus">-</button>
  </div>
  <div id="current-value">0</div>
  <div id="counter-plus">
    <button class="action-button" id="plus">+</button>
    <div class="notifications" id="plus-notifications">0</div>
  </div>
</div>
<div id="counter-reset">
  <button class="reset-button" id="soft-reset">Soft reset</button>
  <button class="reset-button" id="hard-reset">Hard reset</button>
</div>
*/

// Create the behavior
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