//Let's grab the UI elements
const form = document.querySelector('#packing-form');
const packList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-packing');
const filter = document.querySelector('#filter');
const packInput = document.querySelector('#packing');

loadPackingListeners();
//Let's add a spot for event listeners 
function loadPackingListeners(){
  //Add Packing List 
  form.addEventListener('submit',addPack);
  //Remove Packing event 
  packList.addEventListener('click',removePack);
  //Clear Pack event 
  clearBtn.addEventListener('click',clearPack);
  //Filter packing events 
  filter.addEventListener('keyup',filterPack);
}

//Add Task 
function addPack(e){
  if(packInput.value === ''){
    alert('Add a packing item');
  }
  //Create li element 

  const li = document.createElement('li');
  //add class
li.className = 'collection-item';
//Create text node and apend to li 
li.appendChild(document.createTextNode(packInput.value));
//Create new link element 
const link = document.createElement('a');
//Add class
link.className = 'delete-item secondary-content';

//Add icon html 
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append the link to li 
li.appendChild(link);

//Append li to ul 
packList.appendChild(li);

//Clear Input 
packInput.value = '';

  e.preventDefault();
}

//Remove Task 
function removePack(e){
 if(e.target.parentElement.classList.contains('delete-item')){
  // console.log(e.target);
  if(confirm('Are you sure')){
    e.target.parentElement.parentElement.remove();
  }
 }
}

//Clear Task
function clearPack(){
  // taskList.innerHTML = '';

  //Faster 
  while(packList.firstChild){
    packList.removeChild(packList.firstChild);
  }
}

// Filter packing items
function filterPack(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(pack){
    const item = pack.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      pack.style.display = 'block';
    }else{
      pack.style.display = 'none';
    }
  });

  console.log(text);

}