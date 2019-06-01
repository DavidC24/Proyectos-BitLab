var i;
var ul=document.getElementById('Lista');
var button=document.getElementById('Agregar');
button.addEventListener('click', agregarItem);
var li;
var target;
var counter=document.getElementById('Con');
var removeButton=document.getElementById('Eliminar');
removeButton.addEventListener('click', eliminarItem);

function agregarItem(){
  var input=document.getElementById('Insert');
  var item=input.value;
  ul=document.getElementById('Lista');
  var textnode=document.createTextNode(item);
  
  if(item==''){
     return false;
     }else{
       li=document.createElement('li');
       
       var checkbox=document.createElement("Insert")
       checkbox.type="checkbox";
       checkbox.name="item";
       checkbox.setAttribute('id','Conf');
       var label=document.createElement("label");;
       label.htmlFor='item';
       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);
       ul.insertBefore(li,ul.childNodes[0]);
       
        setTimeout(function(){
          li.className='anim';
        }, 1);
       
       input.value="";
    }
}


function eliminarItem(){
  li=ul.children;
  for(i=0;i<li.length;i++){
    while(li[i]&&li[i].children[0].checked){
       ul.removeChild(li[i]);
    }
  }
}