const addField = document.getElementById('addField');
const addBtn = document.getElementById('addBtn');
var container = document.querySelector('.content');

function addTodo() {
  
  if (addField.value.search(/[A-Za-z0-9\\\!@#$%^&*()_\-+=\{\}\[\]\;\:<>,.?/~\`]/gmi) == 0) {
    let element = document.createElement('div');
    element.classList += "task" 
    element.innerText = addField.value;
    container.appendChild(element);
    addField.value = '';

    let deleteTxt = document.createElement('button');
    deleteTxt.classList += 'deleteTask'
    deleteTxt.innerText = '✖';
    element.appendChild(deleteTxt);
    
    let deleteBtn = document.querySelector('.deleteTask');
    let taskDiv = document.querySelector('.task')
    
    deleteBtn.addEventListener('click', function() {
      taskDiv.remove()
    })
    
  } else {
    alert("Please Fill Out All Fields!") 
  }
};



addBtn.addEventListener('click', function() {
  addTodo()
})

window.addEventListener("keypress", e => {
  e = e.key

  if (e=="Enter"){
    addBtn.click()
  }
  
})

//"Sometimes, logic isn't my strongest suit man" - Vnut Sheets
//"well it is mine AHAHAHHAHAHHAHHA BUM WHAT A BOZO" - Ay Ay ryan sunny the bombastic person
