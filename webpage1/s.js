function layout() {
  var box = document.getElementById('box');

  var layoutContainer = document.createElement('div');
  layoutContainer.style.width = '100%'; 
  layoutContainer.style.height = '100%';
  layoutContainer.style.border = '1px solid gray';
  layoutContainer.style.position = 'relative';

  var column1 = document.createElement('div');
  column1.style.width = '50%'; 
  column1.style.height = '100%';
  column1.style.borderRight = '1px solid gray';
    column1.style.float = 'left'; 

  
  var column2 = document.createElement('div');
  column2.style.width = '50%';
  column2.style.height = '100%';
  column2.style.float = 'left';
    layoutContainer.appendChild(column1);
  layoutContainer.appendChild(column2);


  box.innerHTML = '';
  box.appendChild(layoutContainer);
}


function lform() {
  var name = document.getElementById('name').value;
  var type = document.getElementById('type').value;
  var box = document.getElementById('box');
  var lform = document.getElementById('lform');


  var labelElement = document.createElement('label');
  labelElement.innerHTML = name;
  labelElement.style.fontWeight = 'bold'; 


  box.appendChild(labelElement);

  lform.innerHTML = "";
}


function lform() {
  var name = document.getElementById('name').value;
  var type = document.getElementById('type').value;
  var box = document.getElementById('box');
  var lform = document.getElementById('lform');

  var labelElement = document.createElement('label');
  labelElement.innerHTML = name;
  labelElement.style.fontWeight = 'bold'; 

  
  box.appendChild(labelElement);

  lform.innerHTML = "";
}


  function clear(){
    var box=document.getElementById('box');
    box.innerHTML="";
    location.reload();
    
  }
  
  function preview(){
    const temp=document.getElementById('box');
    const preview=document.getElementById('preview');
    preview.innerhtml=temp;
  }
 
  
    const createButton = document.getElementById("createButton");
  const elementContainer = document.getElementById("elementContainer");

  createButton.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", "Create Element");
  });

  elementContainer.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  elementContainer.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    if (data === "Create Element") {
      const newElement = document.createElement("div");
      newElement.className = "draggable";
      newElement.textContent = "New Element";
      newElement.draggable = true;
      elementContainer.appendChild(newElement);
    }
  });