var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc'); // this is the location of the "Calculate prices" button

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

/**
 * Steps for iteration 4
 * 1. make a collection of all delete buttons
 * 2. loop through collection and add an onclick event that will call a function removeProduct() 
 *    (or whatever you want to name the fucntion) that will remove the whole row (i.e. the product)
 * 3. Create the function to remove the row (i.e. the product) where delect was clicked 
 */

/**
 * Resources
 * onclick - https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
 * getElementsByClassName() - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName 
 * Intro to events - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events 
 * Event - https://developer.mozilla.org/en-US/docs/Web/API/Event 
 * Event.currentTarget - https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
 * Node.parentElement - https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement 
 * Comparison of Event Targets - https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets  
 * ChildNode.remove() - https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove 
 */

// HTML collection you can only loop using a regualr for loop
// NodeList (you can create a node list using querySelectorAll) you can use array methods such as forEach
// NodeListhttps://developer.mozilla.org/en-US/docs/Web/API/NodeList

let deleteBtnCollection = document.getElementsByClassName('btn btn-delete');    // Step 1: make a collection of all delete buttons
for(let i = 0; i < deleteBtnCollection.length;i++){    // Step 2: loop through collection to add onclick event that will remove the product
  deleteBtnCollection[i].onclick = removeProduct; 
}

function removeProduct(event) { // Step 3: create the function to remove the row (i.e. the product) where delect was clicked
  console.log("what", typeof event.currentTarget)
  console.log("What does event look like: ", event);
  console.log("What is the current target: ", event.currentTarget);
  console.log("What is the parent element of the current target: ", event.currentTarget.parentElement);
  console.log("What is the parent of the parent of the current target: ", event.currentTarget.parentElement.parentElement);
  event.currentTarget.parentElement.parentElement.remove(); 
 } 

 function addDeleteListener(){
  let deleteBtnCollection = document.getElementsByClassName('btn btn-delete');    // Step 1: make a collection of all delete buttons
  for(let i = 0; i < deleteBtnCollection.length;i++){    // Step 2: loop through collection to add onclick event that will remove the product
    deleteBtnCollection[i].onclick = removeProduct; 
  }
}

addDeleteListener()



 let newRow = document.querySelector("#create");
 console.log(newRow)
 newRow.onclick = createItem;



 function createItem() {
    let text = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value;
    let number = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;
    // reference to where we'll add it
    let ogProducts = document.querySelector("#cart > tbody");

    // CREATE
    let createRow = document.createElement("tr");

    // MODIFY
    createRow.innerHTML = `<td class="name">
    <span>${text}</span>
  </td>

  <td class="pu">$<span>${number}</span></td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>`;

    // ATTACH
    ogProducts.appendChild(createRow);

    document.querySelector("#cart > tbody").innerHTML += createRow;

  addDeleteListener()
  
 }

