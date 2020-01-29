var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function calcAll() {
  // Iteration 1.2
  
  let rowArray = document.querySelectorAll(".product"); //array of rows 
  let total = [];
  
  for(i=0;i < rowArray.length; i++){
    //rowArray[i] is each row
    let quantity = rowArray[i].querySelector('input[type=number]').value; 
    let priceUnit = rowArray[i].querySelector('.pu span').innerHTML;
    let totalSub = quantity * priceUnit;//multiplying the quantity and price of each row
    total.push(totalSub);
    let grandTotal = total.reduce((a,b) => a + b);
    console.log(quantity, priceUnit, totalSub, total);
    rowArray[i].querySelector('td.subtot > span').innerHTML = totalSub;
    document.querySelector("body > h2 > span").innerHTML = grandTotal;
  }

  let deleteButton = document.querySelector("td.rm > button");

  for(let i=0; i < deleteButton.length; i++){
    rowArray[i].onclick = function(e){
      console.log(e.currentTarget.innerHTML);
    }
  }
}
$calc.onclick = calcAll;