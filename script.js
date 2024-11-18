const taskInput = document.getElementById("TaskInput")
const Addbutton =document.getElementById("addBtn")
const List = document.getElementById("taskList")

Addbutton.addEventListener("click",function(){
    const tasktext =taskInput.value.trim();
    const li =document.createElement("li")
    const span = document.createElement("span")
    span.textContent=tasktext;
    li.appendChild(span)
    const customIcon =document.createElement("i")
   
    customIcon.classList.add("fa-regular", "fa-circle-check","fa-2x");
    li.appendChild(customIcon)
   
    const deletebtn= document.createElement("i")
    
    deletebtn.classList.add("fa-regular", "fa-circle-xmark","fa-2x")
    
    deletebtn.addEventListener("click",function(){
        li.remove();

    });
    li.appendChild(deletebtn)
    taskList.appendChild(li);
     customIcon.addEventListener("click", function(){
        span.classList.toggle("completed");
       
     })
  


})