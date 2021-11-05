  const  enterBudget = document.querySelector('#enter-budget');
  const formFirst = document.querySelector('#form-first');
  const expenceName = document.querySelector('#name');
  const enterBtn = document.querySelector('#button-one');
  const formSecond = document.querySelector('#form-second');
  const expenceAmount = document.querySelector('#amount');
  const addBtn = document.querySelector('#add-btn');
  const myBudget = document.querySelector('#budget');
  const amountLeft = document.querySelector('#left');
  const expenceList = document.querySelector('#list');
  let budget;
  document.addEventListener('DOMElementLoaded',function(){ enterBudget.focus();})
  formFirst.addEventListener('submit', init);
  formSecond.addEventListener('submit', addExpence);

  function init(e){
      e.preventDefault();
      budget = enterBudget.value;
      if (budget !== "") {
          enableForm();
          expenceName.focus();
          myBudget.textContent = budget;
          amountLeft.textContent = budget;
      }

      else {
        let messageFirst = document.getElementById('#message-first');
          messageFirst.textContent = "Enter some value";
          setTimeout(function(){ messageFirst.style.display = 'none'; }, 2000)
      }
  }

  function enableForm (){
      expenceName.disabled = false;
      expenceAmount.disabled = false;
      addBtn.disabled = false;
      formFirst.parentElement.style.display = 'none';

    }

    function addExpence (e){
       e.preventDefault ();
       let name = expenceName.value;
       let amount = expenceAmount.value;
       formSecond.reset();
       expenceName.focus();
       addToList(name,amount);
       updateBudget(amount);

    }


    function addToList(item,value){
    if( item != " " && value != " ") {
       let li = document.createElement('li');
       let span = document.createElement('span');
        li.className = "list-group-item";
         span.className = 'badge';
         li.textContent = item;
         span.textContent = value;
         li.appendChild(span);
        expenceList.appendChild(li);  }
    }

    function updateBudget(expence){
        let total = budget - expence;
        budget = total;
        amountLeft.textContent = budget;
        checkBudget(budget);

    }

    function checkBudget(budget) {
        let initialBudget = Number(myBudget.textContent);
        if (budget <= 0.5 * initialBudget) {
            amountLeft.parentElement.className = 'bg-warning'; }
        if (budget <= 0.25 * initialBudget) {
            amountLeft.parentElement.className = 'bg-danger'; }
        if (budget <= 0) {
            amountLeft.parentElement.className = 'bg-danger';
            document.getElementById('message-second').textContent = 'You have used your all money'
        }
    }
